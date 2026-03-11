import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FCF7F3"
  },

  hero: {
    padding: 20,
    paddingTop: 30
  },

  heroTitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#222",
    marginBottom: 4
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    marginTop: 20,
    paddingHorizontal: 15,
    height: 50,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2
  },

  input: {
    flex: 1,
    fontSize: 15
  },

  searchBtn: {
    backgroundColor: "#B39263",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  searchIcon: {
    color: "#fff",
    fontSize: 16
  },

  aroundBtn: {
    backgroundColor: "#B39263",
    height: 55,
    borderRadius: 12,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },

  locationIcon: {
    fontSize: 16,
    color: "#fff",
    marginRight: 8
  },

  aroundText: {
    color: "#fff",
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
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
    marginBottom: 14,
    alignItems: "center",
    shadowColor: "#000",
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
    color: "#888"
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