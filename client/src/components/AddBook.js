import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
  Button
} from 'react-native';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addBookMutation } from '../queries/queries';

class AddBook extends React.Component {
  state = {
    selected: '',
    name: '',
    genre: '',
    authorId: ''
  }

  displayAuthors = () => {
    var data = this.props.getAuthorsQuery;
    if (data.loading) {
      return(<Picker.Item label="Loading Authors" value="" />);
    } else {
      return data.authors.map(author => {
        return( <Picker.Item key={author.id} label={author.name} value= {author.id} /> );
      });
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <View style={{display:'flex', flexDirection: 'column', width: 350, marginTop: 20}}>
        <View style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'baseline', marginBottom: 20, justifyContent: 'space-between'}}>
          <Text style={{fontSize: 16}}> Book Name </Text>
          <TextInput
            style={{height: 30, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />
        </View>
        <View style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'baseline', marginBottom: 20, justifyContent: 'space-between'}}>
          <Text style={{fontSize: 16}}> Genre </Text>
          <TextInput
            style={{height: 30, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(genre) => this.setState({genre})}
            value={this.state.genre}
          />
        </View>
        <View style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'baseline', marginBottom: 20, justifyContent: 'space-between'}}>
          <Text style={{fontSize: 16}}> Select Author </Text>
          <Picker
            selectedValue={this.state.authorId}
            style={{height: 30, margin: 10, marginTop: 0}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({authorId: itemValue})
            }
            prompt='select author'
            >
            <Picker.Item label='—' value="" />
            { this.displayAuthors() }
          </Picker>
        </View>
        <Button
          onPress={this.submitForm}
          title="Add"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
