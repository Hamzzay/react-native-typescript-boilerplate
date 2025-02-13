import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.color.containerGray,
      flexGrow: 1,
    },
    inputContainer: {
      flexGrow: 1,
      marginTop: hp(3),
    },

    headerImage: {
      height: hp(21),
    },
    headerText: {
      fontSize: theme.size.medium,
      color: theme.color.textWhite,
      fontFamily: theme.fontFamily.boldFamily,
      textAlign: 'center',
      width: wp(100),
      marginVertical: hp(2),
    },
    headerSubText: {
      fontSize: theme.size.xSmall,
      color: theme.color.textWhite,
      alignSelf: 'center',
      marginTop: -hp(1.5),
      textAlign: 'center',
    },
    headerContainerStyle: {
      borderBottomColor: theme.color.headerBackgroundColor,
      backgroundColor: theme.color.headerBackgroundColor,
    },
    headerColor: theme.color.headerBackgroundColor,
    statusBar: {
      backgroundColor: 'transparent',
    },
    container: {
      flexGrow: 1,
      marginTop: hp(0.1),
      paddingHorizontal: wp(2),
      paddingBottom: hp(10),
      backgroundColor: theme.color.containerGray,
      justifyContent: 'space-between',
    },
    inputContainerStyle: {
      borderColor: theme.color.inputBorderColor,
      borderRadius: theme.borders.radius2,

      alignItems: 'center',
      borderWidth: wp(0.2),
      backgroundColor: theme.color.textWhite,
      borderBottomWidth: wp(0.2),
      paddingHorizontal: wp(4),
      shadowColor: theme.color.headerBackgroundColor,
      shadowOffset: {
        width: 1,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,

      elevation: 15,
    },

    termsButton: {
      width: hp(100),
      height: hp(5),
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      backgroundColor: theme.color.containerGray,
    },

    loggingText: {
      fontSize: theme.size.small,
      fontFamily: theme.fontFamily.regularFamily,
      alignSelf: 'center',
    },
    termsAndConditionText: {
      fontSize: theme.size.xSmall,
      fontFamily: theme.fontFamily.regularFamily,
      alignSelf: 'center',
      width: wp(80),
    },
    textFieldTitle: {
      fontSize: theme.size.medium,
      textAlign: 'left',
      paddingLeft: wp(1.5),
      fontFamily: theme.fontFamily.boldFamily,
    },
    loginInputText: {
      fontSize: theme.size.xsmall,
      fontFamily: theme.fontFamily.mediumFamily,
    },
    signupSubText: {
      fontSize: theme.size.xsmall,
      alignSelf: 'center',
      marginTop: -hp(1.5),
    },

    loginText: {
      fontSize: theme.size.small,
      fontFamily: theme.fontFamily.boldFamily,
      color: theme.color.headerBackgroundColor,
    },

    loginButton: {
      width: wp(90),
      height: hp(6.5),
      borderRadius: theme.borders.radius4,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: hp(0.01),
      borderColor: theme.color.textWhite,
      backgroundColor: theme.color.textBlack,
    },
    text: {
      fontSize: theme.size.small,
      fontFamily: theme.fontFamily.semiBoldFamily,
      color: theme.color.textWhite,
    },
    errorText: {
      fontSize: theme.size.xsmall,
      color: theme.color.textRed,
      marginHorizontal: wp(3),
      marginTop: -hp(2.5),
    },

    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: hp(3),
      // marginTop: -hp(0.5),
      marginLeft: wp(1),
    },
    checkbox: {
      alignSelf: 'center',
    },
  });
  return styles;
};
export default createStyles;
