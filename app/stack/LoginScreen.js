import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from 'react'


const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.h2}>Sign in</Text>

            <View >
                <TextInput style={styles.ipt} placeholder="Phone Number" />
                <TextInput style={styles.ipt} placeholder="Password" />
                

            </View>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Logined')}>
                <Text style={{color: 'white', textAlign: 'center', lineHeight: 40}}>Sign in</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    h2: {
        fontSize: 24,
        marginBottom: 20
    },
    ipt: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5
    },
    btn: {
        width: 80,
        height: 40,
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: 5
    }

})