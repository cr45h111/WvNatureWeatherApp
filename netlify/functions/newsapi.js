// Netlify serverless function to proxy NewsAPI requests
// This bypasses CORS and client-side API restrictions

exports.handler = async (event, context) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Get parameters from query string
  const { q, location, from, to } = event.queryStringParameters || {};
  
  // Your NewsAPI key (hardcoded here, or use Netlify environment variable)
  const apiKey = process.env.NEWSAPI_KEY || 'dde3828e067c4487bb3ce6a99611d878';
  
  // Build NewsAPI URL
  const params = new URLSearchParams({
    apiKey: apiKey,
    language: 'en',
    sortBy: 'publishedAt',
    pageSize: 10
  });
  
  // Add query parameter (location or custom query)
  if (q) {
    params.append('q', q);
  } else if (location) {
    params.append('q', location);
  }
  
  // Add date range if provided
  if (from) params.append('from', from);
  if (to) params.append('to', to);
  
  const url = `https://newsapi.org/v2/everything?${params.toString()}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // Return the data with CORS headers
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: 'Failed to fetch news',
        message: error.message 
      })
    };
  }
};
