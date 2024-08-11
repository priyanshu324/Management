import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import InputBox from '../../Components/forms/InputBox'
import SubmitButton from '../../Components/forms/SubmitButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../..//context/authContext'

const Login = ({ navigation }) => {
    const [state, setState] = useContext(AuthContext)
    // State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // function
    // btn function
    const handleSubmit = async () => {
        try {
            setLoading(true)
            if (!email || !password) {
                Alert.alert('Please Fill All Fields');
                setLoading(false);
                return;
            }
            setLoading(false);
            const { data } = await axios.post(
                '/auth/login',
                { email, password }
            );
            setState(data);
            await AsyncStorage.setItem("@auth", JSON.stringify(data));
            Alert.alert(data && data.message);
            navigation.navigate("Home");
            console.log('Login Data===> ', { email, password });
        } catch (error) {
            Alert.alert(error.response.data.message);
            setLoading(false);
            console.log(error);
        }
    }

    const getLocalStorageData = async () => {
        let data = await AsyncStorage.getItem("@auth")
    }
    getLocalStorageData();
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, justifyContent: 'center', textAlign: 'center', color: "#fff" }}>Login</Text>

            <View>

                <InputBox
                    inputTitle={'Email'}
                    inputPlaceholder={'Enter Your Email'}
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
            {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}
            <View>
                <SubmitButton
                    BtnTitle="Login"
                    loading={loading}
                    handleSubmit={handleSubmit}
                />
                <Text style={styles.linkText}>Please Register Your Account <>{" "}</>

                    <Text style={styles.link} onPress={() => navigation.navigate('Register')}>Register</Text>

                </Text>
            </View>

        </View >
    )
}

export default Login


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
        textAlign: 'center',

    }
})