import 'react-native-reanimated';

import AuthBootstrap from '@/components/organisms/auth-bootstrap';
import Header from '@/components/organisms/header';
import { store } from '@/store/store';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Asset } from 'expo-asset';
import { useFonts } from 'expo-font';
import { Stack, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-redux';

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const [assetsLoaded, setAssetsLoaded] = useState<boolean>(false);
  const [loaded] = useFonts({
    Inter: require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
  });

  const segment = useSegments();
  const isStorybookRoute = (segment?.[0] as string) === 'storybook';

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
    <Provider store={store}>
<<<<<<< HEAD
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <>
=======
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
>>>>>>> 0268274 (fix: code review)
          <AuthBootstrap />
          {!isStorybookRoute && <Header />}
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            {/* Storybook route - dev only */}
            <Stack.Protected guard={__DEV__}>
              <Stack.Screen name="storybook" />
            </Stack.Protected>
          </Stack>
          <StatusBar style="auto" />
<<<<<<< HEAD
        </>
      </ThemeProvider>
=======
        </ThemeProvider>
      </QueryClientProvider>
>>>>>>> 0268274 (fix: code review)
    </Provider>
  );
};

export default RootLayout;