import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Ionicons from 'react-native-vector-icons/Ionicons';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBpKUJ6oRmSdh_ByI-zNIRkMCT7TUJnPLw';

const RouteMap = ({origin, destination}) => {
  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };
  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };
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
        strokeWidth={3}
        strokeColor="blue"
      />
      <Marker
        coordinate={originLoc}
        title={origin.details.address_components[0].long_name}
      />
      <Marker
        coordinate={destinationLoc}
        title={destination.details.address_components[0].long_name}
        pinColor={'#008000'}
      />
    </MapView>
  );
};

export default RouteMap;
