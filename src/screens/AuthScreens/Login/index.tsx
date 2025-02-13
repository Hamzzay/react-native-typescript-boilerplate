import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
  GestureResponderEvent
} from 'react-native';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import Button from '../../../components/CustomButton';
import Header from '../../../components/CustomHeader';
import CustomInputField from '../../../components/CustomInputField';
import Text from '../../../components/CustomText';
import {onLogin} from '../../../redux/slices/userSlice';
import {useThemeAwareObject} from '../../../theme/index';
import {hp} from '../../../util/index';
import createStyles from './styles';
function Login({navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(true);

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is required'),
    password: yup
      .string()
      // .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
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
              <Text style={styles.headerText}>Welcome Back!</Text>
              <Text style={styles.headerSubText}>
                Please enter your account here
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
            initialValues={{email: '', password: ''}}
            onSubmit={values => {
              dispatch(onLogin(true));
            }}
            validateOnChange={false}
            validateOnBlur={false}>
            {({
              handleChange,
              handleSubmit,
              handleBlur,
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
                  onBlur={handleBlur('email')}
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
                  onBlur={handleBlur('password')}
                />
                {errors.password && touched.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('PasswordRecovery');
                  }}>
                  <Text style={styles.forgotPasswordText}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
                <Button
                  onPress={handleSubmit as unknown as (e: GestureResponderEvent) => void}
                  style={[styles.loginButton, styles.text]}
                  title1="Login"
                />
              </View>
            )}
          </Formik>
        </View>

        <View style={styles.termsButton}>
          <Text style={styles.bottomText}>Don't have any account? </Text>
          <Button
            style={[styles.signUpButton, styles.signUpButtonText]}
            title1="Sign Up"
            onPress={() => navigation.navigate('CreateAccount')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default Login;
