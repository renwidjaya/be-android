import * as React from 'react';
import Navigators from './Navigators';
import {Provider} from 'react-redux';
import store from './Store';

function App() {
  return (
    <Provider store={store}>
      <Navigators />
    </Provider>
  );
}

export default App;
