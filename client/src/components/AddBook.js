import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../queries/queries';

class AddBook extends React.Component {
  state = {
    selected: '',
    name: '',
    genre: '',
    authorId: ''
  }

  displayAuthors = () => {
    var data = this.props.data;
    if (data.loading) {
      return(<Picker.Item label="Loading Authors" value="" />);
    } else {
      return data.authors.map(author => {
        return( <Picker.Item key={author.id} label={author.name} value= {author.id} /> );
      });
    }
  }

  render() {
    console.log(this.state);
    return (
      <View style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'baseline', marginTop: 20}}>
        <Text style={{fontSize: 16}}> Select Author </Text>
        <Picker
          selectedValue={this.state.authorId}
          style={{height: 40, width: 250, margin: 10, marginTop: 0}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({authorId: itemValue})
          }
          prompt='select author'
          >
          <Picker.Item label='—' value="" />
          { this.displayAuthors() }
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default graphql(getAuthorsQuery)(AddBook);
