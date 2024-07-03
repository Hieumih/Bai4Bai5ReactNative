import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../tab/HomeScreen';
import AccountScreen from '../tab/AccountScreen';



function MyStack({Stack}) {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />

    </Stack.Navigator>
  );
}


export default MyStack;