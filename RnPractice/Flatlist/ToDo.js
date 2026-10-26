import {
  View,
  Text,
  TextInput,
  FlatList,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { useState } from "react";
export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() == "") {
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDelete = (index) => {
    Alert.alert("Delete Task", `Delete task at index ${index}?`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleTxt}>My Todo list</Text>

      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="Enter a task..."
          style={{ padding: 20, borderWidth: 1, borderRadius: 5, width: "90%" }}
          value={task}
          onChangeText={setTask}
        />

        <Button title="Add" onPress={() => handleAdd()} />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
            <Button title="Delete" onPress={() => handleDelete(index)} />
          </View>
        )}
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
    fontSize: 25,
  },

  input: {
    fontSize: "25",
  },
});
