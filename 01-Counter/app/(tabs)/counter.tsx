import { ThemedText } from "@/components/ThemedText";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Counter() {
  return (
    <SafeAreaView style={styles.content}>
      <ThemedText type="title">Counter!</ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
  },
});
