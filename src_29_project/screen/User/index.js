import { Text, StyleSheet, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { loginFailed } from '../../redux/actions/User'

const mapStateToProps = state => {
    return {
        isLogin: state.User.isLogin
    }
}

class UserScreen extends Component {

    doLogout = () => {
        this.props.loginFailed();
        Alert.alert('成功', '退出成功')
    }

    render() {
        return (
            <View style={[styles.container]}>
                <ScrollView>
                    <View style={[styles.avatar]}>
                        <Image
                            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                            style={{ width: 80, height: 80, marginVertical: 10, borderRadius: 40 }}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('About');
                        }}
                    >
                        <View style={[styles.listItem]}>
                            <View style={[styles.listItemText]}>
                                <Ionicons name='information-circle-outline' size={20} color={'green'} />
                                <Text style={[{ marginLeft: 10, fontSize: 18 }]}>關於</Text>
                            </View>
                            <Ionicons name='chevron-forward-outline' size={20} color={'#bbb'} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert('111')
                        }}
                    >
                        <View style={[styles.listItem]}>
                            <View style={[styles.listItemText]}>
                                <Ionicons name='settings-outline' size={20} color={'#dda0dd'} />
                                <Text style={[{ marginLeft: 10, fontSize: 18 }]}>設置</Text>
                            </View>
                            <Ionicons name='chevron-forward-outline' size={20} color={'#bbb'} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Counter");
                        }}
                    >
                        <View style={[styles.listItem]}>
                            <View style={[styles.listItemText]}>
                                <Ionicons name='settings-outline' size={20} color={'#dda0dd'} />
                                <Text style={[{ marginLeft: 10, fontSize: 18 }]}>計數器</Text>
                            </View>
                            <Ionicons name='chevron-forward-outline' size={20} color={'#bbb'} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Login');
                        }}
                    >
                        <View style={[styles.listItem]}>
                            <View style={[styles.listItemText]}>
                                <Ionicons name='information-circle-outline' size={20} color={'green'} />
                                <Text style={[{ marginLeft: 10, fontSize: 18 }]}>登錄</Text>
                            </View>
                            <Ionicons name='chevron-forward-outline' size={20} color={'#bbb'} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ this.doLogout }
                    >
                        <View style={[styles.listItem]}>
                            <View style={[styles.listItemText]}>
                                <Ionicons name='information-circle-outline' size={20} color={'green'} />
                                <Text style={[{ marginLeft: 10, fontSize: 18 }]}>登出</Text>
                            </View>
                            <Ionicons name='chevron-forward-outline' size={20} color={'#bbb'} />
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

export default connect(null, {loginFailed})(UserScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    avatar: {
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        height: 50,
        paddingHorizontal: 20
    },
    listItemText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})