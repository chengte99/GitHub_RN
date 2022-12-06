import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserScreen from '../screen/User'
import AboutScreen from '../screen/User/About'
import LoginScreen from '../screen/NoAuth/Login'
import RegisterScreen from '../screen/NoAuth/Register'
import CounterScreen from '../screen/User/Counter'

const Stack = createNativeStackNavigator()

export default class UserStack extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name='User' component={UserScreen}
                    options={{
                        headerTintColor: '#fff',
                        title: '個人中心',
                        headerStyle: {
                            backgroundColor: '#00b38a'
                        }
                    }}
                />
                <Stack.Screen name='About' component={AboutScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Register' component={RegisterScreen} />
                <Stack.Screen name='Counter' component={CounterScreen} />
            </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({})