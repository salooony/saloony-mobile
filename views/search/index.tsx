import ThemedText from '@/components/atoms/typography/ThemedText';
import SearchHeader from '@/components/molecule/SearchHeader';
import { Colors } from '@/theme/colors';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import SearchInput from '@/components/molecule/SearchInput';
import { styles } from './style';

const SearchPage = () => {
  const frequentSearches = ['Hairdressers', 'Barbers', 'Manicure', 'Beauty salons'];

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleFrequentSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <SearchHeader title="Search" />

        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          placeholder="Name of the salon, services (cut, etc.)"
        />

        <View style={styles.frequentSearchContainer}>
          <ThemedText
            type="defaultSemiBold"
            lightColor={Colors.dark.text}
            style={styles.frequentSearchTitle}
          >
            Frequently searched
          </ThemedText>
          {frequentSearches.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.frequentSearchItem}
              onPress={() => handleFrequentSearch(item)}
            >
              <ThemedText style={styles.frequentSearchText}>{item}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SearchPage;
