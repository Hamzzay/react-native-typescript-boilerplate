import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
} from 'react-native-confirmation-code-field';
import {useThemeAwareObject} from '../theme';
import {hp, wp} from '../util';
import Text from './CustomText';

const CELL_COUNT = 4;

const codeVerification = ({verifyCode, props}) => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      root: {width: wp(90)},
      cell: {
        width: wp(17),
        height: wp(15),
        lineHeight: wp(13),
        marginRight: wp(2),
        borderRadius: theme.borders.radius2,
        fontSize: theme.size.large,
        fontFamily: theme.fontFamily.semiBoldFamily,
        color: theme.color.textBlack,
        borderWidth: 2,
        borderColor: theme.color.inputBorderColor,
        textAlign: 'center',
      },
      focusCell: {
        borderColor: theme.color.headerBackgroundColor,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={input => {
          setValue(input);
          verifyCode(input);
        }}
        cellCount={CELL_COUNT}
        keyboardType={'number-pad'}
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default codeVerification;
