import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React, {Suspense} from 'react';
import {useSelector} from 'react-redux';
import CreateAccount from '../screens/AuthScreens/CreateAccount';
import ForgotPassword from '../screens/AuthScreens/ForgotPassword';
import Login from '../screens/AuthScreens/Login';
import PasswordRecovery from '../screens/AuthScreens/PasswordRecovery';
import PasswordReset from '../screens/AuthScreens/PasswordReset';
import CustomDrawer from './CustomDrawer';
import TabNavigator from './TabNavigator';

const AuthStack = createNativeStackNavigator();
const AppDrawer = createDrawerNavigator();

const AuthNavigator = () => {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <AuthStack.Navigator
      initialRouteName="AuthStack"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={'Login'} component={Login} />
      <AuthStack.Screen name={'CreateAccount'} component={CreateAccount} />
      <AuthStack.Screen name={'ForgotPassword'} component={ForgotPassword} />
      <AuthStack.Screen
        name={'PasswordRecovery'}
        component={PasswordRecovery}
      />
      <AuthStack.Screen name={'PasswordReset'} component={PasswordReset} />
    </AuthStack.Navigator>
  );
};

const LoggedInNavigator = () => {
  return (
    <AppDrawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <AppDrawer.Screen name={'TabNavigator'} component={TabNavigator} />
    </AppDrawer.Navigator>
  );
};
const App = () => {
  const isLogin = useSelector(
    (state: {
      user: {
        isLogin: boolean;
      };
    }) => state.user.isLogin,
  );
  return (
    <>
      {isLogin ? (
        <Suspense>
          <LoggedInNavigator />
        </Suspense>
      ) : (
        <AuthNavigator />
      )}
    </>
  );
};

export default App;
