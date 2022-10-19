import React from 'react';
import Main from './src/main'
import AnimalInfo from './src/animal_info'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();
const App = () => {
  return (
  <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
            <Stack.Screen
            name='Main'
            component={Main}
            />
            <Stack.Screen
            name='About'
            component={AnimalInfo}
            options={{title: 'О животном'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;