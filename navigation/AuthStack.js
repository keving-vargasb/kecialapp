import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignupScreen from '../screens/SignupScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let routeName = 'Onboarding';

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      setIsLoading(false);
      if (value) {
        setIsFirstLaunch(false);
        return;
      }

      AsyncStorage.setItem('alreadyLaunched', 'true');
      setIsFirstLaunch(true);
    });
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isFirstLaunch) {
    routeName = 'Login';
  }

  console.log(routeName);
  return (
    <AppStack.Navigator headerMode="none" initialRouteName={routeName}>
      <AppStack.Screen
        component={OnboardingScreen}
        name="Onboarding"
        options={{
          header: () => null,
        }}
      />
      <AppStack.Screen
        component={LoginScreen}
        name="Login"
        options={{
          header: () => null,
        }}
      />
      <AppStack.Screen component={SignupScreen} name="Signup" />
    </AppStack.Navigator>
  );
};

export default AuthStack;
