import { Button } from 'react-native-paper';
import { styles } from './style';

interface CustomButtonProps {
  message: string;
  isSubmitting: boolean;
  mode: 'text' | 'outlined' | 'contained';
  onPress: () => Promise<void> | void;
}
const CustomButton = ({ message, isSubmitting, mode, onPress }: CustomButtonProps) => {
  return (
    <Button
      loading={isSubmitting}
      disabled={isSubmitting}
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
