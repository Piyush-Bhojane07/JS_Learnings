import {
  View,
  Text,
  TextInput,
  FlatList,
  Button,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function ProductListScreen({ navigation }) {
  const products = [
    {
      id: "1",
      name: "Laptop",
      price: 45000,
      description: "Powerful laptop for work, study, and everyday tasks.",
    },
    {
      id: "2",
      name: "Mobile",
      price: 15000,
      description: "Smartphone with a clear display and long-lasting battery.",
    },
    {
      id: "3",
      name: "Headphones",
      price: 2000,
      description: "Comfortable headphones with clear sound quality.",
    },
    {
      id: "4",
      name: "Keyboard",
      price: 1200,
      description: "Durable keyboard suitable for typing and office work.",
    },
    {
      id: "5",
      name: "Mouse",
      price: 500,
      description: "Lightweight mouse for smooth and precise navigation.",
    },
    {
      id: "6",
      name: "Laptop",
      price: 45000,
      description: "Reliable laptop for multitasking and productivity.",
    },
    {
      id: "7",
      name: "Mobile",
      price: 15000,
      description: "Affordable smartphone for calls, apps, and entertainment.",
    },
    {
      id: "8",
      name: "Headphones",
      price: 2000,
      description: "Portable headphones for music and video streaming.",
    },
    {
      id: "9",
      name: "Keyboard",
      price: 1200,
      description: "Compact keyboard for comfortable daily typing.",
    },
    {
      id: "10",
      name: "Mouse",
      price: 500,
      description: "Easy-to-use mouse for everyday computer tasks.",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 20, padding: 5 }}>{item.id}</Text>
            <Text style={{ fontSize: 20, padding: 5 }}>{item.name}</Text>
            <Text style={{ fontSize: 20, padding: 5 }}>{item.price}</Text>

            <Button
              title="Product Detail"
              onPress={() =>
                navigation.navigate("ProductDetail", { product: item })
              }
            />
          </View>
        )}
      />
    </View>
  );
}

function ProductDetailScreen({ route }) {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.titleTxt}>{product.name}</Text>

      <Text style={styles.titleTxt}>{product.price}</Text>

      <Text style={styles.titleTxt}>{product.description}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductList" component={ProductListScreen} />

        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
    fontSize: 50,
  },

  input: {
    fontSize: "40",
  },
});
