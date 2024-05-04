import { StyleSheet, Text, TextInput, View } from "react-native";
import { CheckBox } from '@rneui/themed';

const InfoBuy = ({ purchaseValue, isPayAll, setIsPayAll, valuePay, setValuePay }) => {

    return(
        <View style={styles.container}>
            <Text style={styles.valueText} >R${purchaseValue}</Text>
            <CheckBox 
                iconRight
                title="Pagou?"
                checked={isPayAll}
                onPress={() => setIsPayAll(!isPayAll)}
                checkedColor="#cd916f"
                textStyle={{
                    color:"white"
                }}
                containerStyle={{
                    backgroundColor: "transparent"
                }}
            />
            {!isPayAll 
                ? <View style={styles.containerValue}>
                    <TextInput 
                        style={styles.containerValueInput}
                        keyboardType="decimal-pad"
                        onChangeText={setValuePay}
                        value={`${valuePay}`}
                    />
                    <Text style={styles.containerValueText}>Quantos pagou?</Text>
                </View>
                : ''
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#703e1f"
    },
    valueText: {
        backgroundColor: "#cd916f",
        fontSize: 15,
        padding: 10,
        borderRadius: 10,
    },
    checkbox: {
        backgroundColor: "#cd916f",
        color: "white"
    },
    containerValue:{
        alignItems: "center"
    },
    containerValueInput:{
       backgroundColor: "#cd916f",
       width: 60,
       height: 40,
       textAlign: "center",
       borderRadius: 10
    },
    containerValueText: {
        color: "white"
    }
})

export default InfoBuy