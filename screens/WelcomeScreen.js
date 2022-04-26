import { View, Text, StyleSheet } from "react-native";

function WelcomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>
        Este es la pantalla de
        <Text style={styles.highlight}>"Bienvenida!"</Text>
      </Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
