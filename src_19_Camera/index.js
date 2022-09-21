import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Camera, useCameraDevices } from 'react-native-vision-camera'


const index = () => {
    useRef
    const camera = useRef<Camera>(null);
    const devices = useCameraDevices();
    const device = devices.back;

    return (
        <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
        />
    )
}

export default index

const styles = StyleSheet.create({})