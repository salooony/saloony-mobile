import { StyleSheet } from "react-native";
import { Colors } from "@/theme/colors";

export default StyleSheet.create({
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
});