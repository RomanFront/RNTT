import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Login from './src/components/Login';
import { provider, useInstance } from 'react-ioc';
import AuthService from './src/services/AuthService';
import Main from './src/components/Main';
import { observer } from 'mobx-react';

const App: FunctionComponent = (): JSX.Element => {
  const { isUser } = useInstance(AuthService)

  const [isUserSwitcher, setIsUserSwitcher] = useState<boolean>(false);

  useEffect(() => {
    setIsUserSwitcher(isUser)
  }, [isUserSwitcher, setIsUserSwitcher, isUser]);

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
      {!isUserSwitcher && <Login />}
      {isUserSwitcher && <Main />}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default observer(provider(AuthService)(App));