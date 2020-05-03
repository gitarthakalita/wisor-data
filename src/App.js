import React from 'react';

import './App.scss';
import UserProfile from './components/user-profile/UserProfile';

import { Provider } from 'mobx-react';
import appStore from './store/store';

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <UserProfile />
      </div>
    </Provider>
  );
}

export default App;
