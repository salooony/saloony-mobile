/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#FFFFFF';
const tintColorDark = '#000000';
const primaryColor = '#AC8D5F';
const secondaryColor = '#FCF7F3';
const tertiaryColor = "#877754"
export const Colors = {
  primary: primaryColor,
  secondary: secondaryColor,
  tertiary: tertiaryColor,
  danger: '#FF0000',
  warning: '#f1c40f',
  success: '#27ae60',
  info: '#2980b9',

  light: {
    text: tintColorLight,
    background: tintColorLight,
    tint: tintColorLight,
    icon: tintColorLight,
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: tintColorDark,
    secondaryText: "#00000073",
    background: tintColorDark,
    secondaryBackground: 'rgba(0, 0, 0, 0.3)',
    tint: tintColorDark,
    icon: tintColorDark,
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
