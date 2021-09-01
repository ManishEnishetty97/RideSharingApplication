import React, {useState, useEffect} from 'react';
import {View, Dimensions, Text} from 'react-native';
import OrderMap from '../../components/OrderMap';
import {useRoute} from '@react-navigation/native';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import {getOrder, getCar} from '../../graphql/queries';
import {onOrderUpdated, onCarUpdated} from './subscriptions';
import {updateCar} from '../../../../AutoDriverApp/src/graphql/mutations';
import {getDistance} from 'geolib';
const OrderScreen = props => {
  const [car, setCar] = useState(null);
  const [order, setOrder] = useState(null);

  const route = useRoute();
  console.log('orderscreen');
  console.log(route.params);
  // Fetch order on initial render
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await API.graphql(
          graphqlOperation(getOrder, {id: route.params.id}),
        );
        setOrder(orderData.data.getOrder);
      } catch (e) {}
    };
    fetchOrder();
  }, []);
  // Subscribe to order updates
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onOrderUpdated, {id: route.params.id}),
    ).subscribe({
      next: ({value}) => setOrder(value.data.onOrderUpdated),
      error: error => console.warn(error),
    });

    return () => subscription.unsubscribe;
  }, []);

  useEffect(() => {
    if (!order?.carId || order.carId === '1') {
      return;
    }
    const fetchCar = async () => {
      try {
        const carData = await API.graphql(
          graphqlOperation(getCar, {id: order.carId}),
        );
        setCar(carData.data.getCar);
        console.log(car?.latitude);
        console.log('car latitude');
      } catch (e) {}
    };
    fetchCar();
  }, [order]);
  // Subscribe to car updates
  useEffect(() => {
    if (!order?.carId || order.carId === '1') {
      return;
    }
    const subscription = API.graphql(
      graphqlOperation(onCarUpdated, {id: order.carId}),
    ).subscribe({
      next: ({value}) => setCar(value.data.onCarUpdated),
      error: error => console.warn(error),
    });
    return () => subscription.unsubscribe();
  }, [order]);

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  };
  getLocation();
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <OrderMap car={car} />
      </View>
      <View>
        <Text>Order status: {order?.status}</Text>
        <Text>car status:{car?.latitude}</Text>
        <Text>Time: {order?.duration}</Text>
        {/*<Text>Distance:{getDistance().toString()}</Text>*/}
      </View>
    </View>
  );
};

export default OrderScreen;
