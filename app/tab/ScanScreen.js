
import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from "react-native"
import { FontAwesomeIcon as Icon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';

const ScanScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            {/* back */}
            <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={style.backBtn}>
                <Icon icon={faArrowLeft} size={30}></Icon>
            </TouchableOpacity>

            {/* result */}
            <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={style.result}>
                <Image source={require('../../assets/51b299f0c331d356d6e74cf6f34d78b0.jpg')} style={style.img_scan} />
                <View style={style.info}>
                    <Text>Animal</Text>
                    <Text>Some thing</Text>
                </View>
                <TouchableOpacity style={style.addBtn}>
                    <Icon icon={faPlus} size={30} color="white"></Icon>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}

export default ScanScreen

const style = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    backBtn: {
        display: 'flex',
        position: 'absolute',
        top: 10,
        left: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        width: 50,
        height: 50,
        zIndex: 100,
    },
    result: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        width: '70%',
        height: 70,
        padding: 10,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    img_scan: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    addBtn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
        padding: 10,
        backgroundColor: '#5a6cf3',
        borderRadius: 10,
        width: 35,
        height: 35,
    },
    info: {
        flexGrow: 1,
        marginLeft: 10,
        
    }

})