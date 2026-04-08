// app/_layout.tsx
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme, StyleSheet } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDark ? "#000000" : "#FFFFFF" },
      ]}
    >
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
