import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Login from './src/components/Login';
import { provider, useInstance } from 'react-ioc';
import ApiService from './src/services/ApiService';
import Main from './src/components/Main';
import { observer } from 'mobx-react';

const App: FunctionComponent = (): JSX.Element => {
  const { isUser } = useInstance(ApiService)

  const rootStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <SafeAreaView style={rootStyles.container}>
      {!isUser && <Login />}
      {isUser && <Main />}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default provider(ApiService)(observer(App));