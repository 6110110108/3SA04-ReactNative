import React from 'react'
import { FlatList, View , Text , StyleSheet, StatusBar , SafeAreaView, ImageBackground } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const image = { uri: "https://c4.wallpaperflare.com/wallpaper/759/428/990/uplifting-rays-of-sunshine-wallpaper-preview.jpg" };
const imageHDY = { uri: "https://static.asiawebdirect.com/m/phuket/portals/thaiwave-com/homepage/hat-yai/allParagraphs/BucketComponent/ListingContainer/01/image/hat-yai-attractions.jpg" };
const imageTST = { uri: "https://cdn.cnn.com/cnnnext/dam/assets/150717140310-islands-of-trang--koh-mook-full-169.jpg"};
const imageCNX = { uri: "https://data.asiahighlights.com/image/travel-guide/thailand/chiangmai/chiang-mai-scenery.webp"};
const imageKKC = { uri: "https://lh3.googleusercontent.com/proxy/nJKRSQ7LPSi0u1sn3btEhgWnptDPuqOcQ7k-LIaAzOn5gBBIqilMsz9YpHv4bWu0GT9nMxMGBfANmEc73MLbiFPMngntVwWwuS_QxRAgCuZPwWVMAO8piA5ZOrU"};
const imageCHB = { uri: "https://cdn.galaxy.tf/unit-media/tc-default/uploads/images/hotel_photo/001/545/741/chonburi-standard.jpg"};
const imageRYG = { uri: "https://www.tripsavvy.com/thmb/i-TXP5Gs5GLj1ztgT8sbrGUr5sU=/3992x2992/filters:no_upscale():max_bytes(150000):strip_icc()/rayong-thailand-beach-5c75871b46e0fb0001a9827c.jpg"};
const imageCEI = { uri: "https://image.makewebeasy.net/makeweb/0/0OdDLgHXF/DefaultData/bigstock_Wat_Rong_Sua_Ten_Temple_With_B_265915834.jpg"};

const availableZipItems = [
    { place: 'Hatyai', code: '90110', pic: imageHDY},
    { place: 'Trang', code: '92000', pic: imageTST },
    { place: 'Chiang Mai', code: '50000' , pic: imageCNX},
    { place: 'Khonkaen', code: '40000' , pic: imageKKC},
    { place: 'Chonburi', code: '20000', pic: imageCHB },
    { place: 'Rayong', code: '21000', pic: imageRYG},
    { place: 'Chiang Rai', code: '57000', pic: imageCEI}
]

const ZipItem = ({place, code, pic, navigation}) => (
    <TouchableHighlight onPress={() => (
        navigation.navigate('Weather', {zipCode: code})
    )}>
        <View style={styles.zipItem}>
            <ImageBackground source={pic} style={styles.backdrop}></ImageBackground>
            <Text>{place}</Text>
            <Text>Zip Code : {code}</Text>
        </View>
    </TouchableHighlight>
)
export default function zipCodeScreen() {
    const navigation = useNavigation()
    return (
        <ImageBackground source={image} style={styles.image}>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data = {availableZipItems} 
                    keyExtractor = {item => item.code} 
                    renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
                />
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0ffff',
        opacity: 0.8,
        margin: 10,
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    backdrop: {
        flex: 1,
        width: '100%',
        height: 100,
        resizeMode: 'cover',
        opacity: 1,
    },
})