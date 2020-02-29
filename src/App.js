import React from 'react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import { Provider } from 'react-redux'; // vai deixar disponível o store da aplicação para todos os componentes
import { ToastContainer } from 'react-toastify';

import history from './services/history';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
