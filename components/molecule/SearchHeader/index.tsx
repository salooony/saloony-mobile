import ThemedText from '@/components/atoms/typography/ThemedText';
import { Colors } from '@/theme/colors';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-paper';
import { styles } from './style';

type SearchHeaderProps = {
  title: string;
};

const SearchHeader = ({ title }: SearchHeaderProps) => {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
        <Icon source="window-close" size={30} color={Colors.dark.text} />
      </TouchableOpacity>

      <ThemedText type="title" style={styles.headerTitle}>
        {title}
      </ThemedText>

      <View style={styles.languageContainer}>
        <ThemedText>FR</ThemedText>
        <Image source={require('@/assets/icons/buttom-shuffle.png')} style={styles.shuffleIcon} />
      </View>
    </View>
  );
};

export default SearchHeader;
