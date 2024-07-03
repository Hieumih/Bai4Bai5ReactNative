import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
/// react navigation
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import MyStack from './app/stack';
import MyTabs from './app/tab';

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <MyTabs Tab={Tab}/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});
