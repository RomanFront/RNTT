import React, { FunctionComponent, useEffect, useState } from 'react';
import AuthService from '../../services/AuthService';
import loginStyles from './loginStyles'
import { Text, View, Button, TextInput } from 'react-native';
import { useInstance } from 'react-ioc';
import { observer } from 'mobx-react';

const Login: FunctionComponent = () => {
  const authService = useInstance(AuthService)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    authService.auth(email, password);
  }

  return (
    <View style={loginStyles.authContainer}>
      <Text style={loginStyles.headerText}>Авторизация</Text>
      <View style={loginStyles.inputRowContainer}>
      <View style={loginStyles.inputRow}>
        <Text>E-mail:</Text>
        <TextInput
        style={loginStyles.input}
        autoCompleteType='off'
        placeholder="Введите e-mail..."
        onChangeText={(text) => setEmail(text)}
        />
      </View>
      </View>
      <View style={loginStyles.inputRowContainer}>
      <View style={loginStyles.inputRow}>
        <Text>Пароль:</Text>
        <TextInput
        style={loginStyles.input}
        textContentType='password'
        secureTextEntry={true}
        placeholder="Введите пароль..."
        onChangeText={(text) => setPassword(text)}
        />
      </View>
      </View>
      <View style={{marginTop: 20}}>
      <Button
        title="Войти"
        onPress={() => handleSubmit()}
      />
      </View>
    </View>
  )
}

export default observer(Login);
