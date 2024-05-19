import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 80,
  },
  buttonContainer: {
    alignItems: "center",
    gap: 6,
  },
  fab: {
    position: "absolute",
    right: 0,
    bottom: 0,
    marginBottom: 16,
  },
});
