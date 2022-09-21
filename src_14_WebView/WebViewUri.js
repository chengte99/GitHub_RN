import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <WebView
                    source={{ uri: 'https://www.google.com' }}
                />
            </SafeAreaView>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default MyWeb
