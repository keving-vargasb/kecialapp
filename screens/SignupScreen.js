import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Login screen</Text>
      <Button title="Click here" onPress={() => alert('Click event')} />
    </View>
  );
};

export default SignupScreen;
