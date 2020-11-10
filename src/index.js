// importa öðru sem þarf...
import { fetchEarthquakes } from './lib/earthquakes';
import { init } from './lib/map';
import { jardskjalftaGogn } from './lib/geoGogn';

document.addEventListener('DOMContentLoaded', async () => {
  // Hér er allt „vírað“ saman
  const earthquakes = fetchEarthquakes();
  const list = document.querySelector('.earthquakes');

  jardskjalftaGogn(list, earthquakes);

  init('themap');
});
