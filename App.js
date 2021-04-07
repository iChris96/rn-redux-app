import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Home from './src';
import store from './src/stores'

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
