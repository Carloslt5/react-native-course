import { CounterNumber } from "@/components/CounterNumber";
import { HelloWord } from "@/components/HelloWord";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CounterPage() {
  return (
    <SafeAreaView style={styles.content}>
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
