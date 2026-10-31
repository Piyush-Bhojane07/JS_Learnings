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
import { useCreatePost } from "@/hooks/api/useMutations";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  const { mutate, isPending, isError, error, isSuccess } = useCreatePost();

  const handleCreatePost = () => {
    if (!title.trim() || !body.trim() || !userId.trim()) {
      alert("Please fill all fields");
      return;
    }

    mutate({
      title: title.trim(),
      body: body.trim(),
      userId: parseInt(userId),
    });
  };

  const handleClear = () => {
    setTitle("");
    setBody("");
    setUserId("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Create a Post</Text>

          <TextInput
            placeholder="Enter title"
            style={styles.textInput}
            value={title}
            onChangeText={setTitle}
            returnKeyType="next"
          />
          <TextInput
            placeholder="Enter body"
            style={[styles.textInput, styles.multilineInput]}
            value={body}
            onChangeText={setBody}
            multiline
            numberOfLines={4}
            returnKeyType="next"
          />
          <TextInput
            placeholder="Enter User ID"
            style={styles.textInput}
            value={userId}
            onChangeText={setUserId}
            keyboardType="numeric"
            returnKeyType="done"
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, isPending && styles.disabledButton]}
              onPress={handleCreatePost}
              disabled={isPending}
            >
              <Text style={styles.buttonText}>
                {isPending ? "Creating..." : "Create Post"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
              <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.statusContainer}>
            <Text style={styles.statusLabel}>Status: </Text>
            {isPending && (
              <Text style={styles.pendingText}>Creating post...</Text>
            )}
            {isSuccess && (
              <Text style={styles.successText}>
                Post created successfully! ✅
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
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
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
