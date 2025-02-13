import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  View,
  GestureResponderEvent,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import Button from '../../../components/CustomButton';
import Header from '../../../components/CustomHeader';
import CustomInputField from '../../../components/CustomInputField';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/index';
import {hp} from '../../../util';
import createStyles from './styles';

function CreateAccount({navigation}) {
  const dispatch = useDispatch();
  const styles = useThemeAwareObject(createStyles);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);
  const [isSelected, setSelection] = useState(false);
  const loginValidationSchema = yup.object().shape({
    fullName: yup.string().required('Name is Required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is required'),

    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password')], 'Passwords do not match'),
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
          centerComponent={
            <View style={{marginTop: hp(2)}}>
              <Text style={styles.headerText}>Create your Account</Text>
              <Text style={styles.headerSubText}>
                Please create your account here
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
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={values => {
            if (isSelected) {
              navigation.navigate('Login');
            } else {
              Snackbar.show({
                text: 'Please accept terms and conditions',
                duration: Snackbar.LENGTH_SHORT,
              });
            }
          }}>
          {({handleChange, handleSubmit, values, errors, touched}) => (
            <View style={styles.inputContainer}>
              <CustomInputField
                inputStyle={styles.loginInputText}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Name"
                numberOfLines={1}
                value={values.fullName}
                onChangeText={handleChange('fullName')}
              />
              {errors.fullName && touched.fullName && (
                <Text style={styles.errorText}>{errors.fullName}</Text>
              )}
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
              <CustomInputField
                inputStyle={styles.loginInputText}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Password"
                numberOfLines={1}
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry={passwordVisible}
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <CustomInputField
                inputStyle={styles.loginInputText}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Confirm Password"
                numberOfLines={1}
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                secureTextEntry={confirmPasswordVisible}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
                  tintColors={{true: 'black', false: 'black'}}
                />
                <Text style={styles.termsAndConditionText}>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly
                </Text>
              </View>

              <Button
                onPress={
                  handleSubmit as unknown as (e: GestureResponderEvent) => void
                }
                style={[styles.loginButton, styles.text]}
                title1="Register"
              />
            </View>
          )}
        </Formik>

        <View style={styles.termsButton}>
          <Text style={styles.loggingText}>Already have an account? </Text>
          <Button
            style={[styles.createButton, styles.loginText]}
            title1="Login"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default CreateAccount;
