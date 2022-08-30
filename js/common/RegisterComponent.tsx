import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export const Nav = (props: any) => {
    const { title, rightTitle, rightOnClick } = props;
    return (
        <View style={styles.navBar}>
            <View />
            <View style={styles.navTitleLayout}>
                <Text style={styles.navTitle}>{title}</Text>
            </View>
            <TouchableOpacity onPress={rightOnClick}>
                <Text style={styles.navBtn}>{rightTitle}</Text>
            </TouchableOpacity>
        </View>
    );
};

export const Input = (props: any) => {
    const { label, placeholder, shortLine, secure, onChangeText } = props;
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={styles.inputLayout}>
                <Text style={styles.inputLabel}>{label}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    autoCapitalize={'none'}
                    secureTextEntry={false}
                    onChangeText={onChangeText}
                />
            </View>
            <View style={{
                height: 0.5,
                backgroundColor: '#d3d3d3',
                marginLeft: (shortLine) ? 20 : 0
            }} />
        </View>
    );
};

export const RegisterButton = (props: any) => {
    const { label, onClick } = props;
    return (
        <TouchableOpacity style={styles.regBtnLayout} onPress={onClick}>
            <Text style={styles.regBtn}>{label}</Text>
        </TouchableOpacity>
    );
};

export const Tips = (props: any) => {
    const { label } = props;
    return (
        <View style={styles.tipsLayout}>
            <Text style={styles.tipsLabel}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    inputLayout: {
        flexDirection: 'row',
    },
    inputLabel: {
        width: 90,
        marginLeft: 15,
        marginTop: 18,
        marginBottom: 18,
        fontSize: 16
    },
    input: {
        flex: 1,
        marginRight: 15
    },
    regBtnLayout: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#87cefa',
        margin: 20,
        marginTop: 30,
        padding: 12,
        borderRadius: 20
    },
    regBtn: {
        fontSize: 20,
        color: 'white'
    },
    navBar: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    navTitleLayout: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 40,
        right: 40
    },
    navTitle: {
        fontSize: 20,
        color: 'black'
    },
    navBtn: {
        fontSize: 20,
        color: 'dodgerblue',
        paddingRight: 15
    },
    tipsLayout: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    tipsLabel: {
        fontSize: 16,
        color: 'blue',
        fontWeight: 'bold'
    }
});