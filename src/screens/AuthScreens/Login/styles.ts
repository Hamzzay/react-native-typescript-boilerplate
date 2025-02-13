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
    headerText: {
      fontSize: theme.size.medium,
      color: theme.color.textWhite,
      fontFamily: theme.fontFamily.boldFamily,
      textAlign: 'center',
      marginVertical: hp(2),
    },
    headerContainerStyle: {
      borderBottomColor: theme.color.headerBackgroundColor,
      backgroundColor: theme.color.headerBackgroundColor,
    },
    headerColor: theme.color.headerBackgroundColor,
    statusBar: {
      backgroundColor: 'transparent',
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
    container: {
      flexGrow: 1,
      marginTop: hp(0.1),
      paddingHorizontal: wp(2),
      paddingBottom: hp(10),
      backgroundColor: theme.color.containerGray,
      justifyContent: 'space-between',
    },
    loginText: {
      fontSize: hp(3.5),
      fontFamily: theme.fontFamily.boldFamily,
      paddingVertical: hp(2),
      alignSelf: 'center',
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
      // backgroundColor: theme.color.dividerColor,
      backgroundColor: theme.color.containerGray,
    },
    signUpButton: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    bottomText: {
      fontSize: theme.size.small,
      fontFamily: theme.fontFamily.regularFamily,
      alignSelf: 'center',
    },
    textFieldTitle: {
      fontSize: theme.size.medium,
      textAlign: 'left',
      paddingLeft: wp(1.5),
      fontFamily: theme.fontFamily.boldFamily,
    },
    loginInputText: {
      fontSize: theme.size.small,
      fontFamily: theme.fontFamily.mediumFamily,
    },
    headerSubText: {
      fontSize: theme.size.xSmall,
      color: theme.color.textWhite,
      alignSelf: 'center',
      marginTop: -hp(1.5),
      textAlign: 'center',
    },

    signUpButtonText: {
      fontSize: theme.size.small,
      fontFamily: theme.fontFamily.boldFamily,
      color: theme.color.headerBackgroundColor,
    },

    headerImage: {
      height: hp(21),
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
      fontSize: theme.size.xSmall,
      color: theme.color.textRed,
      marginHorizontal: wp(3),
      marginTop: -hp(2.5),
    },
    forgotPasswordText: {
      fontSize: theme.size.small,
      alignSelf: 'flex-end',
      paddingLeft: wp(1.5),
      color: theme.color.textRed,
      fontFamily: theme.fontFamily.regularFamily,
      marginBottom: hp(3.5),
      marginRight: hp(1),
    },
    dashStyle: {
      fontSize: theme.size.medium,
      color: theme.color.dividerColor,
      alignSelf: 'center',
      marginTop: hp(2),
      marginBottom: hp(2),
    },
  });
  return styles;
};
export default createStyles;
