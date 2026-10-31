import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Colors } from "@/constants/Colors";

export default function Home() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    const { data } = await axios.get("https://dummyjson.com/todos");
    setTodo(data.todos);
  };

  useEffect(() => {
    getData();
  }, []);

const [userIdCounter, setUserIdCounter] = useState(0);

const addTask = async () => {
  if (!task.trim()) return;

  setUserIdCounter((prev) => prev + 1);

  try {
    const { data: newTodo } = await axios.post(
      "https://dummyjson.com/todos/add",
      {
        todo: task.trim(),
        completed: false,
        userId: userIdCounter + 1, // careful: state updates async
      }
    );
    setTodo((prev) => [newTodo, ...prev]);
    setTask("");
  } catch (err) {
    console.error(err);
  }
};

  const cardColors = [
    Colors.cardOne,
    Colors.cardTwo,
    Colors.cardThree,
    Colors.cardFour,
  ];

  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.todoCard,
        { backgroundColor: cardColors[index % cardColors.length] },
      ]}
    >
      <Text style={styles.todoText}>{item.todo}</Text>
      <Text
        style={[styles.status, item.completed ? styles.done : styles.pending]}
      >
        {item.completed ? "✅ Done" : "⏳ Pending"}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Input Field */}
      <TextInput
        style={styles.input}
        placeholder="✍️ Add a new task..."
        placeholderTextColor="#888"
        value={task}
        onChangeText={setTask}
        editable={!adding}
      />

      {/* Buttons Row */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: Colors.cardOne }]}
          activeOpacity={0.8}
          onPress={addTask}
          disabled={adding || !task.trim()}
        >
          <Text style={styles.btntxt}>
            {adding ? "⏳ Adding..." : "➕ Add Task"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: Colors.cardTwo }]}
          activeOpacity={0.8}
          onPress={getData}
          disabled={adding}
        >
          <Text style={styles.btntxt}>🔄 Refresh</Text>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <FlatList
        data={todo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

// your existing styles...
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    marginTop : 49,
    fontSize: 16,
  },
  buttonRow: { flexDirection: "row", gap: 12, marginBottom: 12 },
  btn: { flex: 1, padding: 12, borderRadius: 12, alignItems: "center" },
  btntxt: { color: "#fff", fontWeight: "600" },
  list: { paddingBottom: 24, gap: 12 },
  todoCard: { padding: 16, borderRadius: 16 },
  todoText: { fontSize: 16, fontWeight: "600", marginBottom: 6 },
  status: { fontSize: 14 },
  done: { opacity: 0.8 },
  pending: { opacity: 0.8 },
});


/*
// Call it when component mounts /* Option 1: DummyJSON To-Dos API A free fake REST API ideal for testing and prototyping. It supports full CRUD operations: Get all to-dos: GET https://dummyjson.com/todos — returns a list of to-dos (default limit = 30, supports pagination) Get a single to-do: GET https://dummyjson.com/todos/{id} Add a to-do: POST https://dummyjson.com/todos/add — you can include fields like todo, completed, and userId Update: PUT https://dummyjson.com/todos/{id} or PATCH https://dummyjson.com/todos/{id} Delete: DELETE https://dummyjson.com/todos/{id} DummyJSON */
