import React from "react";
import { View, Text, TextInput } from 'react-native'
import styles from './Input.style'


export default function Input({ label, onChangeText , placeholder }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label} >{label}</Text>
            <View style={styles.input_container}>
                <TextInput onChangeText = {onChangeText} placeholder = {placeholder}/>
            </View>
        </View>
    )
}