import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser, faQuestion } from '@fortawesome/free-solid-svg-icons';


const Component = ({ navigation, imageSrc, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.container}>
                {imageSrc ?
                    <Image source={imageSrc} style={style.image}></Image> :
                    <Icon icon={faQuestion} size={100}></Icon>
                }
            </View>
        </TouchableOpacity>
    )
}


export default Component


const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        // padding: 10,
        marginRight: 10,
        width: 120,
        height: 120,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
    }

})