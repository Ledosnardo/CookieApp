import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import CookiesBuy from "./CookiesBuy";

const Sales = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver()
    })
    const [ purchaseValue, setPurchaseValue ] = useState(0)

    return(
        <CookiesBuy setPurchaseValue={setPurchaseValue}/>
    )
}

export default Sales;