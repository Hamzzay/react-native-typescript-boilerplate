import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import Code from '../../../components/CodeVerification';
import Button from '../../../components/CustomButton';
import Header from '../../../components/CustomHeader';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';
import {hp, wp} from '../../../util';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function ForgotPassword({navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const [otpValue, setOtpValue] = useState('');

  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 5000);

    return () => {
      clearInterval(myInterval);
    };
  }, [minutes, seconds]);

  function verifyCode(value:string) {
    setOtpValue(value);
  }

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.headerImage}
        source={require('../../../../assets/images/headerBackgroundImage.png')}
        resizeMode={'stretch'}>
        <Header
          placement={'center'}
          barStyle={'light-content'}
          containerStyle={styles.headerContainerStyle}
          backgroundColor={styles.headerColor}
          statusbar={styles.statusBar}
          leftComponent={
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => {
                navigation.goBack();
              }}>
              <MaterialIcons
                name={'arrow-back-ios'}
                size={wp(6)}
                color={'white'}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </TouchableOpacity>
          }
          centerComponent={
            <View style={{marginTop: hp(2)}}>
              <Text style={styles.headerText}>Check your email</Text>
              <Text style={styles.headerSubText}>Code sent to your email</Text>
            </View>
          }
        />
      </ImageBackground>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always">
        <View>
          <View style={styles.optContainer}>
            <Code verifyCode={(value: any) => verifyCode(value)} props={undefined} />
            {(minutes > 0 || seconds > 0) && (
              <Text style={styles.resend}>
                Code expires in :
                <Text style={styles.timerCount}>
                  {`0${minutes}`}:{seconds < 10 ? `0${seconds}` : seconds}
                </Text>
              </Text>
            )}
            <View>
              <Button
                onPress={() => navigation.navigate('PasswordReset')}
                style={[
                  minutes > 0 || seconds > 0
                    ? styles.verifyButton
                    : styles.sendButton,
                  minutes > 0 || seconds > 0 ? styles.text : styles.sendText,
                ]}
                title1="Next"
              />
              <Button
                onPress={() => {
                  setMinutes(4);
                  setSeconds(59);
                }}
                style={[
                  minutes > 0 || seconds > 0
                    ? styles.sendButton
                    : styles.verifyButton,
                  minutes > 0 || seconds > 0 ? styles.sendText : styles.text,
                ]}
                title1="Send again"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default ForgotPassword;
