import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import App from './src/App';
import configureStore from './src/store/store';
const store = configureStore();
export default function Root() {
  return (
    <Provider store={ store }>
      <App />
    </Provider>
  );
}
