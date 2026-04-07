import { Button, IconButton } from 'react-native-paper';
import { Pressable } from 'react-native';
import { getStyles, getIconButtonStyle, Mode, State, baseStyles } from './style';

interface Props {
  label?: string;
  icon?: string;
  mode?: Mode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  isDisabled?: boolean;
  onPress?: () => void;
}

const CustomButton = ({
  label,
  icon,
  mode = 'contained',
  iconPosition = 'left',
  isLoading,
  isDisabled,
  onPress,
}: Props) => {
  const isIconOnly = icon && !label;

  return (
    <Pressable disabled={isDisabled}>
      {({ pressed, hovered }) => {
        const state: State = isDisabled
          ? 'disabled'
          : pressed
            ? 'pressed'
            : hovered
              ? 'hovered'
              : 'default';

        const styles = getStyles(mode, state);

        if (isIconOnly) {
          const iconStyles = getIconButtonStyle(
            styles.backgroundColor,
            styles.borderColor,
            styles.borderWidth,
          );

          return (
            <IconButton
              icon={icon}
              size={24}
              disabled={isDisabled}
              onPress={isDisabled ? undefined : onPress}
              iconColor={styles.textColor}
              style={iconStyles.container}
            />
          );
        }

        return (
          <Button
            mode={mode}
            icon={icon}
            loading={isLoading}
            disabled={false}
            onPress={isDisabled ? undefined : onPress}
            buttonColor={styles.backgroundColor}
            textColor={styles.textColor}
            theme={{
              colors: {
                outline: styles.borderColor,
              },
            }}
            style={[
              baseStyles.base,
              { borderWidth: styles.borderWidth, borderColor: styles.borderColor },
            ]}
            contentStyle={[baseStyles.content, iconPosition === 'right' && baseStyles.rowReverse]}
          >
            {label}
          </Button>
        );
      }}
    </Pressable>
  );
};

export default CustomButton;
