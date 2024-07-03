import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
/// react navigation
import { NavigationContainer } from '@react-navigation/native';


// import MyStack from './app/stack';
import MyTabs from './app/tab';





export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});
