import React from 'react'
import { createStore } from 'redux'
const reducer = (state = { x: 0 }, action) => {
    if (action.type === "plus")
        return { x: state.x++ }
    else
        return { x: state.x-- }
}


export const Store = createStore(reducer);