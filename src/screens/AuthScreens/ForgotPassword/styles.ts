import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.color.textWhite,
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
      // width: wp(55),
    },
    headerImage: {
      height: hp(21),
    },

    headerInitialText: {
      alignSelf: 'center',
      fontSize: hp(3),
      color: theme.color.textBlack,
      fontFamily: theme.fontFamily.boldFamily,
    },
    subContainer: {
      height: hp(12),
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: wp(2),
      alignItems: 'center',
      paddingBottom: hp(2),
    },
    timerCount: {
      color: theme.color.textRed,
      fontFamily: theme.fontFamily.regularFamily,
    },
    container: {
      flexGrow: 1,
      paddingHorizontal: wp(2),
      paddingRight: wp(2),
      paddingBottom: hp(10),
      backgroundColor: theme.color.textWhite,
      justifyContent: 'space-between',
    },

    dashStyle: {
      fontSize: theme.size.medium,
      color: theme.color.dividerColor,
      alignSelf: 'center',
      marginTop: hp(2),
      marginBottom: hp(2),
    },

    iconContainer: {
      width: hp(4),
      height: hp(4),
      justifyContent: 'center',
      borderRadius: hp(1),
      alignItems: 'center',
      marginLeft: wp(1),
    },
    loginSubText: {
      fontSize: theme.size.small,
      alignSelf: 'center',
      textAlign: 'center',
    },
    otpView: {
      width: '80%',
      height: hp(20),
      color: theme.color.textBlack,
    },
    borderStyleHighLighted: {
      borderColor: 'black',
      color: theme.color.textBlack,
    },

    underlineStyleHighLighted: {
      borderColor: 'black',
      color: theme.color.textBlack,
    },
    underlineStyleBase: {
      width: wp(10),
      height: hp(10),
      fontSize: theme.size.large,
      borderWidth: 0,
      borderBottomWidth: 1,
      color: 'black',
    },
    optContainer: {
      flexGrow: 1,
      alignSelf: 'center',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: hp(5),
      height: hp(30),
    },
    resendText: {
      fontSize: theme.size.medium,
      // alignSelf: 'flex-end',
      paddingLeft: wp(1.5),
      fontFamily: theme.fontFamily.boldFamily,
      textDecorationLine: 'underline',
      marginBottom: hp(3.5),
    },
    resend: {
      fontSize: theme.size.xSmall,
      alignSelf: 'center',
      paddingLeft: wp(1.5),
      fontFamily: theme.fontFamily.mediumFamily,
      marginBottom: hp(3),
      marginTop: hp(5.5),
    },
    verifyButton: {
      width: hp(46),
      height: hp(6.5),
      borderRadius: theme.borders.radius4,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: hp(0.01),
      marginTop: hp(2),

      borderColor: theme.color.textWhite,
      backgroundColor: theme.color.textBlack,
    },
    sendButton: {
      width: hp(46),
      height: hp(6.5),
      borderRadius: theme.borders.radius4,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: hp(0.01),
      borderWidth: hp(0.1),
      marginTop: hp(2),
      borderColor: theme.color.dividerColor,
      backgroundColor: theme.color.textWhite,
    },
    text: {
      fontSize: theme.size.small,
      fontFamily: theme.fontFamily.semiBoldFamily,
      color: theme.color.textWhite,
    },
    sendText: {
      fontSize: theme.size.small,
      fontFamily: theme.fontFamily.semiBoldFamily,
      color: theme.color.dividerColor,
    },
  });
  return styles;
};
export default createStyles;
