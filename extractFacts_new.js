function extractFacts(text, town){
  if(!text) return [];
  
  // Expanded keyword list for interesting historical facts
  const interestKeywords = [
    'festival', 'reenactment', 're-enactment', 'civil war', 'relics', 'artifacts', 'battle', 'skirmish',
    'fort', 'fortress', 'fortification', 'museum', 'historic site', 'historical society', 'local history',
    'genealogy', 'ancestors', 'settlers', 'pioneers', 'founders', 'founding', 'founded', 'established',
    'incorporated', 'charter', 'town charter', 'county seat', 'county courthouse', 'railroad', 'railway',
    'coal mine', 'mining', 'timber', 'logging', 'lumber', 'mill', 'sawmill', 'gristmill', 'factory',
    'industry', 'manufacturing', 'bridge', 'tunnel', 'canal', 'turnpike', 'highway', 'route', 'trail',
    'historic district', 'downtown', 'main street', 'monument', 'memorial', 'statue', 'marker', 'plaque',
    'cemetery', 'cemetary', 'graveyard', 'burial ground', 'church', 'chapel', 'synagogue', 'meetinghouse', 'schoolhouse',
    'academy', 'college', 'university', 'library', 'courthouse', 'town hall', 'city hall', 'mayor',
    'disaster', 'flood', 'fire', 'earthquake', 'storm', 'tornado', 'blizzard', 'depression', 'economic boom',
    'gold rush', 'oil boom', 'coal boom', 'boomtown', 'ghost town', 'abandoned', 'population boom',
    'immigration', 'ethnic community', 'immigrant', 'frontier', 'wilderness', 'exploration', 'expedition',
    'railroad depot', 'train station', 'depot', 'wharf', 'dock', 'port', 'covered bridge', 'stone bridge',
    'dam', 'reservoir', 'landmark', 'national register', 'telegraph', 'newspaper', 'gazette', 'heritage',
    'tradition', 'folklore', 'legend', 'oral history', 'named after', 'known for', 'famous for',
    'historic marker', 'scenic byway', 'park', 'plaza', 'square', 'labor strike', 'protest', 'riot',
    'trial', 'court', 'judge', 'sheriff', 'migration', 'survey', 'expedition', 'archaeological',
    'ruins', 'foundation', 'cave', 'cavern', 'mine shaft', 'viaduct', 'aqueduct', 'covered bridge',
    'trestle', 'lookout', 'tower', 'lighthouse', 'broadcast', 'printing press', 'invention', 'patent',
    'architect', 'developer', 'subdivision', 'agriculture', 'farming', 'orchard', 'vineyard',
    'market', 'bazaar', 'fair', 'carnival', 'parade', 'celebration', 'holiday', 'custom',
    'photograph', 'portrait', 'mural', 'sculpture', 'craft', 'pottery', 'quilt', 'blacksmith',
    'folk music', 'ballad', 'bluegrass', 'gospel', 'theater', 'opera', 'circus', 'stadium',
    'race track', 'conservation', 'tourism', 'visitor center', 'welcome center', 'chamber of commerce',
    'business district', 'volunteer', 'charity', 'activism', 'reform', 'anniversary', 'centennial',
    'bicentennial', 'heritage', 'sesquicentennial'
  ];
  
  // First fix abbreviations so they don't break sentence splitting
  let fixedText = text.replace(/U\.S\.A\./g, 'USA').replace(/U\.S\./g, 'US').replace(/U\.K\./g, 'UK');
  fixedText = fixedText.replace(/\bSt\./g, 'Saint').replace(/\bMt\./g, 'Mount');
  
  const facts = [];
  const sentences = fixedText.split('.');
  
  for(let i = 0; i < sentences.length; i++){
    let sentence = sentences[i].trim();
    if(sentence.length < 20 || sentence.length > 250) continue;
    
    const lowerSentence = sentence.toLowerCase();
    
    // Skip generic/obvious facts
    if(lowerSentence.indexOf('is a county') >= 0 || lowerSentence.indexOf('is a town') >= 0 || 
       lowerSentence.indexOf('is a city') >= 0 || lowerSentence.indexOf('is a village') >= 0 ||
       lowerSentence.indexOf('is an unincorporated') >= 0 || lowerSentence.indexOf('is located in') >= 0){
      continue;
    }
    
    // Check if sentence contains any interesting keywords
    const hasKeyword = interestKeywords.some(keyword => lowerSentence.indexOf(keyword) >= 0);
    
    if(hasKeyword){
      // Restore abbreviations in the final sentence
      sentence = sentence.replace(/\bUSA\b/g, 'U.S.A.').replace(/\bUS\b/g, 'U.S.').replace(/\bUK\b/g, 'U.K.');
      sentence = sentence.replace(/\bSaint\b/g, 'St.').replace(/\bMount\b/g, 'Mt.');
      facts.push(sentence + '.');
    }
  }
  
  if(facts.length === 0) facts.push(town + ' is a historic community in West Virginia.');
  return facts;
}
