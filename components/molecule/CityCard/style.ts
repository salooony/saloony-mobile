import { StyleSheet } from "react-native";

export default StyleSheet.create({

  


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


});