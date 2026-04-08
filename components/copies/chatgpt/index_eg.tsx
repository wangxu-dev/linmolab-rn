import AppleIcon from "@/assets/svg/apple.svg";
import GoogleIcon from "@/assets/svg/google.svg";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ChatGPT() {
  return (
    <View style={styles.container}>
      <View style={styles.middleArea}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Let's brainstorm</Text>
          <View style={styles.titleIcon} />
        </View>
      </View>
      <View style={styles.form}>
        <Pressable style={styles.appleButton}>
          <AppleIcon width={18} height={18} />
          <Text style={styles.appleText}>Countinue with Apple</Text>
        </Pressable>

        <Pressable style={styles.googleButton}>
          <GoogleIcon width={18} height={18} />
          <Text style={styles.googleText}>Countinue with Google</Text>
        </Pressable>

        <Pressable style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>
        <Pressable style={styles.loginButton}>
          <Text style={styles.buttonText}>Log in</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFCFE",
  },
  middleArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#000000",
    lineHeight: 38,
  },
  titleIcon: {
    width: 32,
    height: 32,
    backgroundColor: "#000000",
    borderRadius: 999,
  },
  form: {
    backgroundColor: "#020002",
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    paddingTop: 16,
    paddingHorizontal: 25,
    gap: 12,
    paddingBottom: 20,
  },
  appleButton: {
    height: 49,
    backgroundColor: "#FEFCFE",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  appleText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
  },
  googleButton: {
    height: 49,
    backgroundColor: "#2F2C32",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  googleText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  signUpButton: {
    height: 49,
    backgroundColor: "#2F2C32",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    height: 49,
    backgroundColor: "#020002",
    borderWidth: 2,
    borderColor: "#2F2C32",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  bottomBar: {
    height: 34,
    backgroundColor: "#020002",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 8,
  },
  homeIndicator: {
    width: 144,
    height: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
  },
});
