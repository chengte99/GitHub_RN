import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'

function HomeScreen(props) {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>HomeScreen</Text>
            <Button title='Open Drawer' onPress={()=>{
                props.navigation.openDrawer()
            }}/>
            <Button title='Toggle Drawer' onPress={()=>{
                props.navigation.toggleDrawer();
            }}/>
        </View>
    )
}

function NewsScreen(props) {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>NewsScreen</Text>
            <Button title='Open Drawer' onPress={()=>{
                props.navigation.openDrawer()
            }}/>
            <Button title='Go Home' onPress={()=>{
                props.navigation.navigate('Home');
            }}/>
        </View>
    )
}

const Drawer = createDrawerNavigator();

const index = () => {
    return (
        <Drawer.Navigator
            screenOptions={({route, navigation})=>({
                drawerActiveTintColor: 'red'
            })}
        >
            <Drawer.Screen name='Home' component={HomeScreen} 
                options={{
                    title: '首頁',
                    drawerIcon: ({focused, color, size})=> {
                        let iconName;
                        iconName = focused ? 'home' : 'home-outline';
                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                }}
            />
            <Drawer.Screen name='News' component={NewsScreen}
                options={{
                    title: '新聞',
                    drawerIcon: ({focused, color, size})=> {
                        let iconName;
                        iconName = focused ? 'newspaper' : 'newspaper-outline';
                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                }}
            />
        </Drawer.Navigator>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 32
    }
})