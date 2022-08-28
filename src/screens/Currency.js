import { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import actions from "./../components/action";

const Currency = ({ navigation, route }) => {
  const [value, setValue] = useState("");
  const { currencies } = useSelector((store) => store.currency);
  const dispatch = useDispatch();

  console.log("currencies", currencies);
  const handleTextChange = (text) => {
    setValue(text);
  };
  useEffect(() => {
    dispatch(actions.fetchCurrencies());
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={Styles.itemWrapper}>
        <Text>{item.symbol + item.name}</Text>
        <Text>{item.rate}</Text>
        <Text>{(item.rate * value).toFixed(2)}</Text>
      </View>
    );
  };

  return (
    <View>
      <TextInput
        style={Styles.input}
        onChangeText={handleTextChange}
        value={value}
      />

      <FlatList
        data={currencies}
        renderItem={renderItem}
        keyExtractor={(item) => item.symbol}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: 320,
    marginVertical: 10,
  },
  itemWrapper: {
    flexDirection: "row",
    width: 320,
    justifyContent: "space-between",
    backgroundColor: "#ddd",
    padding: 5,
    margin: 5,
  },
});

export default Currency;
