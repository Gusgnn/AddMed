import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f6ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2a4d9b",
    marginBottom: 40,
    textAlign: "center",
  },

  button: {
    width: "80%",
    backgroundColor: "#3d6df2",
    paddingVertical: 15,
    borderRadius: 14,
    marginBottom: 20,
    alignItems: "center",
    elevation: 4, // sombra no Android
    shadowColor: "#000", // iOS
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
});
