import { Button, IconButton } from 'react-native-paper';
import {
  getStyles,
  getIconButtonStyle,
  getButtonContainerStyle,
  Mode,
  State,
  baseStyles,
} from './style';

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
  const isIconOnly = Boolean(icon) && !Boolean(label);

  if (!label && !icon) return null;

  const state: State = isDisabled ? 'disabled' : 'default';
  const styles = getStyles(mode, state);

  const containerStyle = getButtonContainerStyle(
    styles.backgroundColor,
    styles.borderColor,
    styles.borderWidth,
  );

  if (isIconOnly) {
    const iconStyles = getIconButtonStyle(
      styles.backgroundColor,
      styles.borderColor,
      styles.borderWidth,
    );

    return (
      <IconButton
        icon={icon!}
        size={24}
        disabled={isDisabled || isLoading}
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
      disabled={isDisabled || isLoading}
      onPress={isDisabled ? undefined : onPress}
      buttonColor={styles.backgroundColor}
      textColor={styles.textColor}
      theme={{
        colors: {
          outline: styles.borderColor,
        },
      }}
      style={[baseStyles.base, containerStyle]}
      contentStyle={[
        baseStyles.content,
        iconPosition === 'right' && baseStyles.rowReverse,
      ]}
    >
      {label}
    </Button>
  );
};

export default CustomButton;