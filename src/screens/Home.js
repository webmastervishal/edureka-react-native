import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  // console.log("debugger....", props);

  const handleNav = () => {
    navigation.navigate("Currency", { name: "Vishal" });
  };

  const handleTodoChange = (text) => {
    setTodo(text);
  };

  const handleAddTodo = () => {
    setTodos([...todos, { id: todos.length + 1, todo }]);
    setTodo("");
  };

  const handleDelete = (id) => {
    console.log("inside handle delete", id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.todo}</Text>
        <AntDesign
          name="delete"
          size={24}
          color="black"
          onPress={() => handleDelete(item.id)}
        />
      </View>
    );
  };

  // [{
  //   id: 1,
  //   todo: "learn js",
  // },{
  //   id: 2,
  //   todo: "learn graphql"
  // }]

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo Application</Text>

      <View style={styles.todoWrapper}>
        <TextInput
          value={todo}
          style={styles.input}
          onChangeText={handleTodoChange}
        />
        <Button title="Add" onPress={handleAddTodo} />
      </View>

      <View style={styles.todolistWrapper}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <Button title="Go to Currency" onPress={handleNav} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    flex: 1,
  },
  todoWrapper: {
    flexDirection: "row",
  },
  todolistWrapper: {
    backgroundColor: "#ddd",
    width: 360,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});
