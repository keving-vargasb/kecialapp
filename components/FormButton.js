import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { windowHeight } from '../utils/Dimentions';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

const FormButton = ({ title, ...rest }) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;
