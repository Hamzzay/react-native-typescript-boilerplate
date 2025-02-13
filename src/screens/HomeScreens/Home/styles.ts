import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.color.textWhite,
      flexGrow: 1,
    },

    headerText: {
      fontSize: theme.size.medium,
      color: theme.color.textWhite,
      fontFamily: theme.fontFamily.semiBoldFamily,
      marginLeft: wp(2),
    },

    homeText: {
      fontSize: theme.size.medium,
      color: theme.color.textBlack,
      fontFamily: theme.fontFamily.semiBoldFamily,
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
    headerLogoImage: {width: wp(10), height: hp(7), marginTop: hp(2)},

    headerImage: {
      height: hp(21),
    },

    container: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: wp(2),
      paddingRight: wp(2),
      marginTop: hp(1),
      paddingBottom: hp(10),
      backgroundColor: theme.color.textWhite,
    },
  });
  return styles;
};
export default createStyles;
