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
        onLongPress={() => setCount(0)}>
        <Text>+1</Text>
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
    fontSize: 50,
  },
});
