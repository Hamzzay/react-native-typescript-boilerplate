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
      width: wp(100),
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
      borderBottomColor: theme.color.inputBorderColor,
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
      backgroundColor: theme.color.textWhite,
      justifyContent: 'space-between',
    },

    textFieldTitle: {
      fontSize: theme.size.medium,
      textAlign: 'left',
      paddingLeft: wp(1.5),
      fontFamily: theme.fontFamily.boldFamily,
    },
    inputText: {
      fontSize: theme.size.small,
      fontFamily: theme.fontFamily.mediumFamily,
    },
    headerSubText: {
      fontSize: theme.size.xSmall,
      color: theme.color.textWhite,
      alignSelf: 'center',
      textAlign: 'center',
      width: wp(60),
      marginTop: -hp(1.5),
    },

    headerImage: {
      height: hp(21),
    },
    doneButton: {
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
  });
  return styles;
};
export default createStyles;
