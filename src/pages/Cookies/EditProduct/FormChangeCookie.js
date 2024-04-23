import React from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const FormChangeCookie = ({ product, Controller, handleSignIn, handleSubmit, control, errors }) => {
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name="name"
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.content}>
                        <Text style={styles.name}>{product.name}</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Novo Nome"
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
                        <Text style={styles.name}>R${product.price}</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Novo Preço"
                            keyboardType="decimal-pad"
                        />
                    </View>
                )}
            />
            {errors.price && <Text>{errors.price?.message}</Text>}

            <TouchableOpacity onPress={handleSubmit(handleSignIn)} style={styles.button}>
                <Text style={styles.buttonText}>Alterar</Text>
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

export default FormChangeCookie