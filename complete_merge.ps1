$env:GIT_EDITOR = 'true'
cd "c:\Users\ctf57\OneDrive\Desktop\WvNatureWeatherApp"
git commit --no-edit
git push origin main
Remove-Item "c:\Users\ctf57\OneDrive\Desktop\WvNatureWeatherApp\complete_merge.ps1" -ErrorAction SilentlyContinue
