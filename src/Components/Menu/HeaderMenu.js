import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"

const HeaderMenu = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{ color: "#fff", top: 25, left: 16 }}>OVERVIEW</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <FontAwesome name="user" size={35}  style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderMenu;



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#211F26",
    },
    icon: {
        left: 350,
        top: -10,
        color:"#0E33F3"
    },

});

