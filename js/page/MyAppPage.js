// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({ navigation, route }) {
    const [count, setCount] = React.useState(0);

    React.useLayoutEffect(()=> {
        navigation.setOptions({
            headerRight: ()=>(
                <Button onPress={()=> setCount((c)=>c+1)} title='Add Count' />
            )
        });
    }, [navigation])

    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Button
        //         title="Create post"
        //         onPress={() => navigation.navigate('CreatePost')}
        //     />
        //     <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>            
        // </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Text>Count: {count}</Text>
            {/* <Button
                title='go to Detail'
                onPress={()=>{
                    navigation.navigate('Details', {
                        itemID: 86,
                        otherParam: 'anything u want here'
                    });
                }}
            /> */}
            <Button
                title='go to Detail'
                onPress={() => {
                    navigation.navigate('Details');
                }}
            />
            <Button
                title='change title'
                onPress={() => {
                    navigation.setOptions({ title: 'your home' })
                }}
            />
        </View>
    );
}

function CreatePostScreen({ navigation, route }) {
    const [postText, setPostText] = React.useState('');

    return (
        <>
            <TextInput
                multiline
                placeholder="What's on your mind?"
                style={{ height: 200, padding: 10, backgroundColor: 'white' }}
                value={postText}
                onChangeText={setPostText}
            />
            <Button
                title="Done"
                onPress={() => {
                    // Pass and merge params back to home screen
                    navigation.navigate({
                        name: 'Home',
                        params: { post: postText },
                        merge: true,
                    })
                }}
            />
        </>
    );
}

function DetailsScreen({ route, navigation }) {
    const { itemID, otherParam } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>itemID: {JSON.stringify(itemID)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title='go to Detail again'
                onPress={() => {
                    navigation.push('Details');
                }}
            />
            <Button title='go to home' onPress={() => { navigation.navigate('Home'); }} />
            <Button title='go back' onPress={() => {
                navigation.goBack();
            }} />
            <Button title='go back to first screen' onPress={() => {
                navigation.popToTop();
            }} />
            <Button title='change itemID' onPress={() => {
                navigation.setParams({
                    itemID: 99,
                    otherParam: 'I am changed !'
                })
            }} />
        </View>
    );
}

function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={require('react-native/Libraries/NewAppScreen/components/logo.png')}
        />
    )
}

function MyAppPage() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerTintColor: '#fff'
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'my home',
                        headerTitle: (props) => <LogoTitle {...props} />,
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    initialParams={{ itemID: 44, otherParam: 'anything u want there' }}
                />
                <Stack.Screen
                    name='CreatePost'
                    component={CreatePostScreen}
                    initialParams={{ name: 'joe' }}
                    options={({ route }) => ({
                        title: route.params?.name
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MyAppPage;