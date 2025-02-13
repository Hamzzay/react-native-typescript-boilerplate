import { useKeyboard } from '@react-native-community/hooks';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { I18nManager, TouchableOpacity, View } from 'react-native';
import { Avatar, List, RadioButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import LogoutSvg from '../../../assets/icons/logoytSvg.svg';
import Button from '../../components/CustomButton';
import Text from '../../components/CustomText';
import { onLogin } from '../../redux/slices/userSlice';
import { useThemeAwareObject } from '../../theme/index';
import RNRestart from 'react-native-restart'; // Import package from node modules
import createStyles from './styles';
const CustomDrawer = ({navigation}) => {
  const [checked, setChecked] = React.useState('first');
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const styles = useThemeAwareObject(createStyles);
  const keyboard = useKeyboard();
  useEffect(() => {
    if (i18n.language === 'en') setChecked('first');
    else if (i18n.language === 'es') setChecked('second');
    else if (i18n.language === 'de') setChecked('third');
  }, []);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.drawerHeaderStyle}>
        <Text style={styles.headerText}>Hello John Doe</Text>

        <Avatar.Image
          source={{
            uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
          }}
          size={50}
        />
      </View>
      <DrawerContentScrollView style={styles.drawerContent}>
        <View>
          <DrawerItem
            icon={({size}) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={'black'}
                size={size}
              />
            )}
            label={t('Home')}
            activeTintColor="black"
            activeBackgroundColor="rgba(0, 0, 0, .04)"
            inactiveTintColor="rgba(0, 0, 0, .87)"
            inactiveBackgroundColor="transparent"
            labelStyle={styles.drawerText}
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
          <DrawerItem
            icon={({size}) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={'black'}
                size={size}
              />
            )}
            label={t('Profile')}
            activeTintColor="#2196f3"
            activeBackgroundColor="rgba(0, 0, 0, .04)"
            inactiveTintColor="rgba(0, 0, 0, .87)"
            inactiveBackgroundColor="transparent"
            labelStyle={styles.drawerText}
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
        <List.Accordion
          title={<Text style={styles.headerText}>{t('Languages')} </Text>}>
          <TouchableOpacity
            onPress={() => {
              setChecked('first');
              i18n.changeLanguage('en').then(() => {
                I18nManager.forceRTL(false);
                if (I18nManager.isRTL) RNRestart.Restart();
              });
            }} //Here I change the language to "en" English
            style={styles.listButton}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('first');
                i18n.changeLanguage('en').then(() => {
                  I18nManager.forceRTL(false);
                  if (I18nManager.isRTL) RNRestart.Restart();
                });
              }}
              color="gray"
            />
            <Text style={styles.checkBoxText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setChecked('second');
              i18n.changeLanguage('es').then(() => {
                if (I18nManager.isRTL === false) {
                  I18nManager.forceRTL(true);
                  RNRestart.Restart();
                }
              });
            }} //Here I change the language to "es" Spanish
            style={styles.listButton}>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('second');
                i18n.changeLanguage('es').then(() => {
                  if (I18nManager.isRTL === false) {
                    I18nManager.forceRTL(true);
                    RNRestart.Restart();
                  }
                });
              }}
              color="gray"
            />
            <Text style={styles.checkBoxText}>Spanish</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setChecked('third');
              i18n.changeLanguage('de').then(() => {
                I18nManager.forceRTL(false);
                if (I18nManager.isRTL) RNRestart.Restart();
              });
            }} //Here I change the language to "de" German
            style={styles.listButton}>
            <RadioButton
              value="third"
              status={checked === 'third' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('third');
                i18n.changeLanguage('de').then(() => {
                  I18nManager.forceRTL(false);
                  if (I18nManager.isRTL) RNRestart.Restart();
                });
              }}
              color="gray"
            />
            <Text style={styles.checkBoxText}>German</Text>
          </TouchableOpacity>
        </List.Accordion>
      </DrawerContentScrollView>
      <Button
        style={[
          [
            styles.logoutButton,
            {
              bottom: keyboard.keyboardShown ? -1000 : 0,
            },
          ],
          null,
          styles.text,
        ]}
        title1={<LogoutSvg />}
        title2={t('Logout')}
        onPress={() => dispatch(onLogin(false))}
      />
    </View>
  );
};
export default CustomDrawer;
