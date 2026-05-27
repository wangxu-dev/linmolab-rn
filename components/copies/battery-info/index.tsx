import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getBatteryInfo } from "../../../lib/battery-info";

export default function BatteryInfo() {
  const [battery, setBattery] = useState<{
    level: number;
    isCharging: boolean;
    isPluggedIn: boolean;
    state: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchBattery() {
    setLoading(true);
    setError(null);
    try {
      const info = await getBatteryInfo();
      setBattery(info);
    } catch (e) {
      setError(e instanceof Error ? e.message : "获取失败");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={fetchBattery}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "加载中..." : "获取电池信息"}
        </Text>
      </TouchableOpacity>

      {error && <Text style={styles.error}>{error}</Text>}

      {battery && (
        <View style={styles.result}>
          <View style={styles.row}>
            <Text style={styles.label}>电量</Text>
            <Text style={styles.value}>{battery.level}%</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>充电状态</Text>
            <Text style={styles.value}>
              {battery.isCharging ? "充电中" : "未充电"}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>电源连接</Text>
            <Text style={styles.value}>
              {battery.isPluggedIn ? "已连接" : "未连接"}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>状态</Text>
            <Text style={styles.value}>{battery.state}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  error: {
    color: "#FF3B30",
    marginTop: 16,
    fontSize: 15,
  },
  result: {
    marginTop: 24,
    backgroundColor: "#f2f2f7",
    borderRadius: 12,
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  label: {
    fontSize: 15,
    color: "#8e8e93",
  },
  value: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
  },
});
