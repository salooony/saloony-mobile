import AuthBootstrap from '@/components/organisms/auth-bootstrap';
import Header from '@/components/organisms/header';
import SettingsSidebar from '@/components/organisms/settings-sidebar';
import { ROUTES } from '@/constants/routes';
import { store } from '@/store/store';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Asset } from 'expo-asset';
import { useFonts } from 'expo-font';
import { Stack, usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const [assetsLoaded, setAssetsLoaded] = useState<boolean>(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
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
    return null; // Or a splash component
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <PaperProvider>
          <AuthBootstrap />
          {shouldShowHeader && (
            <Header sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />
          )}
          <SettingsSidebar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            {/* Storybook route - dev only */}
            <Stack.Protected guard={__DEV__}>
              <Stack.Screen name="storybook" />
            </Stack.Protected>
          </Stack>
          <StatusBar style="auto" />
        </PaperProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default RootLayout;
