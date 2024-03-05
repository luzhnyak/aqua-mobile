import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 280,
    marginHorizontal: "auto",
  },

  title: {
    marginTop: 48,
    marginBottom: 16,
    color: "#2f2f2f",
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 32,
  },

  subtitle: {
    marginBottom: 24,
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 30,
  },

  // ==========================   benefits

  benefitsTitle: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 20,
  },

  benefilsList: {
    gap: 8,
    marginBottom: 24,
  },

  benefitsItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  benefitsImage: {
    width: 32,
    height: 32,
  },

  benefitsText: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 20,
  },

  btn: {
    marginBottom: 40,
    backgroundColor: "#407bff",
    borderRadius: 10,
    width: 280,
    height: 36,
    paddingHorizontal: 30,
    paddingVertical: 8,
  },

  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 500,
  },

  // ==========================   whyBlock
  whyBlock: {
    width: 280,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#ecf2ff",
    marginHorizontal: "auto",
    borderRadius: 10,
  },

  whyTitle: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: 500,
  },

  whyList: {
    gap: 16,
  },

  whyItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  whyText: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 20,
  },
});
