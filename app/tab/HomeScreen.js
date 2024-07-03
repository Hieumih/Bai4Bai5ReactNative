import { View, Text, Button } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';




const HomeScreen = ({ navigation }) => {
    const [phoneNum, setPhonenum] = useState('');

    useFocusEffect(
        useCallback(() => {
            const getPhoneNum = async () => {
                const phoneNum = await AsyncStorage.getItem('phoneNum');
                setPhonenum(phoneNum);
            }
            getPhoneNum();

        }, [])
    )


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            {phoneNum ? <Text>Chào mừng, {phoneNum}</Text> : null}
            <Button
                title="Go to Scan"
                onPress={() => navigation.navigate('Scan')}
            />

        </View>
    )
}

export default HomeScreen