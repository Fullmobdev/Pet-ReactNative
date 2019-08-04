import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Pages from '../../Pages';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <Router>
          <Pages />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;