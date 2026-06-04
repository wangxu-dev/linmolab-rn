// app/_layout.tsx
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { db } from '@/db';
import { migrations } from '@/db/migrate';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const { success, error } = useMigrations(db, migrations);

  if (error) {
    return null;
  }

  if (!success) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: isDark ? "#000000" : "#FFFFFF",
          },
        }}
      />
    </SafeAreaProvider>
  );
}
