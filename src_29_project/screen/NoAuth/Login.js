import { Text, StyleSheet, View, ImageBackground, Platform, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import { loginSuccess } from '../../redux/actions/User'

const mapStateToProps = state => {
    return {
        isLogin: state.User.isLogin
    }
}

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            validateUsername: false,
            isValidUser: true,
            isPasswordInput: false,
            isValidPassword: false,
            secureTextEntry: true
        }
    }

    validateUsername = (val) => {
        if (val.trim().length >= 2) {
            this.setState({
                username: val,
                validateUsername: true,
                isValidUser: true
            })
        } else {
            this.setState({
                username: val,
                validateUsername: false,
                isValidUser: false
            })
        }
    }

    handleValidUser = (val) => {
        if (val.trim().length >= 2) {
            this.setState({
                isValidUser: true
            })
        } else {
            this.setState({
                isValidUser: false
            })
        }
    }

    validatePassword = (val) => {
        if (val.trim().length >= 1) {
            this.setState({
                password: val,
                isPasswordInput: true,
            })
        } else {
            this.setState({
                password: val,
                isPasswordInput: false,
            })
        }

        if (val.trim().length >= 8) {
            this.setState({
                isValidPassword: true
            })
        } else {
            this.setState({
                isValidPassword: false
            })
        }
    }

    handleValidPassword = (val) => {
        if (val.trim().length >= 8) {
            this.setState({
                isValidPassword: true
            })
        } else {
            this.setState({
                isValidPassword: false
            })
        }
    }

    updateSecureTextEntry = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }

    handleLogin = () => {
        if (this.state.username.length == 0 || this.state.password.length == 0) {
            Alert.alert('輸入錯誤', '用戶名和密碼不得為空');
            return;
        }

        if (this.state.username.length < 2) {
            Alert.alert('用戶名太短', '用戶名最短是2位');
            return;
        }

        if (this.state.password.length < 8) {
            Alert.alert('密碼太短', '用戶名最短是8位');
            return;
        }

        let userInfo = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.loginSuccess(userInfo);
        Alert.alert('登錄成功', '即將進入首頁');
    }

    render() {
        return (
            <View style={[styles.container]}>
                <ImageBackground
                    source={require('../../images/bg1.jpg')}
                    style={[styles.bgImage]}
                >
                    <View style={[styles.header]}>
                        <Text style={[styles.headerText]}> Welcome ! </Text>
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
                                    placeholder='用戶名'
                                    value={this.state.username}
                                    onChangeText={(val) => {
                                        this.validateUsername(val)
                                    }}
                                    autoFocus={true}
                                    onEndEditing={(e) => this.handleValidUser(e.nativeEvent.text)}
                                />
                                {
                                    this.state.validateUsername
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
                            {
                                this.state.isValidUser
                                    ?
                                    null
                                    :
                                    <Animatable.Text
                                        animation={'fadeInLeft'}
                                        duration={500}
                                        style={[styles.errorMsg]}
                                    >
                                        用戶名最少為兩位
                                    </Animatable.Text>
                            }

                            <View style={[styles.action]}>
                                <Ionicons name={'server-outline'} size={20} />
                                <TextInput
                                    style={[styles.input]}
                                    placeholder='密碼'
                                    value={this.state.password}
                                    secureTextEntry={this.state.secureTextEntry}
                                    onChangeText={(val) => {
                                        this.validatePassword(val)
                                    }}
                                    onEndEditing={(e) => this.handleValidPassword(e.nativeEvent.text)}
                                />
                                <TouchableOpacity
                                    onPress={this.updateSecureTextEntry}
                                >
                                    {
                                        this.state.secureTextEntry
                                            ?
                                            <Ionicons name="eye-off-outline" size={20} />
                                            :
                                            <Ionicons name="eye-outline" size={20} />
                                    }
                                </TouchableOpacity>
                            </View>
                            {
                                this.state.isValidPassword
                                    ?
                                    null
                                    :
                                    <Animatable.Text
                                        animation={'fadeInLeft'}
                                        duration={500}
                                        style={[styles.errorMsg]}
                                    >
                                        用戶名最少為八位
                                    </Animatable.Text>
                            }

                            <View style={[styles.button]}>
                                <TouchableOpacity
                                    style={[styles.signIn]}
                                    onPress={this.handleLogin}
                                >
                                    <LinearGradient
                                        colors={['#08d4c4', '#01ab9d']}
                                        style={[styles.linearView]}
                                    >
                                        <Text style={[styles.textSign]}> 登錄 </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.signIn, { borderRadius: 20, padding: 10 }]}
                                    onPress={() => this.props.navigation.navigate('Register')}
                                >
                                    <Text style={[styles.textSign, { color: '#08d4c4' }]}> 註冊 </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </Animatable.View>
                </ImageBackground>
            </View>
        )
    }
}

export default connect(mapStateToProps, {loginSuccess})(Login)

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