import {StyleSheet} from 'react-native';
import {hp, wp} from '../../util';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      flexGrow: 1,
      backgroundColor: theme.color.textWhite,
    },
    drawerHeaderStyle: {
      height: hp(20),
      backgroundColor: theme.color.textLightBlue,
      paddingHorizontal: wp(5),
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      //   alignItems: 'center',
    },
    headerText: {
      fontSize: theme.size.small,
      color: theme.color.textBlack,
      fontFamily: theme.fontFamily.boldFamily,
      // textAlign: 'center',
    },
    drawerContent: {
      flexGrow: 1,
      backgroundColor: theme.color.containerGray,
    },
    drawerText: {
      fontSize: theme.size.xSmall,
      color: theme.color.textBlack,
      marginLeft: -wp(3.5),
      // margin: wp(2),
    },
    iconContainer: {
      width: hp(4),
      height: hp(4),
      justifyContent: 'center',
      borderRadius: hp(1),
      alignItems: 'center',
      marginLeft: wp(1),
      backgroundColor: '#4C8CB5',
      shadowColor: theme.color.textWhite,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    logoutButton: {
      // width: wp(33),
      position: 'absolute',
      padding: wp(3),
      bottom: 0,
      height: hp(6),
      borderRadius: theme.borders.radius4,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: hp(0.01),
      borderColor: theme.color.textLightOrange,
      backgroundColor: theme.color.textLightOrange,
      marginBottom: hp(5),
      marginLeft: wp(2),
      shadowColor: theme.color.textWhite,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    text: {
      fontSize: theme.size.small,
      fontFamily: theme.fontFamily.semiBoldFamily,
      color: theme.color.textWhite,
      paddingLeft: wp(2),
    },
    checkBoxText: {
      fontSize: theme.size.xSmall,
      color: theme.color.textBlack,
      margin: wp(2),
    },
    listButton: {flexDirection: 'row', margin: wp(2)},
  });
  return styles;
};
export default createStyles;
