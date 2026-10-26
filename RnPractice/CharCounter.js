import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [char, setChar] = useState("");
  const [length, setLength] = useState(0);

  const handleCharCounter = () => {
    setLength(char.length);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="enter char"
        style={{ fontSize: 35, padding: 10, borderWidth: 1 }}
        value={char}
        onChangeText={setChar}
      />
      <Text style={{ fontSize: 25 }}>Char Length is : {length}</Text>

      <Button title="char counter" onPress={handleCharCounter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
});
