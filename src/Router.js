import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Primary from "./Pages/Primary";
import Secondary from "./Pages/Secondary";
import UserProvider from "./context/Provider";




const Tab = createBottomTabNavigator();

const  Router = () => {

    return (
       <UserProvider>
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name = 'Primary' component = {Primary} />
                <Tab.Screen name = 'Secondary' component = {Secondary} />
            </Tab.Navigator>
        </NavigationContainer>
        </UserProvider>
      
    )
}

export default Router;