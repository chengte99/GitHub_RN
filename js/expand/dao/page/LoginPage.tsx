import { Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ConfirmButton, Input, Nav, Tips } from '../../../common/LoginComponent';
import LoginDao from '../LoginDao';
import Constant from '../Constant';


const LoginPage = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [helpURL, setHelpURL] = useState('https://m.imooc.com/article/279228')
    const onLogin = ()=> {
        if(userName == '' || password == '') {
            setMsg('用戶名與密碼不得為空');
            return;
        }
        setMsg('');
        setHelpURL('');
        LoginDao.getInstance()
        .login(userName, password)
        .then((res)=>{
            setMsg('登入成功');
        })
        .catch((e)=> {
            const { code, msg, data: {helpURL=''} = {}} = e;
            setMsg(msg);
        })
    }

    return (
        <SafeAreaView style={styles.root}>
            <Nav title='登入' rightTitle='註冊'
                rightOnClick={()=>{
                    Linking.openURL(Constant.apiDoc);
                }}
            />
            <View style={styles.navLine}/>
            <View style={styles.content}>
                <Input
                    label="用戶名"
                    placeholder="請輸入用戶名"
                    shortLine={true}
                    onChangeText={(text:string)=> setUserName(text)}
                />
                <Input
                    label="密碼"
                    placeholder="請輸入密碼"
                    secure={true}
                    onChangeText={(text:string)=> setPassword(text)}
                />
                <ConfirmButton
                    title="登入"
                    onClick={onLogin}
                />
                <Tips 
                    msg={msg}
                    helpURL={helpURL}
                />
            </View>
        </SafeAreaView>
        
    )
}

export default LoginPage

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    content: {
        padding: 20,
        backgroundColor: '#F1F5F6',
        flexGrow: 1
    },
    navLine: {
        height: 0.5,
        backgroundColor: '#d0d4d4'
    }
})