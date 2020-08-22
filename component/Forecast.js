import React from 'react'
import { View, Text , StyleSheet } from 'react-native'

export default function Forecast(props) {
    var fahrenheit = props.temp*(9/5) + 32
    var valueF = fahrenheit.toFixed(1);
    var valueC = props.temp.toFixed(1);
    return (
        <View>
            <Text style={styles.mainText}>{props.name}</Text>
            <Text style={styles.mainText}>{props.main}</Text>
            <Text style={styles.descriptionText}>{props.description}</Text>
            <View style={{
                flexDirection: 'row',
                padding: 30,
                }}>
                <Text style={{textAlign: 'center'}}></Text>
                <Text style={styles.tempText}>Feels like: {valueC}</Text>
                <Text style={styles.celsiusText}> °C</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                }}>
                <Text style={{paddingRight: '27%'}}></Text>
                <Text style={styles.tempText2}>{valueF}</Text>
                <Text style={styles.fahrenheitText}> °F</Text>
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
    tempText2: {
        color: 'white',
        fontSize: 25,
    },
    celsiusText: {
        fontSize: 20,
        textAlignVertical: 'center',
        color: 'white',
    },
    fahrenheitText: {
        fontSize: 20,
        textAlignVertical: 'center',
        color: 'white',
    },
})