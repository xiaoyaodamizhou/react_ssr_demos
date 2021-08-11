import { useContext, useReducer } from 'react'
import { createStore, createReducer } from './redux.helper'

export const initStore = {
    userInfo: {
        name: 'woyao'
    },
    weatherMessage: '',
}

export const Store = createStore(initStore)

const reducer = createReducer(initStore, function() {
    return {
        ["UPDATE_USER_INFO"](state, action) {
            return {
                ...state,
                userInfo: action.payload
            }
        },
        ["WEATHER_MESSAGE"](state, action) {
            return {
                ...state,
                weatherMessage: action.payload
            }
        }
    }
})

export const useReduxHook = () => useReducer(reducer, useContext(Store))
export const useClientReduxHook = () => useReducer(reducer, useContext(createStore(window.context.state)))
