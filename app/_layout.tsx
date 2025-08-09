import Header from '@/components/organisms/header';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Asset } from 'expo-asset';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import 'react-native-reanimated';

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const [assetsLoaded, setAssetsLoaded] = useState<boolean>(false);
  const [loaded] = useFonts({
    Inter: require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
  });

  useEffect(() => {
    async function preload() {
      try {
        await Asset.loadAsync([
          require('@/assets/images/home-page-background.jpg'),
          require('@/assets/icons/filter.png'),
          require('@/assets/icons/search.png'),
        ]); 
      } catch (e) {
        console.warn('Error preloading image:', e);
      } finally {
        setAssetsLoaded(true);
        await SplashScreen.hideAsync();
      }
    }

    preload();
  }, []);

  if (!loaded || !assetsLoaded) {
    return null; // Or a splash component
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <>
        <Header />
        <Slot />
        <StatusBar style="auto" />
      </>
    </ThemeProvider>
  );
}
export default RootLayout;