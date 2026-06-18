import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from "react-native";
import styles from "./style";
import SearchInput from "@/components/molecule/SearchInput";
import { cities, SEARCH_TEXTS } from "@/constants/search.constants";
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
                    {SEARCH_TEXTS.HERO_TITLE_LINE1}
                </Text>

                <Text style={styles.heroTitle}>
                    {SEARCH_TEXTS.HERO_TITLE_LINE2}
                </Text>

                {/* SEARCH INPUT */}
                <SearchInput
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    placeholder={SEARCH_TEXTS.SEARCH_PLACEHOLDER}
                    centerText={false}
                />

                {/* AROUND ME BUTTON */}
                <TouchableOpacity style={styles.aroundBtn}>
                    <IconButton
                        icon="map-marker-outline"
                        size={20}
                        iconColor="#fff"
                    />
                    <Text style={styles.aroundText}>{SEARCH_TEXTS.AROUND_ME}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.listContainer}>
                <Text style={styles.sectionTitle}>{SEARCH_TEXTS.SECTION_TITLE}</Text>

                {cities.map((item) => (
                    <CityCard key={item.id} item={item} />
                ))}

                <TouchableOpacity style={styles.moreBtn}>
                    <Text style={styles.moreText}>{SEARCH_TEXTS.SEE_MORE_CITIES}</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}