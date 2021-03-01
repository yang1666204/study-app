import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './pages/shouye/index'
import AskScreen from './pages/tiwen/index'
import MsgScreen from './pages/biji';


const Stack = createStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ask" component={AskScreen} />
        <Stack.Screen name="Msg" component={MsgScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Nav;
