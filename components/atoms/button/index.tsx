import { Button } from 'react-native-paper';
import { styles } from './style';

interface CustomButtonProps {
  message: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onPress?: () => Promise<void> | void;
  mode: 'text' | 'outlined' | 'contained';
}

const CustomButton = ({ message, isLoading, isDisabled, mode, onPress }: CustomButtonProps) => {
  return (
    <Button
      testID="submit-button"
      loading={isLoading}
      disabled={isDisabled}
      mode={mode}
      onPress={onPress}
      style={styles.button}
      labelStyle={styles.label}
    >
      {message}
    </Button>
  );
};
export default CustomButton;
