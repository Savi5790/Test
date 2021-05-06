import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {fonts} from '../../styles/constants';

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
        <ImageBackground source={coffeimages} style={styles.images}>
          <LinearGradient colors={['transparent', 'rgba(255,255,255,0.8)']}>
            <View style={styles.vverh}>
              <Text style={styles.textOut}>Здравствуйте</Text>
            </View>

            <View style={styles.seredina}>
              <TextInput
                style={styles.input}
                placeholder="Введите текст"
                placeholderTextColor="red"
                value={this.state.name} // это дефолтное состояние
                onChangeText={this.changeText}
              />
            </View>
            <View style={styles.niz}>
              <Text>Your message: {this.state.textField}</Text>
              <TouchableOpacity
                style={styles.buttInput}
                title="Сохранить"
                color="red"
                onPress={this.handlePress}>
                <Text style={styles.textOut1}>Сохранить </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
  },
  styleImage: {
    marginTop: 0,
  },
  vverh: {
    marginTop: 0,
  },
  seredina: {
    marginTop: '70%',
  },
  niz: {
    marginTop: 0,
  },
  textOut: {
    color: 'white',
    fontFamily: fonts.SFUI_HEAVYItalic,
    fontSize: 42,
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  textOut1: {
    fontFamily: fonts.SFUI_LIGHT,
    fontSize: 27,
    textAlign: 'center',
  },
  input: {
    
    alignSelf: 'center',
    textAlign: 'center',
    borderWidth: 1,
    padding: 8,
    margin: 10,
    width: 210,
  },
  buttInput: {
    textAlign: 'center',
    alignSelf: 'center',
    margin: 1,
    width: 172,
    borderWidth: 0,
    padding: 10,
    borderColor: 'black',
    justifyContent: 'center',
    //backgroundColor: 'red',
  },
  images: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',

    /* paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 16,
    width: 350,*/
  },
});

const coffeimages = {
  uri: 'https://i1.wallbox.ru/wallpapers/main/201624/e55123beb0f8bce.jpg',
};
