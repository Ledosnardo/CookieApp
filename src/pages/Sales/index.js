import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CookiesBuy from "./CookiesBuy";
import InfoBuy from "./InfoBuy";
import SearchBuyer from "./SearchBuyer";

const Sales = () => {
    const [ shoppingCart, setShoppingCart ] = useState([])
    const [ purchaseValue, setPurchaseValue ] = useState(0)
    const [ isPayAll, setIsPayAll ] = useState(true)
    const [ valuePay, setValuePay ] = useState('')
    const [ valueSearchBuyer, setValueSearchBuyer ] = useState('')

    return(
        <>
            <View>
                <SearchBuyer valueSearch={valueSearchBuyer}  setValueSearch={setValueSearchBuyer}/>
            </View>
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
                <CookiesBuy 
                    setPurchaseValue={setPurchaseValue} 
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                />
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