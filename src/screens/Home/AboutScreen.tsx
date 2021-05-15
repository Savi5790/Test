import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
interface Props {
  namer: string;
  route: any;
}
export class AboutScreen extends React.Component<Props> {
  namer = this.props.route.params;
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Здравствуйте: {this.props.route.params.namer}</Text>
      </View>
    );
  }
}
