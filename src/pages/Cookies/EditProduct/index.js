import React, { useContext, useState } from "react"

import FormChangeProduct from "../../../components/FormChangeProduct"
import { ProductsContext } from "../../../contexts/ProductsContexts";



const EditProduct = ({ route, navigation }) => {

    const [ product, setProduct ] = useState(route.params.product);
    const { putProduct } = useContext(ProductsContext)

    const  handleSignIn = (data) => {
        try{
            const newProduct = {
                id: product.id,
                name: data.name,
                price: data.price
            }

            putProduct(newProduct)
            navigation.goBack(null);
        } catch(e){
            console.log(e)
        }
    }

    return(
        <FormChangeProduct 
            nameTag={product.name}
            priceTag={`R$${product.price}`}
            buttonTag={"Alterar"}
            placeholderName={"Nome"}
            placeholderPrice={"Preço"}
            functionSubmit={handleSignIn} 
        />
    )
}

export default EditProduct