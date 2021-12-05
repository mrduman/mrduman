import React from "react";
import { View,Text, FlatList } from "react-native";
import { useSelector } from "react-redux";



export default function Secondary() {

const list = useSelector(s => s.nameList )

const myUsername  = useSelector(s => s.userName)

    return (
        <View>
            <Text style = {{fontSize : 30}} >Secondary :</Text>
            <Text style = {{fontSize : 30}} >Username : {myUsername}</Text>
            <FlatList
            data = {list}
            renderItem = {({item}) => <Text>{item}</Text>}
            />
        </View>
    )
    
}