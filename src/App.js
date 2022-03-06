import * as React from 'react';
import Navigators from './Navigators';
import {Provider} from 'react-redux';
import store from './Store';
import LangProvider from './Lang';
import ThemeProvider from './Themes/ThemeProvider';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <LangProvider>
          <Navigators />
        </LangProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
