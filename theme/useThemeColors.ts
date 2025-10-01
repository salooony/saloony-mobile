import { useColorScheme } from 'react-native';
import { Colors } from './colors';

export const useThemeColors = () => {
  const scheme = useColorScheme(); // 'light' | 'dark' | null
  return scheme === 'dark' ? Colors.dark : Colors.light;
};
