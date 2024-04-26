import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './pages'
import Products from './pages/Cookies';
import EditProduct from './pages/Cookies/EditProduct';
import NewProduct from './pages/Cookies/NewProduct';
import Buyers from './pages/Buyers';
import Sales from "./pages/Sales";

import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Routes = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    const HomePages = () => {
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Produtos" component={Products} />
                <Stack.Screen name="Compradores" component={Buyers} />
                <Stack.Screen name="Editar Produto" component={EditProduct} />
                <Stack.Screen name="Novo Produto" component={NewProduct} />
            </Stack.Navigator>
        )
    }

    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    height: "8%",
                    bottom: 10,
                    marginRight: 18,
                    left: 10,
                    borderRadius: 10,
                    backgroundColor: "#fffafa"
                }
            }}
        >
            <Tab.Screen 
                name="HomePages"
                component={HomePages}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => {
                        if(focused){
                            return <FontAwesome6 name="house-chimney" size={size} color="#703e1f" />
                        } else {
                            return <FontAwesome6 name="house-chimney" size={size} color="black" />
                        }
                    }
                }}
            />
            <Tab.Screen 
                name="Venda"
                component={Sales}
                options={{
                    tabBarIcon: ({ focused, size }) => {
                        if(focused){
                            return <FontAwesome5 name="money-check-alt" size={size} color="#703e1f" />
                        } else {
                            return <FontAwesome5 name="money-check-alt" size={size} color="black" />
                        }
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default Routes