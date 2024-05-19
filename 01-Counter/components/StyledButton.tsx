import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const StyledButton = ({ label, onPress, onLongPress }: Props) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
