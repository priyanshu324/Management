import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome"

const Transactions = () => {
    return (
        <View style={styles.container}>

            <View>

                <View style={{ top: 70, flexDirection: "row" }}>
                    <Text style={{ top: 10, left: 30 }}>Latest Entries</Text>

                    <View>
                        <TouchableOpacity style={styles.btn_7}>
                            <Icon name="ellipsis-h" size={20} color={"#FAFAFB"} style={styles.icon_3} />

                        </TouchableOpacity>
                    </View>
                </View>
            </View>


            <View style={styles.main_container}>
                <View style={{ flexDirection: "row" }}>
                    <View>
                        <TouchableOpacity style={styles.btn_8}>
                            <MIcon name="fastfood" size={30} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ left: 15, top: 2, width: 120 }}>GROCERY</Text>
                        <Text style={{ left: 15, top: 2, width: 120 }}>20 feb 2024</Text>
                    </View>
                    <View>
                        <Text style={{ left: 85, top: 2, width: 120 }}>+$20</Text>
                        <Text style={{ left: 85, top: 2, width: 120 }}>Google Pay</Text>
                    </View>
                </View>
                {/*  */}
                <View style={{ flexDirection: "row", bottom: -20, }}>
                    <View>
                        <TouchableOpacity style={styles.btn_8}>
                            <MIcon name="fastfood" size={30} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ left: 15, top: 2, width: 120 }}>HEALTHS & FITNESS</Text>
                        <Text style={{ left: 15, top: 2, width: 120 }}>20 feb 2024</Text>
                    </View>
                    <View>
                        <Text style={{ left: 85, top: 2, width: 120 }}>+$20</Text>
                        <Text style={{ left: 85, top: 2, width: 120 }}>Google Pay</Text>
                    </View>
                </View>
                {/*  */}
                <View style={{ flexDirection: "row", bottom: -40, }}>
                    <View>
                        <TouchableOpacity style={styles.btn_8}>
                            <MIcon name="fastfood" size={30} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ left: 15, top: 2, width: 120 }}>LOUNDARY</Text>
                        <Text style={{ left: 15, top: 2, width: 120 }}>20 feb 2024</Text>
                    </View>
                    <View>
                        <Text style={{ left: 85, top: 2, width: 120 }}>+$20</Text>
                        <Text style={{ left: 85, top: 2, width: 120 }}>Google Pay</Text>
                    </View>
                </View>
                {/*  */}
                <View style={{ flexDirection: "row", bottom: -60, }}>
                    <View>
                        <TouchableOpacity style={styles.btn_8}>
                            <MIcon name="fastfood" size={30} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ left: 15, top: 2, width: 120 }}>DEBIT PAYEMENT</Text>
                        <Text style={{ left: 15, top: 2, width: 120 }}>20 feb 2024</Text>
                    </View>
                    <View>
                        <Text style={{ left: 85, top: 2, width: 120 }}>+$20</Text>
                        <Text style={{ left: 85, top: 2, width: 120 }}>Google Pay</Text>
                    </View>
                </View>
                {/*  */}

            </View>
        </View>
    )
}

export default Transactions;

const styles = StyleSheet.create({
    container: {
        WIdth: "100%",
    },
    main_container: {
        flexDirection: "column",
        left: 39,
        top: 80
    },
    icon_3: {
        top: 7,
        left: 14,
    },
    btn_7: {
        left: 220,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#3E4C59",
        width: 50,
        height: 40,
    },
    btn_8: {
        borderRadius: 12,
        backgroundColor: "#323F4B",
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
    },

})