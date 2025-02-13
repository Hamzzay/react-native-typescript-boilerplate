import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ActivityIndicator, LogBox} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import 'react-native-gesture-handler';
import GlobalFont from 'react-native-global-font';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigator from './src/navigation/index';
import {persistor, store} from './src/redux/store';

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  useEffect(() => {
    let fontName = 'Poppins-Light';
    GlobalFont.applyGlobal(fontName);
    RNBootSplash.hide({fade: true});
  });
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
