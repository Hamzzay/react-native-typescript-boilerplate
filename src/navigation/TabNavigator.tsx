import {useKeyboard} from '@react-native-community/hooks';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeSvg from '../../assets/icons/HomeSvg.svg';
import Home from '../screens/HomeScreens/Home';
import {useThemeAwareObject} from '../theme';
import {hp, wp} from '../util';
const Tab = createBottomTabNavigator();

const TabNavigator = ({route}) => {
  const keyboard = useKeyboard();
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      tabBar: {
        padding: wp(4),
        flexDirection: 'row',
        width: wp(100),
        height: hp(7),
        backgroundColor: 'white',
        justifyContent: 'space-around',
        borderTopRightRadius: hp(3),
        borderTopLeftRadius: hp(3),
        paddingHorizontal: wp(5),
        borderWidth: 0.4,
        borderColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 10,
        position: 'absolute',
        bottom: keyboard.keyboardShown ? -1000 : 0,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true, // keyboardHidesTabBar: true,
          tabBarStyle: styles.tabBar,
          tabBarAllowFontScaling: false,
          tabBarInactiveBackgroundColor: 'transparent',
          tabBarInactiveTintColor: 'transparent',
          unmountOnBlur: true,
        }}
        backBehavior="initialRoute">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarInactiveBackgroundColor: 'transparent',
            tabBarInactiveTintColor: 'transparent',
            tabBarIcon: ({focused}) => (focused ? <HomeSvg /> : <HomeSvg />),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;
