import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MyTabs from '../tab/index';

import LoginScreen from './LoginScreen';
import InfoScreen from './InfoScrren';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: 'white'
      }
    }}>
      <Stack.Screen name="Info" component={InfoScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Logined" component={MyTabs} />

    </Stack.Navigator>
  );
}


export default MyStack;