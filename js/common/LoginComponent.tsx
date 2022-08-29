import { Button, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

export const Input = (props: any) => {
    const { label, placeholder, shortLine, secure, onChangeText } = props;
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={styles.row}>
                <Text style={styles.inputLabel}>{label}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    secureTextEntry={secure}
                    //取消大小寫
                    autoCapitalize={'none'}
                    onChangeText={onChangeText}
                />
            </View>
            <View style={{
                height: 0.5,
                backgroundColor: '#D7D5D5',
                marginLeft: shortLine ? 20 : 0
            }} />
        </View>
    )
}

export const ConfirmButton = (props: any) => {
    const { title, onClick } = props;
    return (
        <TouchableOpacity style={styles.confirmLayout} onPress={onClick}>
            <Text style={styles.confirmTitle}>{title}</Text>
        </TouchableOpacity>
    );
};

export const Tips = (props: any) => {
    const { msg, helpURL } = props;
    return (
        <View style={styles.tipsLayout}>
            <Text style={styles.tips}>{msg}</Text>
            {!!helpURL && (<Button title='查看幫助' onPress={() => {
                Linking.openURL(helpURL);
            }} />)}
        </View>
    );
};

export const Nav = (props: any) => {
    const {title, rightTitle, rightOnClick} = props;
    return (
        <View style={styles.navBar}>
            <View style={{flexDirection: 'row'}}>
                <MaterialIcons name={'whatshot'} size={26} style={{color: 'red'}}/>
                <Ionicons name={'md-trending-up'} size={26} style={{ color: 'red' }} />
                <Entypo name={'user'} size={26} style={{ color: 'red' }} />
            </View>
            <View style={styles.titleLayout}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity onPress={rightOnClick}>
                <Text style={styles.button}>{rightTitle}</Text>
            </TouchableOpacity>
        </View>
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
        flex: 1,
        marginRight: 15
    },
    confirmLayout: {
        backgroundColor: '#2196F3',
        alignItems: 'center',
        padding: 12, //內邊距
        margin: 20, //外邊距
        marginTop: 30,
        borderRadius: 20
    },
    confirmTitle: {
        fontSize: 20,
        color: 'white'
    },
    tipsLayout: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tips: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red'
    },
    navBar: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'    
    },
    titleLayout: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    },
    title: {
        fontSize: 20,
        color: 'black'
    },
    button: {
        color: '#007AFF',
        fontSize: 18,
        paddingRight: 15
    }
})