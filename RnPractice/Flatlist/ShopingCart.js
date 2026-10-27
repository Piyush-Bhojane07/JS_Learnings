import { StyleSheet, Text, FlatList, Button, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const shopData = {
    shopName: "NexShop",

    categories: [
      {
        categoryId: "c1",
        categoryName: "Electronics",

        products: [
          {
            id: "p1",
            name: "Mobile",
            price: 15000,
            img: "https://images.unsplash.com/photo-1511702171634-5f897ff02aa9?w=300",
          },
          {
            id: "p2",
            name: "Laptop",
            price: 45000,
            img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300",
          },
          {
            id: "p3",
            name: "Headphones",
            price: 1500,
            img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
          },
        ],
      },

      {
        categoryId: "c2",
        categoryName: "Accessories",

        products: [
          {
            id: "p4",
            name: "Smart Watch",
            price: 2500,
            img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
          },
          {
            id: "p5",
            name: "Camera",
            price: 12000,
            img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300",
          },
          {
            id: "p6",
            name: "Keyboard",
            price: 800,
            img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300",
          },
        ],
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Product List</Text>

      <FlatList
        data={shopData.categories[0].products}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row" }}>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Image
              source={{ uri: item.img }}
              style={{ width: 80, height: 80 }}
            />
          </View>
        )}
      />

      <FlatList
        data={shopData.categories[1].products}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row" }}>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Image
              source={{ uri: item.img }}
              style={{ height: 100, width: 100 }}
            />
          </View>
        )}
      />

      <Text style={styles.paragraph}>Your Cart</Text>

      <Text style={styles.paragraph}>Total Price</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
