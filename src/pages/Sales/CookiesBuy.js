import { Picker } from "@react-native-picker/picker";
import React, { useContext, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ProductsContext } from "../../contexts/ProductsContexts";
import { Entypo } from '@expo/vector-icons';
import uuid from 'react-native-uuid';

const CookiesBuy = ({ setPurchaseValue }) => {
    const { products } = useContext(ProductsContext)

    const [ valueDropDown, setValueDropDown] = useState([])
    const [ amount, setAmount ] = useState(1)
    const [ shoppingCart, setShoppingCart ] = useState([])

    const addCookie = () => {
        const buy = {
            ...valueDropDown,
            amount,
            'totalPay' : amount * valueDropDown.price 
        }

        setShoppingCart(up => {
            const list = [ ...up, buy ]

            return list
        })

        setPurchaseValue(up => up += buy.totalPay)
    }

    return(
        <View>
            <View style={styles.container}>
                <View style={styles.dropdownView}>
                    <Picker
                        mode="dropdown"
                        selectedValue={valueDropDown}
                        onValueChange={setValueDropDown}
                        style={styles.dropdown}
                    >
                        <Picker.Item 
                            label=''
                            value=''
                        />
                        {products.map( p => (
                            <Picker.Item 
                                label={p.name}
                                value={p}
                                key={p.id}
                            />
                        ))}
                    </Picker>            
                    <TextInput 
                        style={styles.input}
                        placeholder='1'
                        keyboardType="decimal-pad"
                        onChangeText={setAmount}
                        value={`${amount}`}
                        />
                </View>
                <TouchableOpacity onPress={addCookie} style={styles.button}>
                    <Entypo name="add-to-list" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
                key={uuid.v4()} 
                data={shoppingCart}
                renderItem={({ item }) => (
                    <Text>{item.name}</Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "95%",
        height: 90,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#703e1f",
        margin: 10,
        borderRadius: 10
    },
    dropdownView: {
        width: "70%",
        flexDirection: "row",
        alignItems: "center",
    },
    dropdown: {
        width: "70%",
        minHeight: "60%",
        backgroundColor: "#cd916f",
        margin: 20
    },
    input: {
        padding: 10,
        width: "18%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#cd916f"
    },
    button: {
        height: "80%",
        alignItems: "center",
        justifyContent: "center",
        width: "20%",
        borderLeftWidth: 1,

    }
})


export default CookiesBuy