
import React from 'react';
import { createGlobalStyle } from 'styled-components';

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
    <h1>Zaaika</h1>
    <GlobalStyle/>
    <div className="App">
      Hello world
      
    </div>
    </>
  );
}

export default App;
