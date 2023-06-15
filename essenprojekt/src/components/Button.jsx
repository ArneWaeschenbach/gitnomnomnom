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
  
  
  const handleClickMultipleTimes = async () => {
    try {
      const position = await getPositon();
      const restaurantInfoArray = [];
      let loopCount = 0;
  
      while (restaurantInfoArray.length < 5 && loopCount < 10) {
        const restaurant = await getNearbyRestaurants(position.latPositon, position.lngPositon, radius, );
        
        loopCount++;
        
        const isDuplicate = restaurantInfoArray.some((item) => 
          item.info === `Name: ${restaurant.name} | Address: ${restaurant.address}`
        );
  
        if (!isDuplicate) {
          const info = `Name: ${restaurant.name} | Address: ${restaurant.address}`;
          restaurantInfoArray.push({ info, longitude: restaurant.longitude, latitude: restaurant.latitude });
        }
  
      }
      if (restaurantInfoArray.length < 5) {
        restaurantInfoArray.push({ info: 'Keine weiteren Restaurants gefunden' });
      }
  
      if (restaurantInfoArray.length === 0) {
        setRestaurantInfo('Keine Restaurants in der Nähe gefunden.');
      } else {
        setRestaurantInfo(restaurantInfoArray.map(restaurant => restaurant.info).join('<br><br>'));
  
        const firstRestaurant = restaurantInfoArray[0];
        setRestaurantLocation(firstRestaurant.longitude, firstRestaurant.latitude);
      }
  
      setType(checkboxName);
    } catch (error) {
      console.error(error);
      setRestaurantInfo('Fehler: Keine Restaurants in der Nähe gefunden.');
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

<button onClick={handleClickMultipleTimes}>Get nearby restaurants </button>
<p dangerouslySetInnerHTML={{ __html: restaurantInfo }}></p>
      {restaurantInfo && <MapContainer key={restaurantInfo} />}
    </div>
  );
};

export default Button;
