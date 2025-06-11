import { Image, View } from 'react-native';
import { Icon } from 'react-native-paper';
import { styles } from './style';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Icon
                source="account-circle"
                color={'black'}
                size={22}
            />  
            <Image
                source={require('@/assets/images/saloony-logo-noir-png.png')}
                style={styles.headerImage}
            />
            <Icon
                source="account-circle"
                color={'black'}
                size={22}
            />  
        </View>
    );
}

export default Header;