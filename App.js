import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/component/HomeScreen'
import FoodList from './src/component/FoodList'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FoodList" component={FoodList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;