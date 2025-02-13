import {Formik} from 'formik';
import React from 'react';
import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
  GestureResponderEvent
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as yup from 'yup';
import Button from '../../../components/CustomButton';
import Header from '../../../components/CustomHeader';
import CustomInputField from '../../../components/CustomInputField';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/index';
import {hp, wp} from '../../../util';
import createStyles from './styles';

function PasswordRecovery({navigation}) {
  const styles = useThemeAwareObject(createStyles);

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is required'),
  });

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
              <Text style={styles.headerText}>Password recovery</Text>
              <Text style={styles.headerSubText}>
                Enter email to recover password
              </Text>
            </View>
          }
        />
      </ImageBackground>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always">
        <View style={{paddingVertical: 2}}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{email: ''}}
            onSubmit={values => {
              navigation.navigate('ForgotPassword');
            }}>
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <View style={styles.inputContainer}>
                <CustomInputField
                  inputStyle={styles.loginInputText}
                  inputContainerStyle={styles.inputContainerStyle}
                  placeholder="Email Address"
                  numberOfLines={1}
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                <Button
                  onPress={handleSubmit as unknown as (e: GestureResponderEvent) => void}
                  style={[styles.loginButton, styles.text]}
                  title1="Send link"
                />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
}

export default PasswordRecovery;
