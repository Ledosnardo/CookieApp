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

    const createProduct = (newProduct) => {
        setProducts(updater => [...updater, newProduct])
    }

    const putProduct = (product) => {
        setProducts(updater => {
            const list = updater.filter(x => x.id != product.id)
            list.push(product)
            
            return list
        })
    }

    const deleteProduct = (product) => {
        setProducts(updater => {
            const list = updater.filter(x => x.id != product.id)
            
            return list
        })
    }

    return(
        <ProductsContext.Provider value={{ products, putProduct, createProduct, deleteProduct }}>
            { children }
        </ProductsContext.Provider>
    )
}

export default ProductsProvider