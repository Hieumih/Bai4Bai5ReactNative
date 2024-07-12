import { View, Text, StyleSheet, Button } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { NewTxtIpt } from "../../components/NewTxtIpt";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const checkPhoneNum = (phoneNum) => {
    // if (!phoneNum) return false;   

    if (phoneNum.length < 10 || phoneNum.length > 11) {
        return false;
    }
    const regex = /^[0-9]+$/;
    if (!regex.test(phoneNum)) {
        return false;
    }
    return true;
}


const AccountScreen = ({ navigation }) => {
    const [phoneNum, setPhonenum] = useState('');

    useEffect(() => {
        // console.log(phoneNum);
        // điều hướng nếu số điện thoại hợp lệ
        
        if (checkPhoneNum(phoneNum)) {
            // lưu vào storage
            AsyncStorage.setItem('phoneNum', phoneNum).then(() => {
                navigation.navigate('Home');
            });

        }
    });

    useFocusEffect(
        useCallback(() => {
            const getPhoneNum = async () => {
                const val = await AsyncStorage.getItem('phoneNum');
                setPhonenum(val ?? '');
            }
            getPhoneNum();

        }, [])
    )

    const html = !checkPhoneNum(phoneNum) ?
        <View >
            <Text style={styles.loginTxt}>Đăng nhập / Đăng Ký</Text>
            <View style={styles.ipt}>
                <NewTxtIpt placeholder={"Số điện thoại"} value={phoneNum} onChange={setPhonenum} fontAwesomeIcon={faPhone} inputMode={"tel"} />
            </View>

        </View> : 
        <View>
            <Text style={styles.loginTxt}>Tài khoản: {phoneNum}</Text>
            <Button title="Đăng xuất" onPress={() => {
                AsyncStorage.removeItem('phoneNum').then(() => {
                    setPhonenum('');
                    navigation.navigate('Login');
                });
            }} />
        </View>;



    return html;
}

export default AccountScreen

const styles = StyleSheet.create({
    loginTxt: {
        fontSize: 30,
        fontWeight: 'heavy',
        marginBottom: 20,
    },
    ipt: {
        marginBottom: 5,
    }
})