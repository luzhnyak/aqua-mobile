import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },

  title: {
    margin: 0,
    color: "#2f2f2f",
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 1.14,
  },

  // ==========================   whyBlock
  whyBlock: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#ecf2ff",
  },

  whyTitle: {
    fontSize: 18,
    fontWeight: 500,
  },

  whyList: {
    // flex: 1,
    // gap: 16,
  },

  whyItem: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 28,
  },

  subtitle: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 1.25,
  },
});
