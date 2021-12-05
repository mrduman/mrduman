import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useDispatch } from "react-redux";


export default function Primary() {

    const [text, setText] = useState('')
    const [username, setUsername] = useState('')

    const dispatch = useDispatch()

    const changeHandler = () => {dispatch({type : 'ADD_NAME', payload : {name:text}})}

    const cleanHandler = () => {dispatch({type : 'CLEAN_LIST' })}

    const setHandler = () => {dispatch({type : 'SET_USERNAME', payload : {username}})}

    return (
        <View>
            <Text style={{ fontSize: 30 }} >Primary :</Text>
            <View style={null}>
               <TextInput
                 style = {style}
                 placeholder = 'text in'
                 onChangeText = {setText}
                 />

                 <TextInput
                  style = {style}
                  placeholder = 'text username'
                  onChangeText = {setUsername}

                 />
            </View>
            <Button 
            title = 'Press me'
            onPress = {changeHandler} />

            <Button 
             title = 'Clean List'
             onPress = {cleanHandler}
            />

            <Button
             title = 'Save it'
             onPress = {setHandler}
            />
        </View>
    )

}

const style = { borderWidth: 1, margin: 10, padding: 5, borderColor: '#e0e0e0' }