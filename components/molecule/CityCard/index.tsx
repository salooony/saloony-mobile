import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity, Image } from 'react-native';
import styles from "./style";

const CityCard = ({ item }: any) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />

      <View style={styles.cardContent}>
        <Text style={styles.cardSubtitle}>Discover our</Text>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CityCard

