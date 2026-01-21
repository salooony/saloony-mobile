import { Button } from 'react-native-paper';
import { styles } from './style';

interface CustomButtonProps {
  message: string;
  mode: 'text' | 'outlined' | 'contained';
  onPress: () => Promise<void> | void;
  isLoading?: boolean;
}
const CustomButton = ({ message, mode, onPress, isLoading }: CustomButtonProps) => {
  return (
    <Button
      loading={isLoading}
      disabled={isLoading}
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
