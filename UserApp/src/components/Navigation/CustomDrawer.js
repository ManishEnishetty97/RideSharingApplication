import React, {useEffect, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Auth} from 'aws-amplify';
import {API, graphqlOperation} from 'aws-amplify';
import {getOrder, getUser} from '../../graphql/queries';
import {useRoute} from '@react-navigation/native';

const CustomDrawer = props => {
  // const [username, setUsername] = useState(null);
  // const route = useRoute();
  // console.log(props);
  // useEffect(() => {
  //   const fetchName = async () => {
  //     try {
  //       const nameData = await API.graphql(
  //         graphqlOperation(getUser, {id: route.params.id}),
  //       );
  //       setUsername(nameData.data.getUser.name);
  //     } catch (e) {}
  //   };
  //   fetchName();
  // }, []);

  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: '#212121', padding: 15}}>
        {/* User Row */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#cacaca',
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 10,
            }}
          />

          <View>
            <Text style={{color: 'white', fontSize: 24}}>Manish</Text>
            <Text style={{color: 'lightgrey'}}>5.00 *</Text>
          </View>
        </View>

        {/* Messages Row */}
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#919191',
            borderTopWidth: 1,
            borderTopColor: '#919191',
            paddingVertical: 5,
            marginVertical: 10,
          }}>
          <Pressable
            onPress={() => {
              console.warn('Messages');
            }}>
            <Text style={{color: '#dddddd', paddingVertical: 5}}>Messages</Text>
          </Pressable>
        </View>

        {/* Do more */}
        <Pressable
          onPress={() => {
            console.warn('Make Money Driving');
          }}>
          <Text style={{color: '#dddddd', paddingVertical: 5}}>
            Do more with your account
          </Text>
        </Pressable>

        {/* Make money */}
      </View>

      <DrawerItemList {...props} />

      {/* Make money */}
      <Pressable
        onPress={() => {
          Auth.signOut();
        }}>
        <Text style={{padding: 5, paddingLeft: 20}}>Logout</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
