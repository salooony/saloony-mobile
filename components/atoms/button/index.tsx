import { Button } from 'react-native-paper';

interface CustomButtonProps {
  message: string;
  isSubmitting: boolean;
  mode: 'text' | 'outlined' | 'contained' | 'contained-tonal' | 'elevated';
  onPress: () => Promise<void> | void;
  disabled?: boolean;
}
const CustomButton = ({
  message,
  isSubmitting,
  mode,
  onPress,
  disabled = false,
}: CustomButtonProps) => {
  const isDisabled = isSubmitting || disabled;

  return (
    <Button
      loading={isSubmitting}
      disabled={isDisabled}
      mode={mode}
      onPress={onPress}
    >
      {message}
    </Button>
  );
};
export default CustomButton;
