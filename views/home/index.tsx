import ThemedText from '@/components/atoms/typography/ThemedText';
import { ROUTES } from '@/constants/routes';
import { UI_STRINGS } from '@/constants/uiStrings';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { styles } from './style';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const router = useRouter();

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  return (
    <ImageBackground
      source={require('@/assets/images/home-page-background.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <ThemedText type="title">{UI_STRINGS.HOME_WELCOME}</ThemedText>
        <ThemedText type="subtitle">{UI_STRINGS.HOME_SUBTITLE}</ThemedText>

        <TouchableOpacity style={styles.searchButton} onPress={() => router.push(ROUTES.SEARCH)}>
          <IconButton icon={require('../../assets/icons/filter.png')} />
          <ThemedText type="buttonText">{UI_STRINGS.HOME_BUTTON}</ThemedText>
          <IconButton icon={require('../../assets/icons/search.png')} />
        </TouchableOpacity>

        <Link href="/storybook">Open Storybook</Link>
      </View>
    </ImageBackground>
  );
};

export default Home;
