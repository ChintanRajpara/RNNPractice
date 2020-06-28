import React, {useState} from 'react';
import {GlobalContext} from './globalContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const GlobalContextProvider = props => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        authenticated,
        setAuthenticated,
      }}>
      <SafeAreaProvider>{props.children}</SafeAreaProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
