import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CookiesBuy from "./CookiesBuy";
import InfoBuy from "./InfoBuy";

const Sales = () => {
    const [ purchaseValue, setPurchaseValue ] = useState(0)
    const [ isPayAll, setIsPayAll ] = useState(true)
    const [ valuePay, setValuePay ] = useState('')

    return(
        <>
            <View style={styles.infoBuy}>
                <InfoBuy 
                    purchaseValue={purchaseValue} 
                    isPayAll={isPayAll}
                    setIsPayAll={setIsPayAll}
                    valuePay={valuePay}
                    setValuePay={setValuePay}
                />
            </View>
            <View>
                <CookiesBuy setPurchaseValue={setPurchaseValue} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    infoBuy:{
        borderBottomWidth: 1,
        paddingBottom: 20,
        marginBottom: 15,
        borderStyle: "dashed",
        borderColor: "#703e1f"
    }
})

export default Sales;