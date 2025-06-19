import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-paper';
import { styles } from './style';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.subContainer}>
                <Icon
                    source="earth"
                    color={Colors.dark.icon}
                    size={22}
                />  
                <Text>{'FR'}</Text>
                <Image
                    source={require('@/assets/icons/buttom-shuffle.png')}
                    style={styles.shuffleIcon}
                />
            </View>
            <Link href="/" asChild>
                <TouchableOpacity>
                    <Image
                        source={require('@/assets/images/saloony-logo-noir-png.png')}
                        style={styles.headerImage}
                    />
                </TouchableOpacity>
            </Link>
            <View style={{...styles.subContainer, justifyContent: 'flex-end'}}>
                <Link href="/register" asChild>
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