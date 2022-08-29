import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input, Nav, RegisterButton } from '../../../common/RegisterComponent'

const RegisterPage = () => {
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
                    onChangeText={()=>{
                        
                    }}
                />
                <Input
                    label='密碼'
                    placeholder='請輸入密碼'
                    shortLine={true}
                    secure={true}
                    onChangeText={()=>{
                        
                    }}
                />
                <Input
                    label='幕課網id'
                    placeholder='請輸入幕課網id'
                    shortLine={true}
                    onChangeText={()=>{
                        
                    }}
                />
                <Input
                    label='訂單號後四碼'
                    placeholder='請輸入訂單號後四碼'

                    onChangeText={()=>{
                        
                    }}
                />
                <RegisterButton
                    label='註冊'
                    onClick={()=>{

                    }}
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
        padding: 20,
        flexGrow: 1
    }
})