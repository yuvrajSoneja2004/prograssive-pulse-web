"use client"

import { createContext, useContext } from 'react'

const Store = createContext();


export const StoreProvider = ({children}) => {
    return <Store.Provider value={"Will learn TS later on :)"}>{children}</Store.Provider>
}



export const useStore = () => {
    return useContext(Store);
}