import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { Touchable } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text styles={styles.text}>Kecialapp</Text>
      <FormInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholder="Email"
        value={email}
      />
      <FormInput
        icon="lock"
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
      />

      <FormButton title="Sign In" onPress={() => alert('Sign in')} />

      <TouchableOpacity
        onPress={() => console.log('Hola')}
        style={styles.forgotButton}>
        <Text style={styles.navButtonText}>Forgot password?</Text>
      </TouchableOpacity>

      <SocialButton
        buttonTitle="Sign in with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => console.log('Facebook')}
      />

      <SocialButton
        buttonTitle="Sign in with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => console.log('Google')}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        style={styles.forgotButton}>
        <Text style={styles.navButtonText}>
          Don't have an account? create here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
