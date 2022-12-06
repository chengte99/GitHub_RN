import { Text, StyleSheet, View, Button, Alert } from 'react-native'
import React, { Component } from 'react'
import { getCityInfo, getThreeDays, getWeatherInfo } from './api'

export default class index extends Component {
    getData = () => {
        // let key = '0641f81b346e457887651fe63ffa31b5'
        // let location = '116.41,39.92'
        // const url = `https://devapi.qweather.com/v7/weather/3d?key=${key}&location=${location}`;

        // fetch(url, {
        //     method: 'GET'
        // }).then(res=> res.json())
        // .then(res => {
        //     console.log(res)
        //     Alert.alert('請求成功221');
        // })
        // .catch(err => {
        //     Alert.alert('報錯了', JSON.stringify(err));
        // })

        let coords = {
            longitude: '116.41',
            latitude: '39.92'
        }

        // getThreeDays(coords).then((res) => {
        //     console.log(res);
        //     Alert.alert('請求成功221');
        // }).catch(err => {
        //     Alert.alert('報錯了', JSON.stringify(err));
        // })

        // getWeatherInfo(coords).then((res)=> {
        //     console.log(res);
        //     Alert.alert('請求成功221');
        // }).catch(err => {
        //     Alert.alert('報錯了', JSON.stringify(err));
        // })

        getCityInfo(coords).then((res)=> {
            console.log(res);
            Alert.alert('請求成功221');
        }).catch(err => {
            Alert.alert('報錯了', JSON.stringify(err));
        })
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Text>index22222</Text>
                <Button title='GET Data' onPress={this.getData} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})