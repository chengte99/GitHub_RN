import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Nav = (props: any) => {
    const { title, rightTitle, rightOnClick } = props;
    return (
        <View style={styles.nav}>
            <View>
                <Text>{title}</Text>
            </View>
            <TouchableOpacity onPress={rightOnClick}>
                <Text>{rightTitle}</Text>
            </TouchableOpacity>
        </View>
    );
};

export const Input = (props: any) => {
    const { label, placeholder, shortLine, secure, onChangeText } = props;
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={styles.row}>
                <Text style={styles.inputLabel}>{label}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    autoCapitalize='none'
                    secureTextEntry={secure}
                    onChangeText={onChangeText}
                />
            </View>
            <View
                style={{
                    height: 0.5,
                    backgroundColor: 'lightgray',
                    marginLeft: (shortLine) ? 20 : 0
                }}
            />
        </View>
    );
};

export const RegisterButton = (props: any) => {
    const { label, onClick } = props;
    return (
        <TouchableOpacity style={styles.regBtn} onPress={onClick}>
            <Text style={styles.regLabel}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    inputLabel: {
        marginLeft: 15,
        marginTop: 18,
        marginBottom: 18,
        fontSize: 16,
        width: 90
    },
    input: {
        marginRight: 15,
        flex: 1
    },
    regBtn: {
        backgroundColor: '#2196F3',
        alignItems: 'center',
        padding: 12,
        margin: 20,
        marginTop: 30,
        borderRadius: 20
    },
    regLabel: {
        color: 'white',
        fontSize: 20
    },
    nav: {
        
    }
});


