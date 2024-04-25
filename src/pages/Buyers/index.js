import React, { useContext, useState } from "react";
import { BuyersContext } from "../../contexts/BuyersContext";
import BoxBuyer from "./BoxBuyer";
import { StyleSheet, View, FlatList, SafeAreaView, TextInput, TouchableOpacity, Text } from "react-native";
import SearchBar from "../../components/SearchBar";

const Buyers = () => {
    const { buyers } = useContext(BuyersContext)
    const [ inputString, setInputString ] = useState('');
    const [ search, setSearch ] = useState(buyers)

    const renderItem =  ({ item }) => {
        return (
            <BoxBuyer buyer={item}/>
        )
    }

    return (
        <>
            <SearchBar 
                buyers={buyers}
                inputString={inputString}
                setInputString={setInputString}
                setSearch={setSearch}
            />
            <FlatList 
                data={search}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </>

    )
}

export default Buyers