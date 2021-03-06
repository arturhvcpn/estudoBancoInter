import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from './styles/global';

import Header from './components/Header';
import Gradient from './components/Gradient';

function App() {
  return (
  <ThemeProvider theme={theme}>
    <Header />
    <Gradient />
    <GlobalStyles />
  </ThemeProvider>
  );
}

export default App;
