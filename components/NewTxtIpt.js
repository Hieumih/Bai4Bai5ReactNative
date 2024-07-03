import { TextInput, View, Text, KeyboardTypeOptions, StyleSheet } from "react-native";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser, faHome } from '@fortawesome/free-solid-svg-icons';


export const NewTxtIpt = ({ value, onChange, placeholder, fontAwesomeIcon, password, inputMode }) => {




    return (
        <View style={styles.container}>
            {/* <Text style={styles.label}>{label ?? "Enter something:"}</Text> */}
            {/* {description ? <Text style={styles.desc}>{description}</Text> : null} */}
            <View style={styles.container_icon}>
            {fontAwesomeIcon ? <FontAwesomeIcon size={20} icon={fontAwesomeIcon} /> : null}
            </View>
            <TextInput
                style={styles.ipt}

                value={value}
                secureTextEntry={password}
                inputMode={inputMode}
                onChangeText={(new_value) => {
                
                    onChange ? onChange(new_value) : null;
                    
                }} placeholder={placeholder} />

            {/* <Text>{value}</Text> */}
        </View>
    );
};




const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        width: 300,

    },
    container_icon: {
        marginLeft: 10,
        marginRight: 10,
        width: 30,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },


    desc: {
        fontSize: 15,
        color: 'gray',
        marginBottom: 10,
    },
    ipt: {
        fontSize: 15,
        height: 40,
        width: 300,
        padding: 10,
        borderLeftWidth: 1,

 
    },
})
