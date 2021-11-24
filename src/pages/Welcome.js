import React from "react";
import { View,Text,StyleSheet } from "react-native";
import Button from "../components/Button/Button";


function Welcome() {

    return(
        <View style = {styles.container}>
            <Text style = {styles.header}>Welcome</Text>
            <Button  text = 'Create a member registration' onPress = {null}/>
        </View>
    )
    
}

export default Welcome;

const styles = StyleSheet.create({
    container : {

        flex : 1,
        justifyContent: 'center',

    },

    header : {
        fontSize: 30,
        fontWeight : 'bold',
        textAlign : 'center',
        margin :10,
        color :'black'
    }
})