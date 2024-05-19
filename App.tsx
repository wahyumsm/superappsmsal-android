import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LoginScreen} options={{headerShown: true}} />
        {/* <Stack.Screen name="Home" component={Home} options={{headerShown: true}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
