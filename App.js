import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

const reducers = {
  todos: (state = [], action) => {
    return state;
  },
  filters: (state = 'complete', action) => {
    return state;
  }
}

const store = createStore(combineReducers({
  ...reducers
}))

const Home = () => {
  console.log("store", store.getState())
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>{store.getState().filters}</Text>
      <StatusBar style="auto" />
    </View>
  );
}



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
