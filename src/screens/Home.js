import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderMenu from '../Components/Menu/HeaderMenu'
import MainMenu from '../Components/Menu/MainMenu'
import FooterMenu from '../Components/Menu/FooterMenu'

const Home = () => {
    return (
        <View style={styles.container}>
            <View>
                <HeaderMenu />
            </View>

            <View>
                <MainMenu />
            </View>
            <View>
                <FooterMenu />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#211F26",

    }
})