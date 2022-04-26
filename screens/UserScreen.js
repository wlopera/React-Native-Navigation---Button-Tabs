import { View, Text, Button, StyleSheet } from "react-native";

function UserScreen({ navigation }) {
  const openDrawerHandler = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.rootContainer}>
      <Text>
        Esta es la pantalla del <Text style={styles.highlight}>"Usuario!"</Text>
      </Text>
      <Button title="Abrir Menú" onPress={openDrawerHandler} />
    </View>
  );
}

export default UserScreen;

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
