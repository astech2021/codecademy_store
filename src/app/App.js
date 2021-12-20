import React from 'react';

import { Inventory } from '../features/inventory/Inventory';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter';
import { Cart } from '../features/cart/Cart';
import { SearchTerm } from '../features/searchTerm/SearchTerm';

// Render the Cart component below <Inventory />
export const App = (props) => {

  const { state, dispatch } = props;

  return (
    <div>
      <SearchTerm
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />

      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currencyFilter}
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />

      <Cart 
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

    </div>
  );
};

