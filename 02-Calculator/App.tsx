import { globalStyles } from "@/presentation/config/theme/app-theme";
import { CalculatorScreen } from "@/presentation/screens/CalculatorScreen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={globalStyles.background}>
      <StatusBar style="auto" />
      <CalculatorScreen />
    </SafeAreaView>
  );
}
