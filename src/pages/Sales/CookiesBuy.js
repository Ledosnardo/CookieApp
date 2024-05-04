import { Picker } from "@react-native-picker/picker";
import React, { useContext, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ProductsContext } from "../../contexts/ProductsContexts";
import { Entypo } from '@expo/vector-icons';
import uuid from 'react-native-uuid';

const CookiesBuy = ({ setPurchaseValue }) => {
    const { products } = useContext(ProductsContext)

    const [ valueDropDown, setValueDropDown] = useState(products[0])
    const [ amount, setAmount ] = useState(0)
    const [ shoppingCart, setShoppingCart ] = useState([])
    const [ errorInput, setErrorInput ] = useState(false)

    const addCookie = () => {
        const buy = {  
            'idItem' : uuid.v4(),
            'cookie' : { ...valueDropDown },
            amount,
            'totalPay' : amount * valueDropDown.price 
        }

        if(buy.amount > 0){
            setShoppingCart(up => {
                return [ ...up, buy ]
            })
    
            setPurchaseValue(up => up += buy.totalPay)
            setAmount(0)
            setErrorInput(false)
        } else{
            setErrorInput(true)
        }
    }

    const deleteCookie = ( id ) => {
        setShoppingCart(updater => {
            const list = updater.filter(x => x.idItem != id )

            return list
        })
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
                        {products.map( p => (
                            <Picker.Item 
                                label={`${p.name} - R$${p.price}`}
                                value={p}
                                key={p.id}
                            />
                        ))}
                    </Picker>            
                    <TextInput 
                        style={!errorInput ? styles.input : styles.inputError}
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
                key={() => uuid.v4()} 
                data={shoppingCart}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <View style={styles.content}>
                            <View>
                                <Text style={styles.textName}>Produto</Text>
                                <Text style={styles.text}>{item.cookie.name}</Text>
                            </View>
                            <View>
                                <Text style={styles.textName}>Quantidade</Text>  
                                <Text style={styles.text}>{item.amount}</Text>  
                            </View>
                            <View>
                                <Text style={styles.textName}>Valor</Text>
                                <Text style={styles.text}>R${item.totalPay}</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => deleteCookie(item.idItem)} style={styles.button}>
                            <Entypo name="trash" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
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
    content: {
        width: "70%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 15
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
    inputError : {
        padding: 10,
        width: "18%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#cd916f",
        borderColor: "red",
        borderWidth: 1
    },
    button: {
        height: "80%",
        alignItems: "center",
        justifyContent: "center",
        width: "20%",
        borderLeftWidth: 1,
    },
    textName : {
        paddingBottom: 5,
        marginBottom: 5,
        color:"#cd916f",
        textAlign: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#cd916f",
        textTransform: "uppercase"
    },
    text: {
        color:"#F4FDFF",
        textAlign: "center"
    }
})


export default CookiesBuy