import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../Components/forms/InputBox'
import SubmitButton from '../../Components/forms/SubmitButton'
import axios from 'axios'

const Register = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            setLoading(true)
            if (!name || !email || !password) {
                Alert.alert('Please Fill All Fields');
                setLoading(false);
                return;
            }
            setLoading(false);
            const { data } = await axios.post(
                '/auth/register',
                { name, email, password }
            );
            Alert.alert(data && data.message);
            navigation.navigate("VerficationPage");
            console.log('register Data===> ', { name, email, password });

        } catch (error) {
            Alert.alert(error.response.data.message);
            setLoading(false);
            console.log(error);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, justifyContent: 'center', textAlign: 'center' }}>Register</Text>
            {!loading ? (
                <>
                    <View>
                        <InputBox
                            inputTitle={'Name'}
                            inputPlaceholder={'Enter Your Name'}
                            value={name}
                            setValue={setName}
                        />
                        <InputBox
                            inputTitle={'Email'}
                            inputPlaceholder={'Enter Your Email'}
                            keyboardType="email-Password"
                            autoComplete="email"
                            value={email}
                            setValue={setEmail}
                        />
                        <InputBox
                            inputTitle={'Password'}
                            inputPlaceholder={'Enter Your Password'}
                            secureTextEntry={true}
                            autoComplete="password"
                            value={password}
                            setValue={setPassword}
                        />
                    </View>
                    <View>
                        <SubmitButton
                            BtnTitle="Register"
                            handleSubmit={handleSubmit}
                        />
                        <Text style={styles.linkText}>Already Register Please <Text onPress={() => navigation.navigate('Login')} style={styles.link}>LOGIN</Text></Text>
                    </View>
                </>

            ) : (
                <>
                    <ActivityIndicator size="large" color="#0000ff" />
                </>
            )
            }

        </View >
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#211F26',
    },
    linkText: {
        textAlign: 'center',
        color: "#fff"
    },
    link: {
        color: '#0E33F3',
    }
})