import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import StackNavigator from './Navigate';
import CounterScreen from '../Screens/CounterScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const navigationRef = useNavigationContainerRef();
  // const routeNameRef = React.useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      // onStateChange={() =>
      //   console.log('New state is', navigationRef.getCurrentRoute().name)
      // }
    >
      <Drawer.Navigator
        screenOptions={{
          swipeEnabled: true,
        }}>
        <Drawer.Screen
          options={{headerShown: false}}
          name="Main"
          component={StackNavigator}
        />
        <Drawer.Screen
          options={{headerShown: false}}
          name="Counter"
          component={CounterScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
