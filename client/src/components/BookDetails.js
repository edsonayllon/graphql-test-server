import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

class BookDetails extends React.Component {

  displayBookDetails = () => {
    const { book } = this.props.data;
    if (book) {
      return(
        <View>
          <Text style={{fontSize: 25, color: '#fff'}}>{ book.name }</Text>
          <Text style={styles.words}>By: { book.author.name }</Text>
          <Text style={styles.words}>Genre: { book.genre }</Text>
          <Text style={styles.words}>Books by this Author</Text>
          <View>
            {
              book.author.books.map(item => {
                return( <Text style={styles.words} key={ item.id }>{`\u2022 ${item.name}`}</Text> )
              })
            }
          </View>
        </View>
      )
    } else {
      return(
        <Text style={styles.words}>No book selected</Text>
      )
    }
  }

  render() {
    console.log(this.props.bookId)
    console.log(this.props)

    return (
      <View style={{flex:1, backgroundColor: '#C70039', padding: 50}}>
        { this.displayBookDetails() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  words: { color: '#fff', marginTop:5 },

});

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails);
