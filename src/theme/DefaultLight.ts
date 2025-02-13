import {borders, colors, fontsSize, fonts} from '../constants/index';

const DEFAULT_LIGHT_COLOR_THEME = {
  backgroundColor: colors.white,
  headerBackgroundColor: colors.orange,
  textWhite: colors.white,
  textBlack: colors.black,
  textRed: colors.red,
  avatarColor: colors.darkGray,
  dividerColor: colors.lightGray,
  tabColor: colors.blue,
  textGreen: colors.green,
  textLightOrange: colors.lightOrange,
  textGray: colors.gray,
  containerGray: colors.containerGray,
  inputBorderColor: colors.inputBorderColor,
  textParrotGreen: colors.parrotGreen,
  AccountInputColor: colors.accountInputColor,
};

const FONT_SET = {
  size: {
    xSmall: fontsSize.extraSmall,
    small: fontsSize.small,
    medium: fontsSize.medium,
    large: fontsSize.large,
    xLarge: fontsSize.extraLarge,
  },
};
const FONT_FAMILY = {
  lightFamily: fonts.fontFamilyLight,
  boldFamily: fonts.fontFamilyBold,
  semiBoldFamily: fonts.fontFamilySemiBold,
  mediumFamily: fonts.fontFamilyMedium,
  regularFamily: fonts.fontFamilyRegular,
};

const BORDER_RADIUS = {
  radius1: borders.buttonBorder,
  radius2: borders.inputRadius,
  radius3: borders.headerRadius,
  radius4: borders.circleRadius,
};

export const DEFAULT_LIGHT_THEME_ID = 'default-light';

export const DEFAULT_LIGHT_THEME = {
  id: DEFAULT_LIGHT_THEME_ID,
  color: DEFAULT_LIGHT_COLOR_THEME,
  size: FONT_SET.size,
  borders: BORDER_RADIUS,
  fontFamily: FONT_FAMILY,
};
