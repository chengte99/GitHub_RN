import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

const Register = ({ navigation, route }) => {
    const [data, setData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        validateUsername: false,
        validatePassword: false,
        validateConfirmPassword: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true
    });

    const validateUsername = (val) => {
        if (val.trim().length >= 2) {
            setData({
                ...data,
                username: val,
                validateUsername: true
            })
        } else {
            setData({
                ...data,
                username: val,
                validateUsername: false
            })
        }
    }

    const validatePassword = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                validatePassword: true
            })
        } else {
            setData({
                ...data,
                password: val,
                validatePassword: false
            })
        }
    }

    const validateConfirmPassword = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                confirmPassword: val,
                validateConfirmPassword: true
            })
        } else {
            setData({
                ...data,
                confirmPassword: val,
                validateConfirmPassword: false
            })
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry
        })
    }

    const handleRegister = () => {
        Alert.alert('註冊驗證中')
    }

    return (
        <View style={[styles.container]}>
            <ImageBackground
                source={require('../../images/bg2.jpg')}
                style={[styles.bgImage]}
            >
                <View style={[styles.header]}>
                    <Text style={[styles.headerText]}> Welcome Register! </Text>
                </View>
                <Animatable.View
                    style={[styles.footer]}
                    animation='fadeInUpBig'
                >
                    <ScrollView>
                        <View style={[styles.action]}>
                            <Ionicons name={'person-outline'} size={20} />
                            <TextInput
                                style={[styles.input]}
                                placeholder='請輸入用戶名'
                                value={data.username}
                                onChangeText={(val) => {
                                    validateUsername(val)
                                }}
                                autoFocus={true}
                            />
                            {
                                data.validateUsername
                                ?
                                <Animatable.View
                                    animation={'bounceIn'}
                                >
                                    <Ionicons name={'checkmark-circle-outline'} size={20} color={'green'} />
                                </Animatable.View>
                                :
                                null
                            }
                        </View>

                        <View style={[styles.action]}>
                            <Ionicons name={'server-outline'} size={20} />
                            <TextInput
                                style={[styles.input]}
                                placeholder='請輸入密碼'
                                value={data.password}
                                secureTextEntry={data.secureTextEntry}
                                onChangeText={(val) => {
                                    validatePassword(val)
                                }}
                            />
                            <TouchableOpacity
                                onPress={updateSecureTextEntry}
                            >
                                {
                                    data.secureTextEntry
                                    ?
                                    <Ionicons name="eye-off-outline" size={20} />
                                    :
                                    <Ionicons name="eye-outline" size={20} />
                                }
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.action]}>
                            <Ionicons name={'server-outline'} size={20} />
                            <TextInput
                                style={[styles.input]}
                                placeholder='請再次確認密碼'
                                value={data.confirmPassword}
                                secureTextEntry={data.confirmSecureTextEntry}
                                onChangeText={(val) => {
                                    validateConfirmPassword(val)
                                }}
                            />
                            <TouchableOpacity
                                onPress={updateConfirmSecureTextEntry}
                            >
                                {
                                    data.confirmSecureTextEntry
                                    ?
                                    <Ionicons name="eye-off-outline" size={20} />
                                    :
                                    <Ionicons name="eye-outline" size={20} />
                                }
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.button]}>
                            <TouchableOpacity
                                style={[styles.signIn]}
                                onPress={handleRegister}
                            >
                                <LinearGradient
                                    colors={['#08d4c4', '#01ab9d']}
                                    style={[styles.linearView]}
                                >
                                    <Text style={[styles.textSign]}> 註冊 </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.signIn, { borderRadius: 20, padding: 10 }]}
                                onPress={()=> navigation.navigate('Login')}
                            >
                                <Text style={[styles.textSign, { color: '#08d4c4' }]}> 登錄 </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Animatable.View>
            </ImageBackground>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bgImage: {
        flex: 1
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        // alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: Platform.OS === 'ios' ? 150 : 100
    },
    headerText: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    footer: {
        flex: 3,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    action: {
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 5
    },
    input: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    errorMsg: {
        fontSize: 14,
        color: 'red'
    },
    button: {
        flex: 1,
        marginTop: 30
    },
    signIn: {
        marginTop: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    linearView: {
        borderRadius: 20,
        padding: 10
    },
    textSign: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff'
    }
})