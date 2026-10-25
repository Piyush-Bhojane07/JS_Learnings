import { StyleSheet, Button, Alert, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Click Me"
        color="red"
        // ❌ WRONG CODE:
        // onPress={Alert.alert('Title', 'Clicked')}
        // Why wrong? Alert.alert() executes immediately during rendering.

        // ✅ RIGHT CODE:
        // Pass a function so the alert runs only when the button is pressed.
        onPress={() => Alert.alert("Title", "Clicked")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
