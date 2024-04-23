import React, { useContext, useState } from "react"
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import FormChangeCookie from "./FormChangeCookie"
import { ProductsContext } from "../../../contexts/ProductsContexts";

const schema = yup.object({
    name: yup.string().required("Informe um novo nome"),
    price: yup
        .number()
        .transform((value) => (isNaN(value) || value === null || value === undefined) ? 0 : value)
        .required("Informe um valor")
        .positive("O valor tem que ser positivo")
})

const EditProduct = ({ route, navigation }) => {

    const [ product, setProduct ] = useState(route.params.product);
    const { putProduct } = useContext(ProductsContext)

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

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
        <FormChangeCookie 
            product={product}
            handleSignIn={handleSignIn} 
            Controller={Controller}
            control={control}
            handleSubmit={handleSubmit}
            errors={errors}
        />
    )
}

export default EditProduct