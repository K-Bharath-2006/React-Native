import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import styles from './style';
type RootStackParamList = {
  Login: undefined;
  StudentRegisteration: undefined;
};

const EntrancePage = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleStartLearning = () => {
    navigation.navigate('Login'); // Navigate to Login screen
  };

  const handleStudentRegistration = () => {
    navigation.navigate('StudentRegisteration'); // Navigate to RegisterStudent screen
  };

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
      <View style={styles.card}>
        <Text style={styles.heading}>Rural Learning Platform</Text>
        <Text style={styles.heading}>______________</Text>
        <View style={styles.underline} />
        <Text style={styles.subheading}>
          Gamified platform offering interactive games, multilingual lessons,
          and offline learning for grades 6-12. It inspires students, empowers
          teachers with real-time insights, and ensures every child can explore,
          learn, and excel—no matter where they are.
        </Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.startLearningButton}
            onPress={handleStartLearning}>
            <Text style={styles.buttonText}>    Start Learning →</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registrationButton}
            onPress={handleStudentRegistration}>
            <Text style={styles.buttonText}>     Student Registration →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EntrancePage;
