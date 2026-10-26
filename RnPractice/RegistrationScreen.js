import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { useState } from "react";
// Full name
// Email
// Password
// Confirm password
// Register button
export default function App() {
  const [fullName, setFullName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [cPass, setCPass] = useState("");
  // const [cPass, setCPass] = useState('')

  const handleRegister = () => {
    if (fullName.trim() === "") {
      Alert.alert("Error", "Full name is required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      Alert.alert("Error", "Invalid email format");
      return;
    }

    if (pass.length < 8) {
      Alert.alert("Error", "Password must be at least 8 characters");
      return;
    }

    if (cPass !== pass) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    Alert.alert("Success", "Registration successful!");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="full name"
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        placeholder="email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Pass"
        style={styles.input}
        value={pass}
        onChangeText={setPass}
        secureTextEntry
      />

      <TextInput
        placeholder="Confirm Pass"
        style={styles.input}
        value={cPass}
        onChangeText={setCPass}
        secureTextEntry
      />

      <Button title="Register" onPress={() => handleRegister()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  input: {
    margin: 24,
    fontSize: 18,
    padding: 5,
    // fontWeight: 'bold',
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
  },
});
