import { Colors } from '@/theme/colors';
import { Button, type ButtonProps } from 'react-native-paper';

interface CustomButtonProps {
  message: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onPress?: () => Promise<void> | void;
  mode: ButtonProps['mode'];
}

const CustomButton = ({ message, isLoading, isDisabled, mode, onPress }: CustomButtonProps) => {
  return (
    <Button
      testID="submit-button"
      loading={isLoading}
      disabled={isDisabled}
      buttonColor={mode === 'contained' ? Colors.brand.primary : 'transparent'}
      textColor={mode === 'outlined' ? Colors.brand.primary : Colors.brand.secondary}
      mode={mode}
      onPress={onPress}
    >
      {message}
    </Button>
  );
};
export default CustomButton;
