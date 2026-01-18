import Header from '@/components/organisms/header';
import SettingsSidebar from '@/components/organisms/settings-sidebar';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Asset } from 'expo-asset';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import 'react-native-reanimated';
import { Provider as PaperProvider } from 'react-native-paper';

const queryClient = new QueryClient();

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const [assetsLoaded, setAssetsLoaded] = useState<boolean>(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <PaperProvider>
          <>
          <Header sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />
          <SettingsSidebar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />

          <Slot />
          <StatusBar style="auto" />
        </>
        </PaperProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
export default RootLayout;
