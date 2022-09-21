import { Text, StyleSheet, View, SafeAreaView, Button, Alert } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
    createTwoButtonAlert = () => {
        Alert.alert(
            '警告標題',
            '警告提示',
            [
                {
                    text: '取消',
                    onPress: ()=>{
                        console.log("cancel");
                    },
                    style: 'cancel'
                },
                {
                    text: '確認',
                    onPress: ()=>{
                        console.log("ok");
                    },
                    style: 'default'
                },
            ]
        )
    }

    createThreeButtonAlert = () => {
        Alert.alert(
            '更新標題',
            '是否立即更新?',
            [
                {
                    text: '取消',
                    onPress: ()=>{
                        console.log("cancel");
                    },
                    style: 'cancel'
                },
                {
                    text: '稍後提示',
                    onPress: ()=>{
                        console.log("wait");
                    },
                    style: 'destructive'
                },
                {
                    text: '確認',
                    onPress: ()=>{
                        console.log("ok");
                    },
                    // style: 'default'
                },
            ]
        )
    }

    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <Button
                    title='alert'
                    onPress={() => {
                        alert('我是一個按鈕');
                    }}
                />
                <Button
                    title='Alert.alert'
                    onPress={() => {
                        Alert.alert('我是一個按鈕');
                    }}
                    color={'red'}
                />
                <Button
                    title='兩個按鈕'
                    onPress={this.createTwoButtonAlert}
                    color={'green'}
                />
                <Button
                    title='三個按鈕'
                    onPress={this.createThreeButtonAlert}
                    color={'tomato'}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})