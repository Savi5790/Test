import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {fonts} from '../../styles/constants';

interface Props {
  navigation: any
}
export class Homescreens extends React.Component<Props> {
  constructor(props: any) {
    super(props);
    
  }
  
  state = {
    textField: '',
    name: '',
  };

  handlePress = (): void => {
    this.setState({textField: this.state.name});
    this.setState({name: ''});
    this.props.navigation.navigate ("HomeScreen");
  };

  navigateToAnotherScreen = (): any => {
        this.props.navigation.navigate ("AboutScreen");
      };
      
  changeText = (text: string): void => {
    this.setState({name: text});
  };

  render() {  
    return (
          <View>
        <ImageBackground source={coffeimages} style={styles.imageBack}>
          <LinearGradient colors={['transparent', 'rgba(255,255,255,0.8)']}>
            <View style={styles.containerStyle}>
              <View>
                <Text style={styles.styleText}>Здравствуйте</Text>
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Введите текст"
                  value={this.state.name} // это дефолтное состояние
                  onChangeText={this.changeText}
                />
              </View>
              <View style={styles.saveMessageContainer}>
                <Text style={styles.viewMessage}>
                  Your message: {this.state.textField}
                </Text>
                <TouchableOpacity
                  style={styles.styleTouchable}
                  title="Сохранить"
                  color="red"
                  onPress={this.handlePress}>
                  <Text style={styles.textTouchable}>Сохранить </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={this.navigateToAnotherScreen}>
                <Text>Перейти</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageBack: {
    height: '100%',
  },
  containerStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
  },
  styleText: {
    color: 'white',
    fontFamily: fonts.SFUI_HEAVYItalic,
    fontSize: 42,
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  input: {
    alignSelf: 'center',
    textAlign: 'center',
    borderWidth: 1,
    width: 210,
    backgroundColor: 'rgba(225,225,225,0.8)',
  },
  styleTouchable: {
    textAlign: 'center',
    alignSelf: 'center',
    borderColor: 'black',
    //backgroundColor: 'red',
  },
  saveMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  viewMessage: {
    alignSelf: 'center',
  },
  textTouchable: {
    fontFamily: fonts.SFUI_LIGHT,
    fontSize: 27,
    textAlign: 'center',
  },
});

const coffeimages = {
  uri: 'https://i1.wallbox.ru/wallpapers/main/201624/e55123beb0f8bce.jpg',
};
