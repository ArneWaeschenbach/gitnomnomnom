let lat = 0;
let lng = 0;
// import Daten aus button
export const setRestaurantLocation = (newLat, newLng) => {
  lat = newLng;
  lng = newLat;
};
// export der daten nach Map
export const getRestaurantLocation = () => {
  return { lat, lng };
};
