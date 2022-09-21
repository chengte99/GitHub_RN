import { Text, StyleSheet, View, SafeAreaView, TextInput, Dimensions, Button, Alert } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            phone: '',
            introduce: ''
        }
    }

    doLogin = () => {
        Alert.alert(this.state.username);
    }

    focusOnPasswrod = () => {
        console.log('onPassword');
    }

    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <TextInput
                    style={[styles.input]}
                    placeholder='請輸入用戶名'
                    value={this.state.username}
                    onChangeText={(val)=> {
                        this.setState({
                            username: val
                        })
                    }}
                    autoFocus={true}
                />
                <TextInput
                    style={[styles.input]}
                    placeholder='請輸入密碼'
                    secureTextEntry={true}
                    maxLength={10}
                    value={this.state.password}
                    onChangeText={(val)=> {
                        this.setState({
                            password: val
                        })
                    }}
                    onFocus={this.focusOnPasswrod}
                />
                <TextInput
                    style={[styles.input]}
                    placeholder='請輸入手機'
                    keyboardType='phone-pad'
                />
                <TextInput
                    style={[styles.input, {height: 100}]}
                    placeholder='請輸入介紹'
                    multiline={true}
                    numberOfLines={5}
                    value={this.state.introduce}
                    onChangeText={(val)=> {
                        this.setState({
                            introduce: val
                        })
                    }}
                />
                <Button
                    title='登入'
                    onPress={this.doLogin}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        margin: 10,
        width: Dimensions.get('window').width - 20,
        borderWidth: 1,
        borderColor: 'red',
        paddingHorizontal: 5
    }
})