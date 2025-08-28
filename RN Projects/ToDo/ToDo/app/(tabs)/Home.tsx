import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios"; // ✅ real axios import
import { Colors } from "@/constants/Colors";
import Header from "@/components/Header";


export default function Home() {
  //states
  const [todo, setTodo] = useState([]);
  // Fetch todos from DummyJSON API
  //   const getData = async () => {
  //    try{
  //       const response = await axios("https://dummyjson.com/todos");
  //       const resData = response.data; // ✅ axios gives parsed JSON in .data
  //       console.log(resData);

  //       setTodo(resData.todos);
  //    }catch(err){
  //     console.error(err)
  //    }
  //   };

  // Call it when component mounts

  /*
  Option 1: DummyJSON To-Dos API

A free fake REST API ideal for testing and prototyping. It supports full CRUD operations:

Get all to-dos:
GET https://dummyjson.com/todos — returns a list of to-dos (default limit = 30, supports pagination)

Get a single to-do:
GET https://dummyjson.com/todos/{id}

Add a to-do:
POST https://dummyjson.com/todos/add — you can include fields like todo, completed, and userId

Update:
PUT https://dummyjson.com/todos/{id} or PATCH https://dummyjson.com/todos/{id}

Delete:
DELETE https://dummyjson.com/todos/{id}

DummyJSON
  
  */
  const getData = async () => {
    const res = await axios("https://dummyjson.com/todos");
    const resData = await res.data;
    console.log(resData);
    setTodo(resData.todos);
  };
  getData();

  return (
    <View style={styles.container}>
      {/* Input Field */}
      <Header/>
      <TextInput style={styles.input} placeholder="Add Task" />

      {/* Button */}
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.7}
        onPress={getData}
      >
        <Text style={styles.btntxt}>Add Task</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        //   onPress={getData}
        activeOpacity={0.7}
      >
        <Text style={styles.btntxt}>Get Task</Text>
      </TouchableOpacity>

      {/* <FlatList
          data={todo}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.todo}</Text>
            </View>
          )}
        /> */}

      <FlatList
        data={todo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.todo}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.dark.background,
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: Colors.cardOne,
    marginTop : 4,
    width: "100%",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  btntxt: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
});
