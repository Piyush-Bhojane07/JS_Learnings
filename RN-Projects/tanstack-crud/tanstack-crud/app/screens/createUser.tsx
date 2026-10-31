import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useCreateUser } from "@/hooks/api/useCreateUser";

export default function CreateUser() {
  const { mutate, isError, error, isSuccess, isPending } = useCreateUser();
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleCreateUser = () => {
    if (!name || !job) {
      alert("Enter name and job");
      return;
    }
    mutate({ name, job });
  };

  const handleClear = () => {
    setName("");
    setJob("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Create User</Text>

          <TextInput
            placeholder="Enter name"
            style={styles.textInput}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Enter job"
            style={styles.textInput}
            value={job}
            onChangeText={setJob}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, isPending && styles.disabledButton]}
              onPress={handleCreateUser}
              disabled={isPending}
            >
              <Text style={styles.buttonText}>
                {isPending ? "Creating..." : "Create User"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.clearButton}
              onPress={handleClear}
              disabled={isPending}
            >
              <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.statusContainer}>
            <Text style={styles.statusLabel}>Status:</Text>
            {isPending && (
              <Text style={styles.pendingText}>Creating user...</Text>
            )}
            {isSuccess && (
              <Text style={styles.successText}>
                User created successfully! ✅
              </Text>
            )}
            {isError && (
              <Text style={styles.errorText}>Error: {error.message}</Text>
            )}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    backgroundColor: "white",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    minWidth: 120,
    alignItems: "center",
  },
  clearButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    minWidth: 120,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  clearButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  statusContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#007AFF",
  },
  statusLabel: {
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  pendingText: {
    color: "#007AFF",
  },
  successText: {
    color: "green",
  },
  errorText: {
    color: "red",
  },
});
