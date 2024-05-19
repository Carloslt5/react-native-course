import { globalStyles } from "@/styles/global.styles";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, FAB } from "react-native-paper";
import { StyledButton } from "./StyledButton";

export const CounterNumber = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{count}</Text>
      <View style={globalStyles.buttonContainer}>
        {/* Custome styledButton */}
        <StyledButton
          label={"Increment (Styled Button)"}
          onPress={() => setCount(count + 1)}
          onLongPress={() => setCount(0)}
        />

        {/* Custome button with React Native Paper */}
        <Button
          onPress={() => setCount(count + 1)}
          onLongPress={() => setCount(0)}
          mode="contained">
          Increment (React-Native Paper UI)
        </Button>
      </View>

      {/* Float Action Button with React Native Paper */}
      <FAB
        icon="plus"
        label="Increment"
        style={globalStyles.fab}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
    </View>
  );
};
