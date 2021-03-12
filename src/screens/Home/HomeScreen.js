import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


export const HomeScreen = () => {
  return (
    <View style = {styles.Gavno}>
      <Text style = {styles.Jopa}> Привет, армия</Text>
    </View>
  )
};

const styles=StyleSheet.create({
    Gavno: {
        alignSelf: 'center',
        marginTop: 280
    },
    Jopa: {
        fontSize: 40
    }
})