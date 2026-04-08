import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { getcopybyid } from "../../components/copies/registry";

export default function CopyDetail() {
  const { id } = useLocalSearchParams();
  const copy = getcopybyid(id as string);
  if (!copy) {
    return <View style={styles.container} />;
  }
  const Component = copy.Component;
  return <Component />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    fontSize: 22,
  },
});
