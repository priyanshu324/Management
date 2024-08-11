import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputBox = ({
    inputTitle,
    autoComplete,
    secureTextEntry = false,
    value,
    setValue,
    inputPlaceholder
}) => {
    return (

        <View>
            <Text style={{ marginLeft: 30, fontWeight: 'bold', fontSize: 18, color: "#fff" }}>{inputTitle}</Text>
            <TextInput
                style={styles.name}
                autoCorrect={false}
                autoComplete={autoComplete}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={(text) => setValue(text)}
                placeholder={inputPlaceholder}
            />

        </View>
    )
}

export default InputBox

const styles = StyleSheet.create({
    name: {
        borderWidth: 2,
        height: 40,
        marginBottom: 20,
        backgroundColor: '#242D35',
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 10,
        color: '#fff',
        marginLeft: 15,
        marginRight: 15,
    },

})