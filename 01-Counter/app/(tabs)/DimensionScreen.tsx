import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DimensionScreen() {
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dimension Screen</Text>
      <View style={styles.redBox}>
        <View
          style={{
            ...styles.purpleBox,
            width: width * 0.8,
          }}
        />
      </View>

      <Text>w: {width}</Text>
      <Text>h: {height}</Text>
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
  },
  redBox: {
    backgroundColor: "red",
    width: "50%",
    height: "80%",
  },

  purpleBox: {
    backgroundColor: "#376783",
    width: "90%",
    height: "50%",
  },
});
