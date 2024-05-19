import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FlexScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Position Screen</Text>
      <View style={styles.contentPosition}>
        <View style={[styles.box, styles.redBox]} />
        <View style={[styles.box, styles.purpleBox]} />
        <View style={[styles.box, styles.yellowBox]} />
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  box: {
    width: 100,
    height: 100,
  },
  redBox: {
    backgroundColor: "red",
  },
  purpleBox: {
    backgroundColor: "#8b4b96",
  },
  yellowBox: {
    backgroundColor: "#f6f22e",
    alignSelf: "flex-start",
  },
});
