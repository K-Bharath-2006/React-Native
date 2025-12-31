import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import {registerStudentApi} from './utils';

type RootStackParamList = {
  HomePage: undefined;
  Login: undefined;
};

const RegisterStudent = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [classStandard, setClassStandard] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [staffId, setStaffId] = useState('');
  const [schoolId, setSchoolId] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    const studentData = {
      student_id: studentId,
      student_name: studentName,
      class_standard: classStandard,
      password: password,
      school_id: schoolId,
      teacher_id: staffId,
    };

    try {
      const res = await registerStudentApi(studentData);
      Alert.alert('Success', `${res.message}\nSynced: ${res.sync_status}`);
      navigation.navigate('Login');
    } catch (err: unknown) {
      let message = 'An unexpected error occurred';
      if (err instanceof Error) message = err.message;
      else if (typeof err === 'object' && err !== null)
        message = JSON.stringify(err);
      Alert.alert('Error', message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageSubtitle}> Back </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Register Student</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Student Name *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            value={studentName}
            onChangeText={setStudentName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Student Id *</Text>
          <TextInput
            style={styles.input}
            placeholder="student@example.com"
            value={studentId}
            onChangeText={setStudentId}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Class Standard *</Text>
          <TextInput
            style={styles.input}
            placeholder="Select your class"
            value={classStandard}
            onChangeText={setClassStandard}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password *</Text>
          <TextInput
            style={styles.input}
            placeholder="Create a Strong Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password *</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Staff Id *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Staff's Id"
            value={staffId}
            onChangeText={setStaffId}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>School ID *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your School ID"
            value={schoolId}
            onChangeText={setSchoolId}
          />
        </View>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register Student</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegisterStudent;
