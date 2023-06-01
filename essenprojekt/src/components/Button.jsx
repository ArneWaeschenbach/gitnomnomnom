import { useState } from 'react';
import GetRadius from './GetRadius';
import getNearbyRestaurants from './GetNearbyRestaurants';
import { getPositon } from './GetPositon';
import { setRestaurantLocation } from './RestaurantLocation';
import MapContainer from "./Map";
import Checkbox from './Checkbox';
import { setType } from './RestaurantLocation';
export const Button = () => {
  const [restaurantInfo, setRestaurantInfo] = useState('');
  const [radius, setRadius] = useState('');

 
 
  const handleRadiusChange = (value) => {
    setRadius(value);
  };

  const handleCheckboxChange = (name) => {
    setCheckboxName(prevName => {
      const names = prevName.split(',');
      const index = names.indexOf(name);
  
      if (index !== -1) {
        names.splice(index, 1);
      } else {
        names.push(name);
      }
  
      return names.length > 0 ? names.join(',') : '';
    });
  };
  const [checkboxName, setCheckboxName] = useState('');
  
  

  const handleClick = async () => {
    try {
      const position = await getPositon();
      const restaurant = await getNearbyRestaurants(position.latPositon, position.lngPositon, radius, checkboxName);
      const info = `Name: ${restaurant.name} | Address: ${restaurant.address}`;
      setRestaurantInfo(info);

      setRestaurantLocation(restaurant.longitude, restaurant.latitude);
      setType(checkboxName)
    
    } catch (error) {
      console.error(error);
      setRestaurantInfo('Error: No nearby restaurants found');
    }
  };
  
  return (
    <div>
      <GetRadius onRadiusChange={handleRadiusChange} />
<Checkbox name="cafe" onChange={() => handleCheckboxChange("cafe")} />
<Checkbox name="bakery" onChange={() => handleCheckboxChange("bakery")} />
<Checkbox name="indian" onChange={() => handleCheckboxChange("indian")} />
<Checkbox name="Sushi" onChange={() => handleCheckboxChange("Sushi")} />
<Checkbox name="Italienisch" onChange={() => handleCheckboxChange("Italienisch")} />
<Checkbox name="Chinesisch" onChange={() => handleCheckboxChange("Chinesisch")} />
<Checkbox name="griechisch" onChange={() => handleCheckboxChange("griechisch")} />

      <button onClick={handleClick} >Get nearby restaurant</button>
      <p>{restaurantInfo}</p>
      {restaurantInfo && <MapContainer key={restaurantInfo} />}
    </div>
  );
};

export default Button;
