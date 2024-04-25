import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



const SearchBar = ({ inputString, setInputString, setSearch, buyers }) => {
    const [ returnButton, setReturnButton ] = useState(false)

    const findBuyer = () => {
        if(inputString === '') return setSearch(buyers)
        else {
            setSearch(() => {
                return buyers.filter((buyer) => 
                buyer.name.toLowerCase().indexOf(inputString.toLowerCase()) > -1 
                ? true
                : false
            )})
            setReturnButton(true)
        }
    }

    const returnList = () => {
        const change = () => {
            setInputString('')
            setReturnButton(false)
            setSearch(buyers)
        }
    
        return(
            <TouchableOpacity style={styles.search} onPress={change}>
                <Feather name="x" size={28} color="black" />
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                value={inputString} 
                onChangeText={setInputString}
            />
            <TouchableOpacity onPress={findBuyer} style={styles.search}>
                <FontAwesome name="search" size={20} color="black" />
            </TouchableOpacity>
            {returnButton ? returnList() : ''}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 45,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5
    },
    input: {
        width: "60%",
        height: "100%",
        marginEnd: 10,
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#F4FDFF",
        borderColor: "#703e1f",
        borderWidth: 2
    },
    search: {
        backgroundColor: "#F4FDFF",
        height: "100%",
        width: "15%",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#703e1f",
        borderWidth: 2,
        borderRadius: 10,
        marginEnd: 5
    }
})

export default SearchBar