import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MIcon from "react-native-vector-icons/MaterialIcons";


const Details = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity>

                <View style={styles.main}>
                    <MIcon name="wallet" size={30} color={"#fff"} style={styles.icon} />
                    {/* <Text>{""}</Text> */}
                    <Text style={{ left: 10, top: 25, color: "#fff" }}>$1289.30</Text>
                    <Text style={{ left: 10, top: 25, color: "#fff" }}>Total Income</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={isActive ? styles.buttonActive : styles.button}
                onPressIn={() => setIsActive(true)}
                onPressOut={() => setIsActive(false)}
                onPress={() => alert('Button Pressed')}
            >
                <View>
                    <MIcon name="wallet" size={30} color={"#fff"} style={styles.icon} />
                    {/* <Text>{""}</Text> */}
                    <Text style={{ left: 10, top: 25, color: "#fff" }}>Total Salary</Text>
                    <Text style={{ left: 10, top: 25, color: "#fff" }}>$1289.30</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.main_2}>
                    <MIcon name="wallet" size={30} color={"#fff"} style={styles.icon} />
                    {/* <Text>{""}</Text> */}
                    <Text style={{ left: 10, top: 25, color: "#fff" }}>Total Outcome</Text>
                    <Text style={{ left: 10, top: 25, color: "#fff" }}>$1289.30</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },

    button: {
        backgroundColor: '#0F1B26',
        width: 124,
        height: 120,
        top: 35,
        borderRadius: 20,
        left: 17

    },
    buttonActive: {
        backgroundColor: '#0E33F3',
        padding: 10,
        borderRadius: 5,
    },
    main: {
        backgroundColor: "#0F1B26",
        width: 124,
        height: 120,
        top: 35,
        borderRadius: 20,
        left: 8,
    },

    main_2: {
        width: 124,
        height: 120,
        top: 35,
        borderRadius: 20,
        left: 25,
        backgroundColor: "#0F1B26",
    },
    icon: {
        left: 13,
        top: 20,
    },
})