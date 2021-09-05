import React, { Fragment, useState } from 'react';
import Header from './Components/Layout/header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvidor from "./Components/store/Cart-Providor";

function App() {

      const  [cartIsShown, setCartIsShown] = useState(false);
      const ShowCartHandler = () => {
          setCartIsShown(true);
      };
      const hideCartHandler = ()=> {
          setCartIsShown(false);
    };
    return (
    <CartProvidor>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
        < Header  onShowCart={ShowCartHandler}/>
        <main>
            <Meals />
        </main>

    </CartProvidor>
  );
}

export default App;
