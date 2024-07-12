import AppIntroSlider from "react-native-app-intro-slider";

import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native"
import { FontAwesomeIcon as Icon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { isLoaded, useFonts } from 'expo-font';
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const screenHeight = Dimensions.get('window').height;

const slides = [
    {
        key: 'one',
        title: 'Beautiful Cat',
        text: 'Description.\nSay something cool',
        image: require('../../assets/cut cat serhio 02-1813x1811-720x719.jpg'),
        backgroundColor: '#D0EDFB',
    },
    {
        key: 'two',
        title: 'Lovely shiba inu',
        text: 'Other cool stuff',
        image: require('../../assets/51b299f0c331d356d6e74cf6f34d78b0.jpg'),
        backgroundColor:  '#FAFFAF',
    },
    {
        key: 'three',
        title: 'Scan, Pay & Enjoy!',
        text: 'Scan products you want to buy at your favorite store and pay by your phone & enjoy happy, friendly Shopping!',
        image: require('../../assets/Mask Group.png'),
        // backgroundColor: '#22bcb5',
    }
];

const InfoScreen = ({ navigation }) => {
    const [isLoaded] = useFonts({
        'HelveticaNowDisplay-Black': require('../../assets/fonts/HelveticaNowDisplay-Black.ttf'),
        'HelveticaNowDisplay-Bold': require('../../assets/fonts/HelveticaNowDisplay-Bold.ttf'),
        'HelveticaNowDisplay-Regular': require('../../assets/fonts/HelveticaNowDisplay-Regular.ttf'),
    });

    const handleOnLayout = useCallback(async () => {
        if (isLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [isLoaded]);

    const _renderItem = ({ item }) => {
        return (
            <View
                style={{
                    // flex: 1,
                    backgroundColor: item.backgroundColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: screenHeight,
                    padding: 48,
                }}
                onLayout={handleOnLayout}
            >
                {item.image && <Image source={item.image} style={{ width: 267, height: 267, marginBottom: 55, borderRadius:999 }} />}
                <Text style={{ fontSize: 22, fontWeight: 700, textAlign: 'center', marginBottom: 22, fontFamily: 'HelveticaNowDisplay-Bold' }}>{item.title}</Text>
                <Text style={{ fontSize: 16, fontWeight: 400, textAlign: 'center', fontFamily: 'HelveticaNowDisplay-Regular' }}>{item.text}</Text>
            </View>
        );
    }

    const _onDone = () => {
        navigation.navigate('Login')
    }

    const _renderNextButton = () => {
        return (
            <View style={style.nextbtn}>
                <Icon icon={faArrowRight} size={30} color="white"></Icon>
            </View>
        );
    }

    const _renderDoneButton = () => {
        return (
            <View style={style.nextbtn}>
                <Icon icon={faCheck} size={30} color="white"></Icon>
            </View>
        );
    }

    if (!isLoaded) {
        return null;
    }

    return (
        <AppIntroSlider
            renderItem={_renderItem}
            renderNextButton={_renderNextButton}
            renderDoneButton={_renderDoneButton}
            data={slides}
            onDone={_onDone}
            style={{ backgroundColor: '#FFF7F6'}}
            dotStyle={{ backgroundColor: '#FFDEDA' }}
            activeDotStyle={{ backgroundColor: '#5F79E3'}}
            // onLayout={handleOnLayout}
        />
    )
}

export default InfoScreen


const style = StyleSheet.create({
    nextbtn: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: 999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})