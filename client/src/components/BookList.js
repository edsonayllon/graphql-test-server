import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

class BookList extends React.Component {

  displayBooks = () => {
    var data = this.props.data;
    if (data.loading) {
      return( <Text> Loading Books... </Text> );
    } else {
      return data.books.map(book => {
        return(
          <Text key={book.id}>{`\u2022 ${book.name}`}</Text>
        )
      })
    }
  }

  render() {
    return (
      <View>
        { this.displayBooks() }
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default graphql(getBooksQuery)(BookList);
