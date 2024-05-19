import { CounterNumber } from "@/components/CounterNumber";
import { HelloWord } from "@/components/HelloWord";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CounterPage() {
  return (
    <SafeAreaView style={styles.content}>
      <ThemedText type="title">Counter!</ThemedText>
      <HelloWord name="Carlos Liao" />
      <CounterNumber />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    flex: 1,
  },
});
