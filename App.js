import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Modal,
  Button,
} from "react-native";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
      setTodoList([...todoList, inputValue]);
      setInputValue("");
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>A Very Very Very Simple Todo List</Text>
        <Text>Input into your list here:</Text>
        <TextInput
          style={styles.input}
          placeholder="Insert here"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Add to List</Text>
        </TouchableOpacity>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Add to List (Also)</Text>
        </Pressable>

        <FlatList
          data={todoList}
          renderItem={({ item, index }) => (
            <Text style={styles.todoItem}>{`${index + 1}. ${item}`}</Text>
          )}
        />

        {/* <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.activityIndicator}
        /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonPressed: {
    backgroundColor: "#000",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#ff0",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    margin: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginVertical: 10,
    width: "80%",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#6200ee",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  pressedButton: {
    backgroundColor: "#3700b3",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  todoItem: {
    marginTop: 10,
    fontSize: 16,
  },
  activityIndicator: {
    marginTop: 20,
  },
});
