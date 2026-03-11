import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from "react-native";
import styles from "./style";
import SearchInput from "@/components/molecule/SearchInput";
import { cities } from "@/constants/mockCities";
import { IconButton } from "react-native-paper";
import CityCard from "@/components/molecule/CityCard";

export default function SearchService() {
    const [searchQuery, setSearchQuery] = React.useState<string>('');
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >

            {/* HERO */}
            <View style={styles.hero}>
                <Text style={styles.heroTitle}>
                    Book an appointment with
                </Text>

                <Text style={styles.heroTitle}>
                    a Hairdresser online
                </Text>

                {/* SEARCH INPUT */}
                <SearchInput
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    placeholder="Address, city..."
                    centerText={false}
                />

                {/* AROUND ME BUTTON */}
                <TouchableOpacity style={styles.aroundBtn}>
                    <IconButton
                        icon="map-marker-outline"
                        size={20}
                        iconColor="#fff"
                    />
                    <Text style={styles.aroundText}>Search around me</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.listContainer}>
                <Text style={styles.sectionTitle}>Hairdressers</Text>

                {cities.map((item) => (
                    <CityCard key={item.id} item={item} />
                ))}

                <TouchableOpacity style={styles.moreBtn}>
                    <Text style={styles.moreText}>See more cities</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}