import { Button } from 'react-native-paper';
import { styles } from './style';

interface CustomButtonProps {
  message: string;
  isSubmitting: boolean;
  mode: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
  isLoading?: boolean;
  onPress: () => Promise<void> | void;
}
const CustomButton = ({ message,disabled, isLoading, mode, onPress }: CustomButtonProps) => {
  return (
    <Button
      loading={isLoading}
      disabled={disabled}
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
