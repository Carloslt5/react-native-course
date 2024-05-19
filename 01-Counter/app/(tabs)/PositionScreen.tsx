import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PositionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Position Screen</Text>
      <View style={styles.contentPosition}>
        <View style={styles.redBox} />
        <View style={styles.purpleBox} />
        <View style={styles.absoluteBox} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d3d3d3",
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 30,
    backgroundColor: "#6aa65e",
    marginBottom: 50,
  },
  contentPosition: {
    backgroundColor: "#50b2b4",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },

  redBox: {
    borderWidth: 2,
    backgroundColor: "red",
    width: 100,
    height: 100,
    left: -150,
  },
  purpleBox: {
    borderWidth: 2,
    backgroundColor: "#8b4b96",
    width: 100,
    height: 100,
    top: 50,
    right: -80,
  },
  absoluteBox: {
    borderWidth: 2,
    backgroundColor: "#f6f22e",
    width: 100,
    height: 100,
    position: "absolute",
    top: 0,
    right: 0,
  },
});
