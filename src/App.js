
import React, {useState} from 'react';

import {Navbar} from './Navbar/Navbar';
import {Banner} from './Banner/Banner';
import {Menu} from './Menu/Menu';
import {GlobalStyle} from "./Styles/GlobalStyle";
import {FoodDialogue} from "./FoodDialogue/FoodDialogue";
import { Order } from "./Order/Order";
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';


function App() {
  const openFood = useOpenFood();
  const orders = useOrders();

  return (
    <>
 
    <GlobalStyle/>
    <FoodDialogue {...openFood} {...orders}/>
    <Navbar/>
    <Order {...orders}/>
    <Banner/>
   <Menu {...openFood}/>
   
    </>
  ); 
}

export default App;
