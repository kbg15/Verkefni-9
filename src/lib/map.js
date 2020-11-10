import L from 'leaflet';
import { el, element, formatDate } from './utils';

let map;


export function createPopup(geojson) {
  // TODO
  const x = geojson.geometry.coordinates[1];
  const y = geojson.geometry.coordinates[0];
  return L.marker([x, y]).addTo(map)
  .bindPopup(
    el('div',
      el('h2', geojson.properties.title),
      el('p', `${formatDate(geojson.properties.time)}`),
      element('a', { href: geojson.properties.url, target: '_blank' }, {}, 'Sjá nánar')),
  );
}


export function init(id) {
  // TODO
  map = L.map(id).setView([0.00, 0.00], 2);

  // Bætum við "tiles" frá OSM sem eru open source. Gætum líka
  // notað frá Google, mapbox eða fleirum en þyrftum þá aðgang
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map);
}
