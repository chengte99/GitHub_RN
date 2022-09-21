import { Text, StyleSheet, View, SafeAreaView, TextInput, Button, Alert, Dimensions } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Storage from './Storage'

const KEYS = 'key@kevin.github.com'

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            inputText: ''
        }
    }

    storeData = async () => {
        await AsyncStorage.setItem(KEYS, this.state.inputText).then((res) => {

        }).catch((e) => {

        })
    }

    getData = async () => {
        await AsyncStorage.getItem(KEYS).then((res) => {
            Alert.alert(res);
        }).catch((e) => {

        })
    }

    addData = async () => {
        await Storage.set(KEYS, this.state.inputText).then((res) => {

        }).catch((e) => {

        })
    }

    getMyData = async () => {
        await Storage.get(KEYS).then((res) => {
            Alert.alert(res);
        }).catch((e) => {

        })
    }

    clearData = async () => {
        await Storage.clear();
    }

    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <View>
                    <TextInput
                        style={[styles.viewInput]}
                        placeholder='請輸入'
                        value={this.state.inputText}
                        onChangeText={(val) => {
                            this.setState({
                                inputText: val
                            })
                        }}
                    />
                </View>
                <View>
                    <Button
                        title='儲存'
                        onPress={this.storeData}
                    />
                    <Button
                        title='獲取'
                        onPress={this.getData}
                    />
                    <Button
                        title='儲存01'
                        onPress={this.addData}
                    />
                    <Button
                        title='獲取01'
                        onPress={this.getMyData}
                    />
                    <Button
                        title='清空'
                        onPress={this.clearData}
                    />
                </View>
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
    viewInput: {
        borderColor: 'green',
        borderWidth: 1,
        width: Dimensions.get('window').width - 20,
        margin: 10,
        paddingVertical: 5
    }
})