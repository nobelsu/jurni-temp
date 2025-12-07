import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { createDrawerNavigator } from '@react-navigation/drawer';

import GettingStartedScreen from './screens/auth/GettingStarted';
import PhoneNumberScreen from './screens/auth/PhoneNumber';
import LoginPasswordScreen from './screens/auth/login/Password';
import RegisterPasswordScreen from './screens/auth/register/Password';
import RegisterEmailScreen from './screens/auth/register/Email';
import HomeScreen from './screens/home/Home';

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainAppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="GettingStarted" component={GettingStartedScreen} />
        <RootStack.Screen name="PhoneNumber" component={PhoneNumberScreen} />
        <RootStack.Screen name="LoginPassword" component={LoginPasswordScreen} />
        <RootStack.Screen name="RegisterPassword" component={RegisterPasswordScreen} />
        <RootStack.Screen name="RegisterEmail" component={RegisterEmailScreen} />
        <RootStack.Screen name="MainApp" component={MainAppNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
