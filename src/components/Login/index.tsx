import React, { FunctionComponent, useEffect, useState } from 'react';
import ApiService from '../../services/ApiService';
import loginStyles from './loginStyles'
import { Text, View, Button, TextInput } from 'react-native';
import { useInstance } from 'react-ioc';

const Login: FunctionComponent = (): JSX.Element => {
  const apiService = useInstance(ApiService)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    apiService.auth(email, password);
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

export default Login;
