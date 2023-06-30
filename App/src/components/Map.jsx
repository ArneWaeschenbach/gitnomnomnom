import { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { getRestaurantLocation } from './RestaurantLocation';

const MapContainer = (props) => {
  const mapStyles = {
    width: '40%',
    height: '60%'
    
  };
  const { lat, lng } = getRestaurantLocation();
  
  const [markerPosition] = useState({
    lat ,lng 
    
  });

  return (
    <Map
      google={props.google}
      zoom={18}
      style={mapStyles}
      initialCenter={{ lat:  markerPosition.lat, lng: markerPosition.lng }}
     >
      <Marker
        position={{ lat: markerPosition.lat, lng: markerPosition.lng }}
        />
    </Map>
  );
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBxDaNQIDd6epZFcX7rE46-a4btMaqUU5M'
})(MapContainer);


// "AIzaSyBxDaNQIDd6epZFcX7rE46-a4btMaqUU5M"