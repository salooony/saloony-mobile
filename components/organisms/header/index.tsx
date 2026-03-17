import { logoIcon } from '@/constants/icons';
import { LANGUAGE } from '@/constants/languages';
import { ROUTES } from '@/constants/routes';
import { Colors } from '@/theme/colors';
import { Link } from 'expo-router';
import { Image, ImageSourcePropType, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import ThemedText from '../../atoms/typography/ThemedText';
import { styles } from './style';
const Header = ({ setSidebarVisible, sidebarVisible }: any) => {
  return (
    <SafeAreaView edges={['top']}>
      <View style={styles.headerContainer}>
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={() => setSidebarVisible(true)}>
            <Icon source="menu" size={24} color={Colors.dark.icon} />
          </TouchableOpacity>
        </View>
        <Link href={ROUTES.HOME} asChild>
          <TouchableOpacity>
            <Image source={logoIcon as ImageSourcePropType} style={styles.headerImage} />
          </TouchableOpacity>
        </Link>
        <View style={{ ...styles.subContainer }}>
          <Link href={ROUTES.LOGIN} asChild>
            <TouchableOpacity>
              <Icon source="account-circle" color={Colors.dark.icon} size={25} />
            </TouchableOpacity>
          </Link>
          <ThemedText>{LANGUAGE.FRENCH}</ThemedText>
          <Image source={require('@/assets/icons/buttom-shuffle.png')} style={styles.shuffleIcon} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
