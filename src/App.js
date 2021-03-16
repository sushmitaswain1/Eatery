
import React from 'react';

import {Navbar} from './Navbar/Navbar';
import {Banner} from './Banner/Banner';
import {Menu} from './Menu/Menu';
import {GlobalStyle} from "./Styles/GlobalStyle";
import {FoodDialogue} from "./FoodDialogue/FoodDialogue";
import { Order } from "./Order/Order";
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';
import {useAuthentication} from "./Hooks/useAuthentication";

const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

auth.signInWithPopup(provider);


function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();

  return (
    <>
 
    <GlobalStyle/>
    <FoodDialogue {...openFood} {...orders}/>
    <Navbar {...auth} />
    <Order {...orders} {...openFood}/>
    <Banner/>
   <Menu {...openFood}/>
   
    </>
  ); 
}

export default App;
