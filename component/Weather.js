import React, { useState , useEffect } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import Forecast from './Forecast'

const imageHDY = { uri: "https://static.asiawebdirect.com/m/phuket/portals/thaiwave-com/homepage/hat-yai/allParagraphs/BucketComponent/ListingContainer/01/image/hat-yai-attractions.jpg" };
const imageTST = { uri: "https://cdn.cnn.com/cnnnext/dam/assets/150717140310-islands-of-trang--koh-mook-full-169.jpg"};
const imageCNX = { uri: "https://data.asiahighlights.com/image/travel-guide/thailand/chiangmai/chiang-mai-scenery.webp"};
const imageKKC = { uri: "https://lh3.googleusercontent.com/proxy/nJKRSQ7LPSi0u1sn3btEhgWnptDPuqOcQ7k-LIaAzOn5gBBIqilMsz9YpHv4bWu0GT9nMxMGBfANmEc73MLbiFPMngntVwWwuS_QxRAgCuZPwWVMAO8piA5ZOrU"};
const imageCHB = { uri: "https://cdn.galaxy.tf/unit-media/tc-default/uploads/images/hotel_photo/001/545/741/chonburi-standard.jpg"};
const imageRYG = { uri: "https://www.tripsavvy.com/thmb/i-TXP5Gs5GLj1ztgT8sbrGUr5sU=/3992x2992/filters:no_upscale():max_bytes(150000):strip_icc()/rayong-thailand-beach-5c75871b46e0fb0001a9827c.jpg"};
const imageCEI = { uri: "https://image.makewebeasy.net/makeweb/0/0OdDLgHXF/DefaultData/bigstock_Wat_Rong_Sua_Ten_Temple_With_B_265915834.jpg"};

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
        feelLike: 0,
        name: 'name',
        country: 'country'
    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=d09aea7844128af0f3d9f4413d828425`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    feelLike: json.main.feels_like,
                    name: json.name,
                    country: json.sys.country});
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
    if(props.zipCode == 90110) {
        return (
            <ImageBackground source={imageHDY} style={styles.backdrop}>
                <View style={styles.background}></View>                               
                <Forecast {...forecastInfo}/>
            </ImageBackground>
        )
    }
    if(props.zipCode == 92000) {
        return (
            <ImageBackground source={imageTST} style={styles.backdrop}>
                <View style={styles.background}></View>                               
                <Forecast {...forecastInfo}/>
            </ImageBackground>
        )
    }
    if(props.zipCode == 50000) {
        return (
            <ImageBackground source={imageCNX} style={styles.backdrop}>
                <View style={styles.background}></View>                               
                <Forecast {...forecastInfo}/>
            </ImageBackground>
        )
    }
    if(props.zipCode == 40000) {
        return (
            <ImageBackground source={imageKKC} style={styles.backdrop}>
                <View style={styles.background}></View>                               
                <Forecast {...forecastInfo}/>
            </ImageBackground>
        )
    }
    if(props.zipCode == 20000) {
        return (
            <ImageBackground source={imageCHB} style={styles.backdrop}>
                <View style={styles.background}></View>                               
                <Forecast {...forecastInfo}/>
            </ImageBackground>
        )
    }
    if(props.zipCode == 21000) {
        return (
            <ImageBackground source={imageRYG} style={styles.backdrop}>
                <View style={styles.background}></View>                               
                <Forecast {...forecastInfo}/>
            </ImageBackground>
        )
    }
    if(props.zipCode == 57000) {
        return (
            <ImageBackground source={imageCEI} style={styles.backdrop}>
                <View style={styles.background}></View>                               
                <Forecast {...forecastInfo}/>
            </ImageBackground>
        )
    }
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
        textAlign: 'center',
    },
    background: {
        backgroundColor: 'black',
        position: 'absolute',
        left: 10,
        top: 10,
        right: 10,
        bottom: 10,
        opacity: 0.65,
    },
})