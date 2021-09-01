import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const CovidMessage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        People who are fully vaccinated with an FDA-authorized vaccine or a
        vaccine authorized for emergency use by the World Health Organization
        can travel safely within the United States.
      </Text>
      <Text style={styles.learnmore}>Learn More</Text>
    </View>
  );
};

export default CovidMessage;
