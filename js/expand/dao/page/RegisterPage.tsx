import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input, Nav, RegisterButton, Tips } from '../../../common/RegisterComponent'
import RegisterDao from '../RegisterDao';

const RegisterPage = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [imoocId, setImoocId] = useState('');
    const [orderId, setOrderId] = useState('');
    const [msg, setMsg] = useState('');
    const doRegister = () => {
        if(userName === '' || password === '' || imoocId === '' || orderId === '') {
            setMsg('帳密與ID資訊不可為空');
            return;
        }
        
        setMsg('');
        RegisterDao.getInstance()
            .register(userName, password, imoocId, orderId)
            .then((res)=> {
                setMsg(res);
            })
            .catch((e:any)=> {
                const {code, msg} = e;
                setMsg(`code: ${code}, ${msg}`);
            })
    }

    return (
        <SafeAreaView style={styles.root}>
            <Nav
                title='註冊'
                rightTitle='登入'
                rightOnClick={()=>{

                }}
            />
            <View style={styles.content}>
                <Input
                    label='用戶名'
                    placeholder='請輸入用戶名'
                    shortLine={true}
                    onChangeText={(text:string)=>setUserName(text)}
                />
                <Input
                    label='帳密'
                    placeholder='請輸入帳密'
                    shortLine={true}
                    secure={true}
                    onChangeText={(text:string)=>setPassword(text)}
                />
                <Input
                    label='幕課網ID'
                    placeholder='請輸入幕課網ID'
                    shortLine={true}
                    onChangeText={(text:string)=>setImoocId(text)}
                />
                <Input
                    label='訂單後四碼'
                    placeholder='請輸入訂單後四碼'
                    onChangeText={(text:string)=>setOrderId(text)}
                />
                <RegisterButton
                    label='註冊'
                    onClick={doRegister}
                />
                <Tips
                    label={msg}
                />
            </View>
        </SafeAreaView>
    )
}

export default RegisterPage

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    content: {
        backgroundColor: '#F1F5F6',
        flexGrow: 1,
        padding: 20
    }
})