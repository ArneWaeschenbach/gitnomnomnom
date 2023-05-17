import { useState } from 'react';
import GetRadius from './GetRadius';
import getNearbyRestaurants from './GetNearbyRestaurants'
import { getPositon } from './GetPositon';
import { setRestaurantLocation } from './RestaurantLocation';
import MapContainer from "./Map"

export const Button = () => {
  const [restaurantInfo, setRestaurantInfo] = useState('');
  const [radius, setRadius] = useState('');

  const handleRadiusChange = (value) => {
    setRadius(value);
  }

  const handleClick = async () => {
    try {
      const position = await getPositon();
      const restaurant = await getNearbyRestaurants(position.latPositon, position.lngPositon, radius);
      const info = `Name: ${restaurant.name} | Address: ${restaurant.address}`;
      setRestaurantInfo(info);

      setRestaurantLocation(restaurant.longitude, restaurant.latitude);
      
    } catch (error) {
      console.error(error);
      setRestaurantInfo('Error: No nearby restaurants found');
    }
  };
  
  return (
    <div>
      <GetRadius onRadiusChange={handleRadiusChange} />
      <button onClick={handleClick} >Get nearby restaurant</button>
      <p>{restaurantInfo}</p>
      {restaurantInfo && <MapContainer key={restaurantInfo} />}
    </div>
  );
};

export default Button;

