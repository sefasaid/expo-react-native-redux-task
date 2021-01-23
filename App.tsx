import React from 'react';
import { Provider } from 'react-redux';
import Main from './src/Main';
import configureStore from './src/store/store';
const store = configureStore();
export default function Root() {
  return (
    <Provider store={ store }>
      <Main />
    </Provider>
  );
}
