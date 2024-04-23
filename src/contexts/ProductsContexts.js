import react, { createContext, useEffect, useState } from "react";
import cookiesJson from "../json/cookies.json";

export const ProductsContext = createContext({});

const ProductsProvider = ({ children }) => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        getProducts()
    }, [])


    const getProducts = () => {
        setProducts(cookiesJson)
    }

    const putProduct = (products) => {
        setProducts(updater => {
            const list = updater.filter(x => x.id != products.id)
            list.push(products)
            
            return list
        })
    }

    return(
        <ProductsContext.Provider value={{ products, putProduct }}>
            { children }
        </ProductsContext.Provider>
    )
}

export default ProductsProvider