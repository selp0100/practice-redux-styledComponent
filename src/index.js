import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import variables from './styles/variables';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const Number = 1;

function reducer(state = Number, action) {
  switch (action.type) {
    case 'add':
      state++;
      return state;

    case 'minus':
      state--;
      return state;

    default:
      return state;
  }
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={{ style: theme, variables }}>
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  </ThemeProvider>
);
