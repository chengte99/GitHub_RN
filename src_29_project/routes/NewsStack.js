import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NewsScreen from '../screen/News'
import DetailScreen from '../screen/News/Detail'

const Stack = createNativeStackNavigator()

export default class NewsStack extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name='News' component={NewsScreen}
                    options={{
                        headerTintColor: '#fff',
                        title: '新聞',
                        headerStyle: {
                            backgroundColor: '#00b38a'
                        },
                        headerRight: () => (
                            <TouchableOpacity onPress={() => {
                                Alert.alert('我是新聞')
                            }}>
                                <Text>按我</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
                <Stack.Screen name='Detail' component={DetailScreen} />
            </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({})