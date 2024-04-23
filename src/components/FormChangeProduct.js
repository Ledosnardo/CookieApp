import React from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm, Controller } from 'react-hook-form'

const schema = yup.object({
    name: yup.string().required("Informe um novo nome"),
    price: yup
        .number()
        .transform((value) => (isNaN(value) || value === null || value === undefined) ? 0 : value)
        .required("Informe um valor")
        .positive("O valor tem que ser positivo")
})

const FormChangeProduct = ({ nameTag, priceTag , buttonTag, functionSubmit, placeholderName, placeholderPrice }) => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name="name"
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.content}>
                        <Text style={styles.name}>{nameTag}</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder={placeholderName ? placeholderName : ""}
                        />
                    </View>
                )}
            />
            {errors.name && <Text>{errors.name?.message}</Text>}

            <Controller 
                control={control}
                name="price"
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.content}>
                        <Text style={styles.name}>{priceTag}</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder={placeholderPrice ? placeholderPrice : ""}
                            keyboardType="decimal-pad"
                        />
                    </View>
                )}
            />
            {errors.price && <Text>{errors.price?.message}</Text>}

            <TouchableOpacity onPress={handleSubmit(functionSubmit)} style={styles.button}>
                <Text style={styles.buttonText}>{buttonTag}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center" 
    },

    content: {
        width: "70%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#cd916f",
        height: "12%",
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 30
    },

    name: {
        fontSize: 18
    },

    input: {
        width: "45%",
        fontSize: 15,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        color: "black",
        padding: 5,
        borderRadius: 5
    },

    button: {
        marginTop: 40,
        width: "75%",
        height: "10%",
        borderRadius: 10,
        backgroundColor: "#703e1f",
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        fontSize: 28,
        color: "#fffafa"
    }
})

export default FormChangeProduct