// import 'ol/ol.css';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import GeoJSON from 'ol/format/GeoJSON';
// // import VectorImageLayer from 'ol/layer/VectorImage';
// // import VectorLayer from 'ol/layer/Vector';
// // import VectorSource from 'ol/source/Vector';
// // import {Fill, Stroke, Style, Text} from 'ol/style';

// $(document).on('turbolinks:load', function() {
//   var map = new ol.Map({
//     target: 'map',
//     layers: [
//       new ol.layer.Tile({
//         source: new ol.source.OSM()
//       })
//     ],
//     view: new ol.View({
//       center: ol.proj.fromLonLat([107.5294439, -6.8570405]),
//       zoom: 20
//     })
//   });
// });

import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {toStringHDMS} from 'ol/coordinate';
// import {toLonLat} from 'ol/proj';
import TileJSON from 'ol/source/TileJSON';
import {fromLonLat, toLonLat} from 'ol/proj';

$(document).on('turbolinks:load', function() {
  // var key = 'Your Mapbox access token from https://mapbox.com/ here';
  // var key = 'pk.eyJ1IjoieWVzc2luZiIsImEiOiJja2QzNGwybnMweXp6MnpwMTV0cGZpMTN2In0.LDxUC5XinGmyaxvFKIoh-w';

  // /**
  //  * Elements that make up the popup.
  //  */
  // var container = document.getElementById('popup');
  // var content = document.getElementById('popup-content');
  // var closer = document.getElementById('popup-closer');


  // /**
  //  * Create an overlay to anchor the popup to the map.
  //  */
  // var overlay = new Overlay({
  //   element: container,
  //   autoPan: true,
  //   autoPanAnimation: {
  //     duration: 250
  //   }
  // });


  // /**
  //  * Add a click handler to hide the popup.
  //  * @return {boolean} Don't follow the href.
  //  */
  // closer.onclick = function() {
  //   overlay.setPosition(undefined);
  //   closer.blur();
  //   return false;
  // };


  // *
  //  * Create the map.
   
  // var map = new Map({
  //   layers: [
  //     new TileLayer({
  //       source: new TileJSON({
  //         url: 'https://api.tiles.mapbox.com/v4/mapbox.natural-earth-hypso-bathy.json?access_token=' + key,
  //         crossOrigin: 'anonymous'
  //       })
  //     })
  //   ],
  //   overlays: [overlay],
  //   target: 'map',
  //   view: new View({
  //     center: [0, 0],
  //     zoom: 2
  //   })
  // });


  // /**
  //  * Add a click handler to the map to render the popup.
  //  */
  // map.on('singleclick', function(evt) {
  //   var coordinate = evt.coordinate;
  //   var hdms = toStringHDMS(toLonLat(coordinate));

  //   content.innerHTML = '<a href="http://localhost:3000/locations/share">Share</a>';
  //   overlay.setPosition(coordinate);
  // });

  //Instantiate with some options and add the Control
  // var geocoder = new Geocoder('nominatim', {
  //   provider: 'google',
  //   lang: 'pt-BR',
  //   placeholder: 'Pesquise por um endereço',
  //   limit: 5,
  //   key: '....',
  //   keepOpen: false,
  //   debug: true
  // });
  // // map.addControl(geocoder);
  // console.log(geocoder)
  // $("#map").append(geocoder)

  // // I don't want/need Geocoder layer to be visible
  // geocoder.getLayer().setVisible(false);

  // //Listen when an address is chosen
  // geocoder.on('addresschosen', function(evt){
  //   var feature = evt.feature;
  //   var coord = evt.coordinate;

  //   // application specific
  //   app.addMarker(feature, coord);
  // });

  // GEOCODE START
  // var olview = new ol.View({ center: [0, 0], zoom: 2 }),
  // baseLayer = new ol.layer.Tile({ source: new ol.source.OSM() }),
  // map = new ol.Map({
  //   target: document.getElementById('map'),
  //   view: olview,
  //   layers: [baseLayer]
  // });
    
  // // popup
  // // var popup = new ol.Overlay.Popup();
  // // map.addOverlay(popup);
  // var overlay = new Overlay({
  //   element: document.getElementById('popup'),
  //   autoPan: true,
  //   autoPanAnimation: {
  //     duration: 250
  //   }
  // });
  // map.addOverlay(overlay);

  // //Instantiate with some options and add the Control
  // var geocoder = new Geocoder('nominatim', {
  //   provider: 'osm',
  //   lang: 'en',
  //   placeholder: 'Search for ...',
  //   limit: 5,
  //   debug: false,
  //   autoComplete: true,
  //   keepOpen: true
  // });
  // map.addControl(geocoder);
    
  // //Listen when an address is chosen
  // geocoder.on('addresschosen', function (evt) {
  //   console.info(evt);
  //   window.setTimeout(function () {
  //     // popup.show(evt.coordinate, evt.address.formatted);
  //     overlay.setPosition(evt.coordinate);
  //   }, 3000);
  // });
  // GEOCODER END


  showMap("106.865036", "-6.175110")
  function showMap(longitude, latitude){
    var map = new ol.Map({
      target: 'show-map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([longitude, latitude]),
        zoom: 20
      })
    });
  }
  $(".link-location").on("click", function(){
    var latitude = $(this).attr("data-latitude")
    var longitude = $(this).attr("data-longitude")

    showMap(longitude, latitude)
  });

});
// console.log($(".link_location"))