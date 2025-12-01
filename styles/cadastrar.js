import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 10,
    borderRadius: 8
  },
  button: {
    width: "80%",
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8,
    marginTop: 20
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff"
  },
  back: {
    marginTop: 20,
    color: "#007bff"
  }
});
