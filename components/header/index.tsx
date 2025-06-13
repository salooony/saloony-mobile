import { Image, Text, View } from 'react-native';
import { Icon } from 'react-native-paper';
import { styles } from './style';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.subContainer}>
                <Icon
                    source="earth"
                    color={'black'}
                    size={22}
                />  
                <Text>{'FR'}</Text>
                <Image
                    source={require('@/assets/icons/buttom-shuffle.png')}
                    style={styles.shuffleIcon}
                />
            </View>
            <Image
                source={require('@/assets/images/saloony-logo-noir-png.png')}
                style={styles.headerImage}
            />
            <View style={{...styles.subContainer, justifyContent: 'flex-end'}}>
                <Icon
                    source="account-circle"
                    color={'black'}
                    size={25}
                />  
            </View>

        </View>
    );
}

export default Header;