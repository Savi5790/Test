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
  navigation: any;
}
export class registrationScreen extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <View>
        <ImageBackground
          source={require('../../assets/images/фон.png')}
          style={styles.imageBack}>
          <LinearGradient colors={['transparent', 'rgba(255,255,255,0.9)']}>
            <View style={styles.containerStyle}>
              <View>
                <Text style={styles.styleText}>CoffeTime</Text>
              </View>
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
    fontFamily: fonts.LOBSTER_REGULAR,
    fontSize: 64,
    textAlign: 'center',
  },
});
