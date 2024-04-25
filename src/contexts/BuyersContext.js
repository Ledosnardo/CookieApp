import react, { createContext, useEffect, useState } from "react";
import buyersJson from "../json/buyers.json";

export const BuyersContext = createContext({});

const BuyersProvider = ({ children }) => {
    const [ buyers, setBuyers ] = useState([])
    
    useEffect(() => {
        getBuyers()
    }, [])
    
    const getBuyers =() => {
        setBuyers(buyersJson)
    }

    return(
        <BuyersContext.Provider value={{ buyers }}>
            { children }
        </BuyersContext.Provider>
    )
}

export default BuyersProvider