import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screen/Home'
import takePictureScreen from '../screen/Home/takePicture'

const Stack = createNativeStackNavigator()

export default class HomeStack extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen}
                    options={{
                        title: '首頁',
                        headerStyle: {
                            backgroundColor: '#00b38a'
                        },
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('takePicture')
                            }}>
                                <Text style={[{fontSize: 18, color: '#fff'}]}>拍照</Text>
                            </TouchableOpacity>
                        ),
                        headerShadowVisible: false
                    }}
                />
                <Stack.Screen name='takePicture' component={takePictureScreen} />
            </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({})