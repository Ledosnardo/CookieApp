import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BoxBuyer = ({ buyer }) => {
    return(
        <SafeAreaView>
            <View style={styles.box}>
                <TouchableOpacity >
                    <Text style={styles.text}>{buyer.name}</Text>
                </TouchableOpacity>
            </View>              
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#703e1f",
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 40
    },
    text: {
        fontSize: 18,
        color: "#F4FDFF"
    }
})

export default BoxBuyer