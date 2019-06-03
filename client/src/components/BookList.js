import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';
import AddBook from './AddBook';

class BookList extends React.Component {
  state = {
    selected: null
  }

  displayBooks = () => {
    var data = this.props.data;
    if (data.loading) {
      return( <Text> Loading Books... </Text> );
    } else {
      return data.books.map(book => {
        return(
          <TouchableOpacity key={book.id} onPress={(e) => {this.setState({ selected:book.id })}}>
            <Text>{`\u2022 ${book.name}`}</Text>
          </TouchableOpacity>
        )
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      <View style={{display: 'flex', flexDirection: 'row', flex:1}}>
        <View style={{flex:1, padding:50}}>
          <View style={{ borderBottomColor: 'black' }}>
            <Text style={{ fontSize: 50, marginBottom: 10 }}>Reading List</Text>
          </View>
          { this.displayBooks() }
          <AddBook />
        </View>
        <BookDetails  bookId={ this.state.selected } />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default graphql(getBooksQuery)(BookList);
