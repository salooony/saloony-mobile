import { StyleSheet } from "react-native";
import { Colors } from "@/theme/colors";

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.brand.secondary
  },

  hero: {
    padding: 20,
    paddingTop: 30
  },

  heroTitle: {
    fontSize: 18,
    textAlign: "center",
    color: Colors.dark.background,
    marginBottom: 4
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.light.background,
    borderRadius: 25,
    marginTop: 20,
    paddingHorizontal: 15,
    height: 50,
    shadowColor: Colors.dark.background,
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2
  },

  input: {
    flex: 1,
    fontSize: 15
  },

  searchBtn: {
    backgroundColor: Colors.brand.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  searchIcon: {
    color: Colors.light.text,
    fontSize: 16
  },

  aroundBtn: {
    backgroundColor: Colors.brand.primary,
    height: 55,
    borderRadius: 12,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },

  locationIcon: {
    fontSize: 16,
    color: Colors.light.text,
    marginRight: 8
  },

  aroundText: {
    color: Colors.light.text,
    fontSize: 16,
    fontWeight: "600"
  },

  listContainer: {
    padding: 20,
    flex: 1
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 10
  },

  card: {
    flexDirection: "row",
    backgroundColor: Colors.light.background,
    padding: 10,
    borderRadius: 12,
    marginBottom: 14,
    alignItems: "center",
    shadowColor: Colors.dark.background,
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2
  },

  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 10
  },

  cardContent: {
    marginLeft: 12
  },

  cardSubtitle: {
    fontSize: 12,
    color: Colors.light.secondaryText
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "500",
    marginTop: 2
  },

  moreBtn: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },

  moreText: {
    textDecorationLine: "underline",
    fontSize: 15
  }

});