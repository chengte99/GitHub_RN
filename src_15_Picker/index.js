import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import { Picker } from '@react-native-picker/picker'

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            selectedLang: 'java'
        }
    }

    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <Picker
                    style={[
                        {
                            height: 100,
                            width: 200
                        }
                    ]}
                    selectedValue={this.state.selectedLang}
                    onValueChange={(itemValue, itemNumber)=>{
                        this.setState({
                            selectedLang: itemValue
                        })
                    }}
                >
                    <Picker.Item label='Java' value={'java'} />
                    <Picker.Item label='JavaScript' value={'js'} />
                </Picker>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})