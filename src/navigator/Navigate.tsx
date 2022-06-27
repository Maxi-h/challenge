import * as React from 'react';

// import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/Details';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
