import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import * as Battery from "expo-battery";

function formatBatteryState(state: Battery.BatteryState) {
  switch (state) {
    case Battery.BatteryState.CHARGING:
      return "充电中";
    case Battery.BatteryState.FULL:
      return "已充满";
    case Battery.BatteryState.UNPLUGGED:
      return "未充电";
    default:
      return "未知";
  }
}

export default function ExpoBatteryCopy() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    level: number;
    state: string;
    lowPowerMode: boolean;
  } | null>(null);

  async function readBattery() {
    setLoading(true);
    setError(null);

    try {
      const [level, state, lowPowerMode] = await Promise.all([
        Battery.getBatteryLevelAsync(),
        Battery.getBatteryStateAsync(),
        Battery.isLowPowerModeEnabledAsync(),
      ]);

      setResult({
        level: Math.round(level * 100),
        state: formatBatteryState(state),
        lowPowerMode,
      });
    } catch (nextError) {
      setError(nextError instanceof Error ? nextError.message : "读取失败");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>expo-battery</Text>
      <Text style={styles.subtitle}>先学最小调用：读取一次电池状态</Text>

      <Pressable style={styles.button} onPress={readBattery} disabled={loading}>
        <Text style={styles.buttonText}>
          {loading ? "读取中..." : "读取电池信息"}
        </Text>
      </Pressable>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {result ? (
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.label}>电量</Text>
            <Text style={styles.value}>{result.level}%</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>电池状态</Text>
            <Text style={styles.value}>{result.state}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>低电量模式</Text>
            <Text style={styles.value}>{result.lowPowerMode ? "开启" : "关闭"}</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f7fb",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: "#6b7280",
  },
  button: {
    marginTop: 24,
    borderRadius: 14,
    backgroundColor: "#0f172a",
    paddingVertical: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  error: {
    marginTop: 16,
    color: "#dc2626",
    fontSize: 14,
  },
  card: {
    marginTop: 24,
    borderRadius: 18,
    backgroundColor: "#fff",
    padding: 18,
    gap: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 15,
    color: "#6b7280",
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
});
