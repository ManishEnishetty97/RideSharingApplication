import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {API, graphqlOperation} from 'aws-amplify';
import {listCars} from '../../graphql/queries';

// import cars from '../../assets/data/cars';

const HomeMap = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listCars));
        setCars(response.data.listCars.items);

      } catch (e) {
        console.error(e);
      }
    };

    fetchCars();
  }, []);

  const getImage = type => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    if(type === 'UberXL') {
      return require('../../assets/images/top-UberXL.png');
    }
  };

  //const origin = {latitude: 34.8141, longitude: -82.326};
  //const destination = {latitude: 34.6734, longitude: -82.8367};
  return (
    <MapView
      style={{width: '100%', height: '50%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 34.8141,
        longitude: -82.326,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
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
      ))}
    </MapView>
  );
};

export default HomeMap;
