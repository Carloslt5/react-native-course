import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { StyledButton } from "./StyledButton";

export const CounterNumber = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <View style={styles.buttonContainer}>
        <StyledButton
          label={"Increment (Styled Button)"}
          onPress={() => setCount(count + 1)}
          onLongPress={() => setCount(0)}
        />
        <Button
          onPress={() => setCount(count + 1)}
          onLongPress={() => setCount(0)}
          mode="contained">
          Increment (React-Native Paper UI)
        </Button>
      </View>
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
  buttonContainer: {
    alignItems: "center",
    gap: 6,
  },
});
