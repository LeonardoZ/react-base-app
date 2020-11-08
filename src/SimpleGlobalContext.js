import { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = props => {
    const [count, setCount] = useState(0);
    return (
        <GlobalContext.Provider value={[count, setCount]}>
            {props.children}
        </GlobalContext.Provider>
    )

}