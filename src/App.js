
import React, {useState} from 'react';

import {Navbar} from './Navbar/Navbar';
import {Banner} from './Banner/Banner';
import {Menu} from './Menu/Menu';
import {GlobalStyle} from "./Styles/GlobalStyle";
import {FoodDialogue} from "./FoodDialogue/FoodDialogue";


function App() {
  const [openFood, setOpenFood] = useState();

  return (
    <>
 
    <GlobalStyle/>
    <FoodDialogue openFood={openFood} setOpenFood={setOpenFood}/>
    <Navbar/>
    <Banner/>
   <Menu setOpenFood={setOpenFood}/>
   
    </>
  ); 
}

export default App;
