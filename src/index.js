import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store'
import { App } from 'components/App';
import { GlobalStyle, Container, Title } from 'components/GlobalStyle';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <GlobalStyle />
          <Container>
            <Title>Phonebook</Title>
          <App /></Container>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
