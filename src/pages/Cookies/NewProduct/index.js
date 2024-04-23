import React, { useContext } from "react"
import FormChangeProduct from "../../../components/FormChangeProduct"
import uuid from 'react-native-uuid';
import { ProductsContext } from "../../../contexts/ProductsContexts";


const NewProduct = ({ navigation }) => {

    const { createProduct } = useContext(ProductsContext);

    const addProduct = (data) => {
        try{
            const newProduct = {
                id: uuid.v4(),
                name: data.name,
                price: data.price
            }

            createProduct(newProduct)
            navigation.goBack(null);
        } catch(e){
            console.log(e)
        }
    }

    return(
        <FormChangeProduct 
            nameTag={"Produto"}
            priceTag={"Valor"}
            buttonTag={"Criar"}
            functionSubmit={addProduct}
        />
    )
}

export default NewProduct