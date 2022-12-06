import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import Index from './src_30_project'
// import store from './src_30_project/redux/store'
import { Provider as StoreProvider } from 'react-redux'
import Index from './src_31_project'
import store from './src_31_project/redux/store'

const App2 = () => {
    return (
        <StoreProvider store={store}>
            <NavigationContainer>
                <Index />
            </NavigationContainer>
        </StoreProvider>
        // <NavigationContainer>
        //     <Index />
        // </NavigationContainer>
    )
}

export default App2

const styles = StyleSheet.create({})