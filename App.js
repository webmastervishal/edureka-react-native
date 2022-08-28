import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import Home from "./src/screens/Home";
import Currency from "./src/screens/Currency";
import store from "./store/store";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Currency" component={Currency} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
