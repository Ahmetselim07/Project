import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './Screens/HomePage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MoshingFestDetails from './Screens/MoshingFestDetails';
import BernadyaConcert from './Screens/BernadyaConcert';
import AddCardScreen from './Screens/AddCardScreen';
import PaymentCard from './components/PaymentCard';
import { Provider } from 'react-redux';
import store from './redux/store';
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
       <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
  <Stack.Screen name='Home' component={HomePage}/>    
  <Stack.Screen name='MoshingFest' component={MoshingFestDetails}/>
  <Stack.Screen name='BernadyaConcert' component={BernadyaConcert}/>
  <Stack.Screen name='PaymentCard' component={PaymentCard}/>
  <Stack.Screen name='AddCard' component={AddCardScreen}/>
    </Stack.Navigator>
  <StatusBar hidden={false} />
    </NavigationContainer>
    </Provider>
   
    
      
      
    
  );
}


