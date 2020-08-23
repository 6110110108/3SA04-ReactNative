import React from 'react'
import { FlatList, View , Text , StyleSheet, StatusBar , SafeAreaView, ImageBackground } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const image = { uri: "https://c4.wallpaperflare.com/wallpaper/759/428/990/uplifting-rays-of-sunshine-wallpaper-preview.jpg" };
const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiang Mai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Rayong', code: '21000'},
    { place: 'Chiang Rai', code: '57000'}
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => (
        navigation.navigate('Weather', {zipCode: code})
    )}>
        <View style={styles.zipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
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
})