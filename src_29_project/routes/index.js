import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeStack from './HomeStack'
import NewsStack from './NewsStack'
import UserStack from './UserStack'

const Tab = createBottomTabNavigator();

export default class index extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName='UserStack'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'HomeStack') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'NewsStack') {
                            iconName = focused ? 'newspaper' : 'newspaper-outline';
                        } else {
                            iconName = focused ? 'person' : 'person-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                    tabBarActiveTintColor: 'tomato',
                    headerShown: false,
                })}
            >
                <Tab.Screen name='HomeStack' component={HomeStack} />
                <Tab.Screen name='NewsStack' component={NewsStack} />
                <Tab.Screen name='UserStack' component={UserStack} />
            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({})