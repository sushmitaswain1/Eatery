
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {Navbar} from './Navbar/Navbar';
import {Banner} from './Banner/Banner';
import {Menu} from './Menu/Menu';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Raleway', sans-serif;
  }

h1, h2, h3 {
  font-family: 'Roboto Condensed', sans-serif;
}
`


function App() {
  return (
    <>
 
    <GlobalStyle/>
    <Navbar/>
    <Banner/>
    <Menu/>
    <div>
      
     


    </div>
    </>
  );
}

export default App;
