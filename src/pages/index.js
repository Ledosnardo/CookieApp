import React from "react";
import { Button, StyleSheet, View } from "react-native";

const MainPage = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Button title="cookies" onPress={() => navigation.navigate("Products")}/>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default MainPage;