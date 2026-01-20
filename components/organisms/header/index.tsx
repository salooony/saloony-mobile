import { ROUTES } from '@/constants/routes';
import { Colors } from '@/theme/colors';
import { Link } from 'expo-router';
import { Image, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-paper';
import ThemedText from '../../atoms/typography/ThemedText';
import { styles } from './style';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.subContainer} accessibilityRole="button" accessibilityLabel="Open language modal">
                <Icon
                    source="earth"
                    color={Colors.dark.icon}
                    size={22}
                />  
                <ThemedText>{'FR'}</ThemedText>
                <Image
                    source={require('@/assets/icons/buttom-shuffle.png')}
                    style={styles.shuffleIcon}
                />
            </TouchableOpacity>
            <Link style={styles.subContainer} href={ROUTES.HOME} asChild>
                <TouchableOpacity accessibilityRole="button" accessibilityLabel="Go to Home">
                    <Image
                        source={require('@/assets/images/saloony-logo-noir.png')}
                        style={styles.headerImage}
                    />
                </TouchableOpacity>
            </Link>
            <View style={styles.subContainer}>
                <Link href={ROUTES.LOGIN} asChild>
                    <TouchableOpacity accessibilityRole="button" accessibilityLabel="Go to login">
                        <Icon
                            source="account-circle"
                            color={Colors.dark.icon}
                            size={25}
                        />
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}

export default Header;