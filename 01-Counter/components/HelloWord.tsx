import React from "react";
import { StyleSheet, Text } from "react-native";

type Props = {
  name?: string;
};
export const HelloWord = ({ name = "World" }: Props) => {
  return (
    <>
      <Text style={styles.title}>Hello, {name}</Text>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        Hello, {name}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 55,
  },
});
