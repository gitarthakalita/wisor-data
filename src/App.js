import React from 'react';

import './App.scss';


import { Provider } from 'mobx-react';
import appStore from './store/store';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Layouts/Navbar/Navbar';
import Footer from './Layouts/Footer/Footer';

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes></Routes>
        <Footer/>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
