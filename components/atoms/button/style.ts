import { Colors } from '@/theme/colors';
import { StyleSheet, ViewStyle } from 'react-native';

export type Mode = 'contained' | 'outlined' | 'text';
export type State = 'default' | 'hovered' | 'pressed' | 'disabled';

type ButtonStyles = {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  borderWidth: number;
};

export const baseStyles = StyleSheet.create({
  base: {
    height: 51,
    minWidth: 180,
    borderRadius: 25.5,
    justifyContent: 'center',
  },
  iconOnly: {
    width: 51,
    minWidth: 51,
    borderRadius: 999,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconOnlyContent: {
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
});

export function getStyles(mode: Mode, state: State): ButtonStyles {
  const { brand, ui, state: s } = Colors;

  let backgroundColor: string = ui.transparent;
  let textColor: string = brand.primary;
  let borderColor: string = ui.transparent;
  let borderWidth: number = 0;

  if (state === 'disabled') {
    backgroundColor = mode === 'contained' ? s.disabledBg : ui.transparent;
    textColor = mode === 'contained' ? brand.secondary : s.disabledText;
    borderColor = s.disabledBg;
    borderWidth = mode === 'outlined' ? 1 : 0;

    return { backgroundColor, textColor, borderColor, borderWidth };
  }

  if (mode === 'contained') {
    backgroundColor = brand.primary;

    if (state === 'hovered') backgroundColor = s.hoverBg;
    if (state === 'pressed') backgroundColor = brand.tertiary;

    textColor = brand.secondary;
    borderColor = backgroundColor;
    borderWidth = 0;
  }

  if (mode === 'outlined') {
    backgroundColor = state === 'hovered' ? s.outlineHoverBg : ui.transparent;

    textColor = brand.primary;
    borderColor = brand.primary;
    borderWidth = 1;

    if (state === 'pressed') {
      textColor = brand.tertiary;
      borderColor = brand.tertiary;
    }
  }

  if (mode === 'text') {
    textColor = brand.primary;

    if (state === 'pressed') {
      textColor = brand.tertiary;
    }
  }

  return { backgroundColor, textColor, borderColor, borderWidth };
}

export function getIconButtonStyle(
  backgroundColor: string,
  borderColor: string,
  borderWidth: number,
): { container: ViewStyle } {
  return {
    container: {
      width: 51,
      height: 51,
      borderRadius: 999,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor,
      borderWidth,
      borderColor,
    },
  };
}
