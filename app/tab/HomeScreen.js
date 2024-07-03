import { View, Text, Button, StyleSheet, ScrollView } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-native-fontawesome';
import { faQrcode, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import HomeMenuItem from "../../components/HomeMenuItem";
import HomeExploreItem from "../../components/HomeExploreItem";

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
        <ScrollView style={style.container}>
            {/* head */}

            <View style={style.head}>
                <View>
                    <Text style={style.welcome_text}>Chào mừng,</Text>
                    <Text style={style.welcome_user}>{phoneNum ?? "Ẩn danh"}</Text>
                </View>
                <View>
                    <Icon icon={faCircleUser} size={30}></Icon>
                </View>

            </View>

            {/* body */}
            <View style={style.body}>
                {/* Menu */}
                <View>
                    <Text style={style.part_text}>Menu</Text>
                    <View style={style.menu_items}>
                        <HomeMenuItem title="Scan" desc="useLessText" onPress={() => { navigation.navigate('Scan') }} icon={
                            <Icon icon={faQrcode} size={30}></Icon>
                        } />
                        <HomeMenuItem title="Scan" desc="useLessText" onPress={() => { navigation.navigate('Scan') }} icon={
                            <Icon icon={faQrcode} size={30}></Icon>
                        } />
                        <HomeMenuItem title="Scan" desc="useLessText" onPress={() => { navigation.navigate('Scan') }} icon={
                            <Icon icon={faQrcode} size={30}></Icon>
                        } />
                        <HomeMenuItem onPress={() => {  }}/>

                    </View>
                </View>
                {/* explore more */}
                <View>
                    <Text style={style.part_text}>Explore</Text>
                    <ScrollView horizontal={true}>
                        <HomeExploreItem onPress={() => { }} imageSrc={
                            require("../../assets/cut cat serhio 02-1813x1811-720x719.jpg")
                        }/>
                        <HomeExploreItem onPress={() => { }} imageSrc={
                            require("../../assets/51b299f0c331d356d6e74cf6f34d78b0.jpg")
                            
                        } />
                        <HomeExploreItem onPress={() => { }} />
                    </ScrollView>
                </View>


            </View>

        </ScrollView>
    )
}

export default HomeScreen

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    head: {
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    welcome_text: {
        fontSize: 20,
        // textAlign: 'center',
        // marginTop: 30
    },
    part_text: {
        fontSize: 20,
        marginBottom: 10,
    },
    menu_items: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 10,
    },
})