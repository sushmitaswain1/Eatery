
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {Navbar} from './Navbar/Navbar';
import {Banner} from './Banner/Banner';

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
    <div>
      Hello world
     


    </div>
    </>
  );
}

export default App;
