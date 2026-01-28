import AuthBootstrap from '@/components/organisms/auth-bootstrap';
import Header from '@/components/organisms/header';
import { ROUTES } from '@/constants/routes';
import { store } from '@/store/store';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Asset } from 'expo-asset';
import { useFonts } from 'expo-font';
import { Slot, usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
<<<<<<< HEAD
import { Provider } from 'react-redux';

const queryClient = new QueryClient();
=======
import 'react-native-reanimated';
import { Provider } from 'react-redux';
>>>>>>> 3913ab3 (feature/SALOONY-017-search-result-for-saloons)

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const [assetsLoaded, setAssetsLoaded] = useState<boolean>(false);
  const [loaded] = useFonts({
    Inter: require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
  });
  const pathname = usePathname();
  const hideHeaderRoutes: string[] = [ROUTES.SEARCH, ROUTES.SEARCH_CITY];
  const shouldShowHeader = !hideHeaderRoutes.includes(pathname);

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
    return null;
  }

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <AuthBootstrap />
          {shouldShowHeader && <Header />}
          <Slot />
          <StatusBar style="auto" />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default RootLayout;
