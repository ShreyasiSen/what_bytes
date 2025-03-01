import React from "react";
import {useState,useEffect} from "react";
import { createContext } from "react";

export const BarContext = createContext();

export const BarProvider = ({ children }) => {
    const [updateBar, setUpdateBar] = useState(false);
    return(
        <BarContext.Provider value={{updateBar,setUpdateBar}}>
            {children}
        </BarContext.Provider>
    )
}

export const useBar = () => {
    return React.useContext(BarContext);
}


