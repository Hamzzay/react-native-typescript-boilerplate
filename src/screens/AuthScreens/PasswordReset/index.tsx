import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
  GestureResponderEvent
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import Button from '../../../components/CustomButton';
import Header from '../../../components/CustomHeader';
import CustomInputField from '../../../components/CustomInputField';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/index';
import {hp, wp} from '../../../util';
import createStyles from './styles';

function PasswordReset({navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [resetPasswordVisible, setResetPasswordVisible] = useState(true);

  const loginValidationSchema = yup.object().shape({
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
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
              <Text style={styles.headerText}>Reset your password</Text>
              <Text style={styles.headerSubText}>
                Please enter your new password
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
            validateOnBlur={false}
            validateOnChange={false}
            initialValues={{password: '', confirmPassword: ''}}
            onSubmit={values => {
              navigation.navigate('Login');
            }}>
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
                  inputStyle={styles.inputText}
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
                <CustomInputField
                  inputStyle={styles.inputText}
                  inputContainerStyle={styles.inputContainerStyle}
                  placeholder="Confirm Password"
                  numberOfLines={1}
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  secureTextEntry={resetPasswordVisible}
                  onBlur={handleBlur('confirmPassword')}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
                <Button
                  onPress={handleSubmit as unknown as (e: GestureResponderEvent) => void}
                  style={[styles.doneButton, styles.text]}
                  title1="Done"
                />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
}

export default PasswordReset;
