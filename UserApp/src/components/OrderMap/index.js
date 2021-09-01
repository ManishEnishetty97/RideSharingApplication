import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_MAPS_APIKEY = 'AIzaSyBpKUJ6oRmSdh_ByI-zNIRkMCT7TUJnPLw';

const OrderMap = ({car}) => {
  const getImage = type => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    if (type === 'UberXL') {
      return require('../../assets/images/top-UberXL.png');
    }
  };
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  };
  getLocation();
  const destinationLoc = {latitude: lat, longitude: lng};
  const originLoc = {
    latitude: car?.latitude,
    longitude: car?.longitude,
  };
  console.log('printing car details');
  console.log(originLoc);
  console.log('printing destinationLoc');
  console.log(destinationLoc);
  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 34.8141,
        longitude: -82.326,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={6}
        strokeColor="black"
      />
      {car && (
        <Marker coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={{
              width: 70,
              height: 50,
              resizeMode: 'contain',
              transform: [
                {
                  rotate: `${car.heading}deg`,
                },
              ],
            }}
            source={getImage(car.type)}
          />
        </Marker>
      )}
    </MapView>
  );
};

export default OrderMap;
