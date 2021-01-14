import React, { useEffect } from 'react';
import { SafeAreaView, Image, StyleSheet } from 'react-native';

// import { LogoInalum } from '../../assets/icon';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login")
    }, 3000);
    console.log("splash screen");
  })
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/coffee.png')} style={styles.logo} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  logo: {
    width: '100%',
    alignSelf: 'stretch',
    resizeMode: "center",
    
  }
})
export default Splash;