import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleTxt}>Login page</Text>

      <TextInput placeholder="mob no" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />

      <Button
        title="login"
        onPress={() => Alert.alert("title", "btn clicked")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "5%",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  titleTxt: {
    fontSize: 50,
  },

  input: {
    fontSize: "40",
  },
});
