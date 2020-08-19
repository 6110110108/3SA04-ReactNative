import React from 'react'
import { View, Text , StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.mainText}>{props.main}</Text>
            <Text style={styles.descriptionText}>{props.description}</Text>
            <View style={{
                flexDirection: 'row',
                padding: 30,
                }}>
                <Text style={{paddingRight: 160}}></Text>
                <Text style={styles.tempText}>{props.temp}</Text>
                <Text style={styles.celsiusText}> °C</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    mainText: {
        fontSize: 30,
        color: 'white',
        paddingTop: 25,
        textAlign: 'center',
    },
    descriptionText: {
        fontSize: 20,
        color: 'white',
        paddingTop: 30,
        textAlign: 'center',
        
    },
    tempText: {
        color: 'white',
        fontSize: 30,
    },
    celsiusText: {
        fontSize: 15,
        textAlignVertical: 'center',
        color: 'white',
    },
})