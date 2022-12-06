
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack'
import UserStack from './UserStack'

const Tab = createBottomTabNavigator()

const index = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name='HomeStack' component={HomeStack} />
            <Tab.Screen name='UserStack' component={UserStack} />
        </Tab.Navigator>
    )
}

export default index

const styles = StyleSheet.create({})