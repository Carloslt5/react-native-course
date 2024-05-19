import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StyledButton } from "./StyledButton";

export const CounterNumber = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <StyledButton
        label={"Increment"}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
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
});
