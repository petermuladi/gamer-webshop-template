
mapboxgl.accessToken = 'pk.eyJ1IjoibXVsYXAiLCJhIjoiY2xmY2FyNzFyMzh0ODN2cjA1cmR4YW44aCJ9.0_2r5aXGZn9Sk3vvNmeUtg';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-73.829612, 40.843315],
    zoom: 9,
    
});
map.on(`style.load`,function () {

    new mapboxgl.Marker({ color: 'red' })
        .setLngLat([-73.829612, 40.843315])
        .addTo(map);

    new mapboxgl.Popup().setLngLat([-73.829612, 40.843315])
        .setHTML(`<h5 class='p-1'>😀 We are Here! <h5> <small>Open 	
    10:00 AM - 8:00 PM</small>`)
        .addTo(map);

    window.scrollTo(0,0);


});


