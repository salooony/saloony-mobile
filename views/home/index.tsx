import Header from '@/components/header/index';
import { useState } from 'react';
import {
    ImageBackground,
    Text,
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
                <Text style={styles.title}>Bienvenue sur Saloony</Text>
                <Text style={styles.subtitle}>
                    Simple . Rapide . Efficace
                </Text>

                <TouchableOpacity style={styles.searchButton}> 
                    <IconButton icon={require('../../assets/icons/filter.png')} />
                    <Text style={styles.searchButtonText}>Commencer</Text>
                    <IconButton icon={require('../../assets/icons/search.png')} />
                </TouchableOpacity>
            </View>
        </View> 
    </ImageBackground>
    );
}

export default Home;