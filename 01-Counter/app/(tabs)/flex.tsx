import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FlexPage() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Box object </Text>
      <View style={styles.purpleBox}>
        <Text style={{ color: "white" }}>Hello world</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d3d3d3",
    flex: 1,
  },
  title: {
    fontSize: 50,
    backgroundColor: "#6aa65e",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 3,
  },
  purpleBox: {
    backgroundColor: "#6d307a",
    paddingVertical: 10,
    paddingHorizontal: 30,
    margin: 20,
  },
});
