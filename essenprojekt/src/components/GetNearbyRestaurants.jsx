
import { getType } from "./RestaurantLocation";

const getNearbyRestaurants = (latitude, longitude, radius,type) => {
  // type=getType 
  type=getType()
  // console.log(type);
    return new Promise((resolve, reject) => {
        const url = `https://corsproxy.io/?https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=restaurant&keyword=${encodeURIComponent(type)}&key=AIzaSyBxDaNQIDd6epZFcX7rE46-a4btMaqUU5M`;
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.results.length === 0) {
            throw new Error("No nearby restaurants found");
            
          }
          
          const restaurants = data.results.map(result => ({
            name: result.name,
            address: result.vicinity,
            latitude: result.geometry.location.lat,
            longitude: result.geometry.location.lng
          }));
          const randomIndex = Math.floor(Math.random() * restaurants.length);
          const randomRestaurant = restaurants[randomIndex];
          resolve(randomRestaurant);
        })
        .catch(error => {
          console.error(error);
          reject(error);
        });
    });

}
export default getNearbyRestaurants