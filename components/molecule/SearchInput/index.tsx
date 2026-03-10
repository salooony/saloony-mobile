import { Colors } from '@/theme/colors';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from './style';

type SearchInputProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  placeholder: string;
  centerText?: boolean;
};

const SearchInput = ({
  searchQuery,
  setSearchQuery,
  placeholder,
  centerText = false,
}: SearchInputProps) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        mode="flat"
        placeholder={placeholder}
        placeholderTextColor={Colors.dark.secondaryText}
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={[styles.searchInput, centerText && styles.searchInputCentered]}
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        theme={{
          colors: {
            primary: Colors.brand.primary,
          },
        }}
      />
      <TouchableOpacity style={styles.searchButton}>
        <Image source={require('@/assets/icons/search.png')} style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
