import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:4000/graphql'
  })
const client = new ApolloClient({
  link,
  cache
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <SafeAreaView style={styles.container}>
          <BookList />

        </SafeAreaView>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%'
  },
  image: {
    width: 100,
    height: 120,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
