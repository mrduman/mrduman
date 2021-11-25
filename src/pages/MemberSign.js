import React,{useState} from "react";
import {View,Text, Alert} from 'react-native'
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";


export default function MemberSign({navigation}) {

    const [userName , setUserName] = useState(null);
    const [userSurname , setUserSurname] = useState(null);
    const [userAge , setUserAge] = useState(null);
    const [userEmail , setUserEmail] = useState(null);

    function submitHandler() {

        if(!userName || !userSurname || !userAge || !userEmail) {

            Alert.alert('Kebap Fitness Studio' , 'information cannot be left blank')
            return;
            
        }

        const user = {
            userName,
            userSurname,
            userAge,
            userEmail,

        }
        navigation.navigate('MemberResultScreen' , {user});
    }
    
    return(
        <View>
           
            <Input label = 'User Name'  placeholder = 'Enter user name...' onChangeText = {setUserName}/>
            <Input label = 'User Surname'  placeholder = 'Enter user surname...' onChangeText = {setUserSurname}/>
            <Input label = 'User Age'  placeholder = 'Enter user age...' onChangeText = {setUserAge}/>
            <Input label = 'User Email'  placeholder = 'Enter user email...' onChangeText = {setUserEmail}/>

            <Button text= 'complete registration' onPress = {submitHandler} />

        </View>
    )
}