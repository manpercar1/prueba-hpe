echo "Running 'pretest.sh' script do download Google Maps API for testing..."
rm google-maps-api.js
date +"// Download time: %Y-%m-%d %H:%M" >> google-maps-api.js
curl 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCWjJsGHqY6PokyYNuLi2s-eOe8pN1H1Vw' >> google-maps-api.js
echo "'pretest.sh' finished"