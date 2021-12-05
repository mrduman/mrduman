import React from "react";


export default function (state,action) {

    switch (action.type) {
        case 'ADD_NAME':
            return {...state , nameList : [...state.nameList, action.payload.name]}
    
            case 'CLEAN_LIST':
                return {...state, nameList : []}

            case 'SET_USERNAME' :
                return {...state, userName : action.payload.username}

        default:
            return state
    }

    
}