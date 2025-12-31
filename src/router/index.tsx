import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../views/login';
import EntranceScreen from '../views/entranceScreen';
import SplashScreen from '../views/splashScreen';
import StudentregisterationScreen from '../views/studentRegisteration';
import HomepageScreen from '../views/home';
import Subject6To10Screen from '../views/subject6To10';
import Subject11To12Screen from '../views/subject11To12';
import RewardScreen from '../views/rewards';
import {routes} from './routes';

const Stack = createNativeStackNavigator();

function RouterApp() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.Login}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.Entrance}
        component={EntranceScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={routes.Splash}
        component={SplashScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={routes.StudentRegisteration}
        component={StudentregisterationScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={routes.Home}
        component={HomepageScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={routes.ChooseSubject}
        component={Subject6To10Screen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={routes.ChooseSubjectpage}
        component={Subject11To12Screen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={routes.RewardsPage}
        component={RewardScreen}
      />
    </Stack.Navigator>
  );
}

export default RouterApp;
