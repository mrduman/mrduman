import React from "react";
import { View,Text,StyleSheet } from "react-native";
import Button from "../components/Button/Button";


function Welcome({navigation}) {

    function goToMemberSign() {
        navigation.navigate('MemberSignScreen')
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.header}>Kebap Fitness Studio</Text>
            <Button  text = 'Create a member registration' onPress = {goToMemberSign}/>
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