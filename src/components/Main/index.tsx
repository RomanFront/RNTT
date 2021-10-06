import React, { FunctionComponent, useState } from 'react';
import AuthService from '../../services/AuthService';
import mainStyles from './mainStyles'
import { Text, View, Button, TextInput } from 'react-native';
import { useInstance } from 'react-ioc';

const Main: FunctionComponent = () => {
  const authService = useInstance(AuthService)

  return (
    <View style={mainStyles.root}>
      <Text>Main</Text>
    </View>
  )
}

export default Main;
