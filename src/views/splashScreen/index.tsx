import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './style';

const HomeScreen = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Entrance'); // Replace with your entrance screen name
    }, 5000); // 10 seconds

    return () => clearTimeout(timer); // Clear timer if component unmounts early
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#49c6e7', '#5e60ce']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.iconBackground}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </LinearGradient>
      <Text style={styles.title}>Rural Learning Platform</Text>
    </View>
  );
};

export default HomeScreen;
