import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import Constant from './expand/dao/Constant';
import { get, post } from './expand/dao/Hinet';
export default (props: any) => {
    const [msg, setMsg] = useState('');
    const url = "https://api.devio.org/uapi/test/test?requestPrams=aa";
    const dofetch = () => {
        // fetch(url)
        //     .then(res => res.json())
        //     .then(result => {
        //         setMsg(JSON.stringify(result));
        //     })
        //     .catch(e => {
        //         console.log(e);
        //         setMsg(JSON.stringify(e));
        //     })

        // get(Constant.test.api)({requestPrams: 'java'}).then(result=>{
        //     setMsg(JSON.stringify(result));
        // }).catch(err=>{
        //     console.log(err);
        //     setMsg(err);
        // })

        const formData = new FormData();
        formData.append("requestPrams", "java");
        post(Constant.test.api)(formData)().then(result=>{
            setMsg(JSON.stringify(result));
        }).catch(err=>{
            console.log(err);
            setMsg(err);
        })
    }
    return (    
        <SafeAreaView style={styles.root}>
            <TouchableOpacity onPress={dofetch}>
                <Text>Load</Text>
            </TouchableOpacity>
            <Text>{msg}</Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
    }
})
