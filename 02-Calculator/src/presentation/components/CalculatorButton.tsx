import React from "react";
import { Pressable, Text } from "react-native";
import { colors, globalStyles } from "../config/theme/app-theme";

type Props = {
  label: string;
  color?: string;
  dobleSize?: boolean;
  blackText?: boolean;
};

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  dobleSize = false,
  blackText = false,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        width: dobleSize ? 180 : 80,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
      })}>
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "black" : "white",
        }}>
        {label}
      </Text>
    </Pressable>
  );
};
