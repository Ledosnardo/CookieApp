import React, { useContext } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { ProductsContext } from "../../contexts/ProductsContexts";


const Products = ({ navigation }) => {
    const { products } = useContext(ProductsContext)

    const newProduct = () => {
        navigation.navigate("Novo Produto")
    }

    const editProduct = (product) => {
        navigation.navigate("Editar Produto", { product })
    }

    return(
        <View>
            <TouchableOpacity style={styles.containerCookie} onPress={() => newProduct()}>
                <Text style={styles.newCookie}>Novo Produto</Text>
            </TouchableOpacity>
            {products.map((product, index) => {
                return(
                    <View style={styles.container}  key={index}>
                        <View style={styles.cookie}>
                            <Text style={styles.name}>{product.name}</Text>
                            <Text>{product.price} R$</Text>
                        </View>
                        <View style={styles.edits}>
                                <Button
                                    title="✏️" 
                                    color={`#703e1f`} 
                                    onPress={() => editProduct(product)}>
                                </Button>
                                <Button 
                                    title="🗑️" 
                                    color={`#703e1f`}>
                                </Button>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create(({
    containerCookie: {
        width: "32%",
        
        margin: 10,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: "#703e1f",
        borderRadius: 10,
        alignItems: "center"
    },

    newCookie: {
        color: "#F4FDFF",
        fontSize: 15
    },

    container: {
        flexDirection: "row",
        margin: 10,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: "#cd916f",
        borderRadius: 10
    },

    cookie: {
        width: "60%",
        alignItems: "center",
        justifyContent: "center"
    },

    name: {
        fontSize: 18
    },

    edits: {
        width: "35%",
        flexDirection: "row",
        justifyContent: "space-around"
    }
}));

export default Products;