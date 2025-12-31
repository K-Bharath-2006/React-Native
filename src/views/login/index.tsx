import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import {LoginStudentApi} from './utils';
import styles from './style';


type RootStackParamList = {
  HomePage: undefined;
  Login: undefined;
};

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [selectedLang, setSelectedLang] = useState('en');

  const handleLaunchAdventure = async () => {
    const studentData = {
      student_id: studentId,
      password: password,
    };
    try {
      const res = await LoginStudentApi(studentData);
      Alert.alert('Success', res.message);
      navigation.navigate('Home');
    } catch (err: unknown) {
      let errorMessage = 'An unexpected error occurred';
      if (err instanceof Error) errorMessage = err.message;
      else if (typeof err === 'object' && err !== null)
        errorMessage = JSON.stringify(err);
      Alert.alert('Error', errorMessage);
    }
  };
  return (
    <View style={styles.bg}>
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.platformTitle}>Rural Learning Platform</Text>
        <Text style={styles.platformSubtitle}>
          Empowering students in grades 6-12
        </Text>
      </View>
      <View style={styles.card}>
        <View style={styles.languageRow}>
          <Picker
            selectedValue={selectedLang}
            style={styles.languagePicker}
            dropdownIconColor="#606060"
            onValueChange={setSelectedLang}
            mode={Platform.OS === 'ios' ? 'dialog' : 'dropdown'}>
            <Picker.Item label="us English" value="en" />
          </Picker>
        </View>
        <View>
          <Text style={styles.label}>Student Id *</Text>
          <TextInput
            style={styles.input}
            placeholder="Student@gmail.com"
            value={studentId}
            onChangeText={setStudentId}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#bababa"
          />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="•••••••"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#bababa"
          />
        </View>
        <TouchableOpacity style={styles.forgotPasswordBtn}>
          <Text style={styles.forgotPasswordText}>Forget Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.adventureBtn}
          onPress={handleLaunchAdventure}>
          <Text style={styles.adventureBtnText}>Launch Learning Adventure</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>
        Designed for rural schools with limited connectivity
      </Text>
    </View>
  );
};

export default LoginScreen;
