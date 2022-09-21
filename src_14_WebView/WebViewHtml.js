import React, { Component } from 'react';
import { Dimensions, SafeAreaView, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

class MyInlineWeb extends Component {
    render() {
        return (
            <SafeAreaView style={[
                {
                    flex: 1
                }
            ]}>
                <View>
                    <Text>1234</Text>
                </View>
                <WebView
                    style={[
                        {
                            width: Dimensions.get('window').width,
                            height: 200,
                            borderColor: 'green',
                            borderWidth: 1
                        }
                    ]}
                    originWhitelist={['*']}
                    source={{ html: '<h1>Hello world</h1>' }}
                />
            </SafeAreaView>
        );
    }
}

export default MyInlineWeb