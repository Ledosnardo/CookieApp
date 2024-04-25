import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages'
import Products from './src/pages/Cookies';
import EditProduct from './src/pages/Cookies/EditProduct';
import ProductsProvider from './src/contexts/ProductsContexts';
import NewProduct from './src/pages/Cookies/NewProduct';
import Buyers from './src/pages/Buyers';
import BuyersProvider from './src/contexts/BuyersContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <ProductsProvider>
          <BuyersProvider>

            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Produtos" component={Products} />
                <Stack.Screen name="Compradores" component={Buyers} />
                <Stack.Screen name="Editar Produto" component={EditProduct} />
                <Stack.Screen name="Novo Produto" component={NewProduct} />
            </Stack.Navigator>

          </BuyersProvider>
        </ProductsProvider>
    </NavigationContainer>
  );
}
