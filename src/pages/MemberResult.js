import React from "react";
import {View, Text,StyleSheet} from 'react-native'


export default function MemberResult({route}) {

    const{user} = route.params;

    return(
        <View>
            <Text style = {styles.message}>Registration is complete</Text>
            <Text style = {styles.label} >User Name : {user.userName} </Text>
            <Text style = {styles.label}>User Surname : {user.userSurname}</Text>
            <Text style = {styles.label}>User Age : {user.userAge} </Text>
            <Text style = {styles.label}>User Email : {user.userEmail}</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({

    label : {

        fontWeight : 'bold',
        fontSize :20,
        color : 'black',
        margin : 5,

    },
    message : {
        fontWeight : 'bold',
        fontSize : 40,
        color : 'black',
        textAlign : 'center'
    }
})