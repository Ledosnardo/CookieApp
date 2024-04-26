import React from "react"

import ProductsProvider from './ProductsContexts';
import BuyersProvider from './BuyersContext';

const Contexts = ({ children }) => {
    return(
        <ProductsProvider>
          <BuyersProvider>

            {children}

          </BuyersProvider>
        </ProductsProvider>
    )
}

export default Contexts