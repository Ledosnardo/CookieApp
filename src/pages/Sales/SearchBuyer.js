import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { BuyersContext } from "../../contexts/BuyersContext";

const SearchBuyer = ({ valueSearch, setValueSearch }) => {
    const { buyers } = useContext(BuyersContext)

    const [ filter, setFilter ] = useState([])

    const changeText = ( e ) => {
        setValueSearch(e)
        if(valueSearch){
            setFilter(() => {
                return buyers.filter(buyer => 
                    buyer.name.toLowerCase().indexOf(valueSearch.toLowerCase()) > -1
                )
            })
        }
    }

    const buttonAction = ( name ) => {
        setValueSearch(name)
        setFilter([])
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input} 
                    placeholder="Comprador"
                    value={valueSearch}
                    onChangeText={(e) => changeText(e)}
                />
                {filter.map((person, index) => (
                    <TouchableOpacity 
                        key={index} 
                        onPress={() => buttonAction(person.name)} 
                        style={styles.option}
                    >
                        <Text style={styles.optionText}>{person.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity style={styles.cleanInput} onPress={() => buttonAction('')}>
                <Feather name="x" size={25} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#703e1f",
        marginHorizontal: 30,
        marginBottom: 10,
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    containerInput:{
        width: "60%"
    },
    input: {
        width: "100%",
        height: 30,
        borderRadius: 10,
        textAlign: "center",
        backgroundColor: "#cd916f"
    },
    option: {
        backgroundColor: "#F4FDFF",
        width: "80%",
        marginHorizontal: 20,
        marginVertical: 2,
        height: 25,
        borderRadius: 10,
    },
    optionText: {
        textAlign: "center"
    },
    cleanInput: {
        backgroundColor: "#cd916f",
        height: 30,
        width: "15%",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#703e1f",
        borderWidth: 2,
        borderRadius: 10,
        marginEnd: 5
    }
})

export default SearchBuyer