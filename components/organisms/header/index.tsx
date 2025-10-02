import { Colors } from '@/theme/colors';
import { Link } from 'expo-router';
import { Image, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-paper';
import ThemedText from '../../atoms/typography/ThemedText';
import { styles } from './style';
import { ROUTES } from '@/constants/routes';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.subContainer}>
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
            </View>
            <Link href="/" asChild>
                <TouchableOpacity>
                    <Image
                        source={require('@/assets/images/saloony-logo-noir.png')}
                        style={styles.headerImage}
                    />
                </TouchableOpacity>
            </Link>
            <View style={{...styles.subContainer, justifyContent: 'flex-end'}}>
                <Link href={ROUTES.SIGNUP} asChild>
                    <TouchableOpacity>
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