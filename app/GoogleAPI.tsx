import axios from 'axios';
import GOOGLE_MAPS_API_KEY from '../config';

export const getRouteCoordinate = async (origin, destination) => {
    try {
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
        origin.lat + ',' + origin.lng
        )}&destination=${encodeURIComponent(destination.lat + ',' + destination.lng)}&key=${GOOGLE_MAPS_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.routes[0].overview_polyline.points;
    } catch (error) {
        console.error('Error getting route coordinates:', error);
        throw error;
    }
};

export const getAlternativeRouteCoordinates = async (origin, destination) => {
    try {
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
        origin.lat + ',' + origin.lng
        )}&destination=${encodeURIComponent(destination.lat + ',' + destination.lng)}&key=${GOOGLE_MAPS_API_KEY}&alternatives=true`;
        const response = await fetch(url);
        const data = await response.json();
        var points = data.routes.map(function(route) {
            return route.overview_polyline.points;
          });
        return points;
    } catch (error) {
        console.error('Error getting route coordinates:', error);
        throw error;
    }
};

const fetchPlaceDetails = async (placeId) => {
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`;

  try {
    const response = await axios.get(url);
    const placeDetails = response.data.result;
    console.log(placeDetails);
    // Process the place details as needed
  } catch (error) {
    console.error(error);
  }
};
