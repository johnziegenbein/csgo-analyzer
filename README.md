# CSGO Analyzer

This is a small project for showing CSGO stats as well as analyzing demos to parse out interesting facts that normal stats might not show.

## Deploy to GitHub Pages
1. run from csgo-analyzer-app ng build --prod --output-path docs --base-href /csgo-analyzer/
2. Move docs to csgo-analyzer
3. change href to <base href="/csgo-analyzer/docs"> in index.html
4. copy index.html and rename copy 404.html
5. push to master

## Dependencies
Bootstrap version: (npm install bootstrap@4.0.0-alpha.6 --save)
CSGO demofile parser: (npm install --save demofile)