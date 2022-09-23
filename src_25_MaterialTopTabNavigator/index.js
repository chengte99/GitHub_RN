import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MTab = createMaterialTopTabNavigator();
function HomeScreen() {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>This is top text.</Text>
            <Text style={[styles.text]}>This is bottom text.</Text>
        </View>
    )
}

function NewsScreen() {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>This is top text.</Text>
            <Text style={[styles.text]}>This is bottom text.</Text>
        </View>
    )
}

function OrderScreen() {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>This is top text.</Text>
            <Text style={[styles.text]}>This is bottom text.</Text>
        </View>
    )
}

function AccountScreen() {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>This is top text.</Text>
            <Text style={[styles.text]}>This is bottom text.</Text>
        </View>
    )
}

const index = () => {
    const insets = useSafeAreaInsets()

    return (
        <MTab.Navigator
            tabBarPosition='top'
            style={{
                marginTop: insets.top,
                marginBottom: insets.bottom
            }}
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <MTab.Screen name='Home' component={HomeScreen} 
                options={{
                    title: '首頁'
                }}
            />
            <MTab.Screen name='News' component={NewsScreen} 
                options={{
                    title: '新聞'
                }}
            />
            <MTab.Screen name='Order' component={OrderScreen} 
                options={{
                    title: '訂單'
                }}
            />
            <MTab.Screen name='Account' component={AccountScreen} 
                options={{
                    title: '帳戶'
                }}
            />
        </MTab.Navigator>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 32
    }
})