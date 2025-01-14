import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    setTodoList([...todoList, inputValue]);
    setInputValue("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>A Very Very Very Simple Todo List</Text>
      <Text>Input into your list here:</Text>
      <TextInput
        style={styles.input}
        placeholder="Insert here"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Add to List" onPress={handleSubmit} />

      <FlatList
        data={todoList}
        renderItem={({ item, index }) => (
          <Text style={styles.todoItem}>{`${index + 1}. ${item}`}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    margin: 80,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginVertical: 10,
    width: "80%",
    borderRadius: 5,
  },
  todoItem: {
    marginTop: 10,
    fontSize: 16,
  },
});
