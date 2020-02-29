import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import { Provider } from 'react-redux'; // vai deixar disponível o store da aplicação para todos os componentes

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
