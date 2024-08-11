import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome"


const Menu = () => {
    return (
        <View style={styles.container}>
            <View style={styles.t_1}>
                <TouchableOpacity style={styles.btn_1}>
                    <View style={styles.icon_2}>
                        <Icon name="plus" size={20} color={"#FAFAFB"} style={styles.icon_1} />
                    </View>
                    <Text style={{ left: 18, top: 17, }}>Savings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn_2}>
                    <View style={styles.icon_2}>
                        <Icon name="plus" size={20} color={"#FAFAFB"} style={styles.icon_1} />
                    </View>
                    <Text style={{ left: 18, top: 17, }}>Savings</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.btn_3}>
                    <View style={styles.icon_2}>
                        <Icon name="plus" size={20} color={"#FAFAFB"} style={styles.icon_1} />
                    </View>
                    <Text style={{ left: 18, top: 17, }}>Savings</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.btn_4}></TouchableOpacity>
                <TouchableOpacity style={styles.btn_5}></TouchableOpacity>
                <TouchableOpacity style={styles.btn_6}></TouchableOpacity>
            </View>
        </View>

    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0F1B26",
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
    },
    t_1: {
        top: 30,
        flexDirection: "row",
    },
    btn_1: {
        left: 13,
        width: 107,
        height: 60,
        backgroundColor: "#0E33F3",
        borderRadius: 16,
        flexDirection: "row",
    }, btn_2: {
        left: 32,
        width: 107,
        height: 60,
        backgroundColor: "#0E33F3",
        borderRadius: 16,
        flexDirection: "row",
    }, btn_3: {
        left: 55,
        width: 107,
        height: 60,
        backgroundColor: "#0E33F3",
        borderRadius: 16,
        flexDirection: "row",
    },
    icon_1: {
        top: 7,
        left: 7,
    },
    icon_2: {
        borderRadius: 8,
        left: 10.5,
        top: 12,
        backgroundColor: "#5570FA",
        width: 30,
        height: 30,

    },
    btn_4: {
        left: 120,
        top: 50,
        backgroundColor: "#3E4C59",
        width: 30,
        height: 10,
        borderRadius: 10,
    }, btn_5: {
        left: 150,
        top: 50,
        backgroundColor: "#3E4C59",
        width: 30,
        height: 10,
        borderRadius: 10,
    }, btn_6: {
        left: 180,
        top: 50,
        backgroundColor: "#3E4C59",
        width: 30,
        height: 10,
        borderRadius: 10,
    },

})