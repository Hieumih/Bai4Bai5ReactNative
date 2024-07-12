import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser, faQuestion } from '@fortawesome/free-solid-svg-icons';


const menu_item = ({ navigation, icon, title, desc, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.container}>
                <View style={style.icon_container}>
                    {icon ? icon :
                        <Icon icon={faQuestion} size={30}></Icon>
                    }
                </View>
                <Text style={style.title}>{title ?? "Menu-Item"}</Text>
                <Text style={style.desc}>{desc ?? '   '}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default menu_item


const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        width: 150,
        height: 150,
    },
    icon_container: {
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'lightgray',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'heavy',
        
    }
})