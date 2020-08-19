import React, { useState } from 'react'
import { Text, ImageBackground, StyleSheet, View } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.background}>
                <Text style={styles.zipCodeText}>Zip code is {props.zipCode}</Text>
                <Forecast {...forecastInfo}/>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    zipCodeText: {
        paddingTop: 20,
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    background: {
        backgroundColor: 'black',
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.65,
        width: '100%',
        height: '40%'
    }
})