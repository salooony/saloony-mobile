import Header from '@/components/header/index';
import { ThemedText } from '@/components/ui/text/ThemedText';
import { useState } from 'react';
import {
    ImageBackground,
    TouchableOpacity,
    View
} from 'react-native';
import { IconButton } from 'react-native-paper';
import { styles } from './style';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = () => {
        // Implement search functionality here
        console.log('Searching for:', searchQuery);
    };

    return (
    <ImageBackground
      source={require('../../assets/images/home-page-background.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
        <View style={styles.container}>
            <Header /> 
            <View style={styles.searchContainer}>
                <ThemedText type='title'>Bienvenue sur Saloony</ThemedText>
                <ThemedText type='subtitle'>
                    {'Simple • Rapide • Efficace'}
                </ThemedText>

                <TouchableOpacity style={styles.searchButton}> 
                    <IconButton icon={require('../../assets/icons/filter.png')} />
                    <ThemedText type="buttonText">Commencer</ThemedText>
                    <IconButton icon={require('../../assets/icons/search.png')} />
                </TouchableOpacity>
            </View>
        </View> 
    </ImageBackground>
    );
}

export default Home;