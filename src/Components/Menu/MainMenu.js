import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Transactions from '../Edit/Transactions';
import Details from '../Edit/Details';
import Menu from '../Edit/Menu';

const MainMenu = () => {

    // state

    return (
        <View style={styles.container}>
            <View style={styles.main_container}>
                <Details />
            </View>
            <View style={styles.main_container_2}>
                <View>
                    <Menu />
                </View>
                <View>
                    <Transactions />
                </View>
            </View>

        </View>
    )
}

export default MainMenu

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#323F4B",
        width: "100%",
        height: 210,
        top: 10,
    },
    main_container: {
        flexDirection: "row",
    },

    icon: {
        left: 13,
        top: 20,
    },
    main_container_2: {
        backgroundColor: "#0F1B26",
        width: 400,
        height: 512,
        top: 60,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        left: 5
    },

   
})