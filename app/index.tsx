import { useRouter } from "expo-router";
import { FlatList, Image, Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";
import { copies } from "../components/copies/registry";

export default function Index() {
  const router = useRouter();
  const colorSchema = useColorScheme();
  const isDart = colorSchema === "dark";

  return (
    <View style={[styles.container, isDart && styles.containerDark]}>
      <FlatList
        data={copies}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.card, isDart && styles.cardDark]}
            onPress={() => router.push(`/copy/${item.id}` as any)}
          >
            <Image source={item.thumbnail} style={styles.thumb} />
            <View style={styles.info}>
              <Text style={[styles.name, isDart && styles.nameDark]}>{item.name}</Text>
              <Text style={[styles.desc, isDart && styles.descDark]}>{item.description}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f7",
  },
  containerDark: {
    backgroundColor: "#000",
  },
  list: {
    padding: 16,
    paddingTop: 60,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  cardDark: {
    backgroundColor: "#1c1c1e",
    shadowOpacity: 0.2,
  },
  thumb: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#e5e5ea",
  },
  info: {
    marginLeft: 26,
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: "600",
    color: "#000",
  },
  nameDark: {
    color: "#fff",
  },
  desc: {
    fontSize: 14,
    color: "#8e8e93",
  },
  descDark: {
    color: "#636366",
  },
});
