import ThemedText from '@/components/atoms/typography/ThemedText';
import SearchHeader from '@/components/molecule/SearchHeader';
import SearchInput from '@/components/molecule/SearchInput';
import { UI_STRINGS } from '@/constants/uiStrings';
import { Colors } from '@/theme/colors';
import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-paper';
import { styles } from './style';

const SearchCityPage = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <SearchHeader title="Address" />

        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          placeholder="Where (Address, city...)"
          centerText={true}
        />

        <View style={styles.aroundMeContainer}>
          <Icon source="map-marker" size={21} />
          <ThemedText
            type="defaultSemiBold"
            lightColor={Colors.dark.text}
            style={styles.aroundTitle}
          >
            {UI_STRINGS.AROUND_ME}
          </ThemedText>
        </View>
      </View>
    </View>
  );
};

export default SearchCityPage;
