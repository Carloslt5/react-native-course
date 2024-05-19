import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const CounterNumber = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Pressable
        onPress={() => {
          setCount(count + 1);
        }}
        onLongPress={() => setCount(0)}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
        <Text style={styles.buttonText}>Increment</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 80,
  },
  button: {
    backgroundColor: "#5956D6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: "#3e3d91",
  },
  buttonText: {
    color: "white",
  },
});
