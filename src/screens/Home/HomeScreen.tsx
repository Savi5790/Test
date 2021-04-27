import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';

export class HomeScr extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    textField: '',
    name: '',
  };
  handlePress = () => {
    this.setState({textField: this.state.name});
    this.setState({name: ''});
  };
  changeText = (text) => {
    this.setState({name: text});
  };
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.textOut}> Привет, армия</Text>
        <TextInput
          style={styles.input}
          placeholder="EnterText"
          value={this.state.name} // это дефолтное состояние
          onChangeText={this.changeText}
        />
        <Button
          style={styles.buttInput}
          title="Сохранить"
          color="yellow"
          onPress={this.handlePress}
        />
        <Text>Your message: {this.state.textField}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    alignSelf: 'center',
    marginTop: 190,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    margin: 10,
    width: 200,
  },
  buttInput: {
    borderWidth: 3,
    padding: 225,
    borderColor: 'black',
    backgroundColor: 'red',
  },
  textOut: {
    fontSize: 20,
  },
});
