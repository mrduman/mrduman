import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import initialState from "./store";
import React from "react";

const UserProvider = ({children}) => {

    const store = createStore(reducer,initialState )

    return <Provider store = {store} >{children}</Provider>
}

export default UserProvider;