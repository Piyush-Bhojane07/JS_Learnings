import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Colors } from "@/constants/Colors";

export default function Home() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  const getData = async () => {
    const res = await axios("https://dummyjson.com/todos");
    const resData = await res.data;
    setTodo(resData.todos);
  };

  useEffect(() => {
    getData();
  }, []);

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
      />

      {/* Buttons Row */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: Colors.cardOne }]}
          activeOpacity={0.8}
          onPress={() => {
            if (task.trim()) {
              setTodo([
                { id: Date.now(), todo: task, completed: false },
                ...todo,
              ]);
              setTask("");
            }
          }}
        >
          <Text style={styles.btntxt}>➕ Add Task</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: Colors.cardTwo }]}
          activeOpacity={0.8}
          onPress={getData}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    flex: 1,
    padding: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1.5,
    borderColor: Colors.dark.background,
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  btn: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  btntxt: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
  list: {
    paddingBottom: 30,
  },
  todoCard: {
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    flex: 1,
    marginRight: 12,
  },
  status: {
    fontSize: 14,
    fontWeight: "600",
  },
  done: {
    color: "#e0ffe0",
  },
  pending: {
    color: "#ffe0e0",
  },
});

/*
// Call it when component mounts /* Option 1: DummyJSON To-Dos API A free fake REST API ideal for testing and prototyping. It supports full CRUD operations: Get all to-dos: GET https://dummyjson.com/todos — returns a list of to-dos (default limit = 30, supports pagination) Get a single to-do: GET https://dummyjson.com/todos/{id} Add a to-do: POST https://dummyjson.com/todos/add — you can include fields like todo, completed, and userId Update: PUT https://dummyjson.com/todos/{id} or PATCH https://dummyjson.com/todos/{id} Delete: DELETE https://dummyjson.com/todos/{id} DummyJSON */
