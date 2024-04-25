import React from "react";
import { Button, StyleSheet, View } from "react-native";

const MainPage = ({navigation}) =>{
    return(
        <View style={styles.container}>
          <View style={styles.content}>
            <Button 
              title="Produtos" 
              onPress={() => navigation.navigate("Produtos")}
            />
            <Button 
              title="Compradores" 
              onPress={() => navigation.navigate("Compradores")}
            />
          </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center'
    },
    content: {
      height: "20%",
      justifyContent: "space-around",
    }
  });

export default MainPage;