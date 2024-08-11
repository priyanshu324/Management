import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import MIcon from "react-native-vector-icons/MaterialIcons"
import FIcon from "react-native-vector-icons/FontAwesome"

const FooterMenu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity>
                    <MIcon name="home" size={35} color={"#0E33F3"} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <MIcon name="library-add-check" size={35} color={"#0E33F3"} style={styles.icon_1} />
                </TouchableOpacity>
            </View>
            <View onPress={() => navigation.navigate('Add')}>
                <TouchableOpacity>
                    <FIcon name="plus-square" size={55} color={"#0E33F3"} style={styles.icon_4} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <MIcon name="notifications" size={35} color={"#0E33F3"} style={styles.icon_2} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <MIcon name="settings" size={35} color={"#0E33F3"} style={styles.icon_3} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default FooterMenu;



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1f1a1b",
        top: 480,
        flexDirection: "row",
    },
    icon: {
        width: 50,
        height: 56,
        top: 18,
        left: 34,
    },
    icon_1: {
        width: 50,
        height: 56,
        top: 18,
        left: 54,
    },
    icon_2: {
        width: 50,
        height: 56,
        top: 18,
        left: 120,
    },
    icon_3: {
        width: 50,
        height: 56,
        top: 18,
        left: 140,
    },
    icon_4: {
        width: 64,
        height: 64,
        top: -18,
        left: 90,
    },
    
});

