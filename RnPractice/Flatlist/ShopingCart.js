import React, { useState } from "react";
import { StyleSheet, Text, FlatList, Button, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

// Combine all nested product arrays into one
const products = shopData.categories.flatMap((category) =>
  category.products.map((product) => ({
    ...product,
    categoryName: category.categoryName,
  })),
);

export default function App() {
  const [cart, setCart] = useState([]);

  // Add a product to the cart
  const handleAdd = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove a product from the cart
  const handleRemove = (id) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === id);

      if (index === -1) return prevCart;

      return prevCart.filter((item, i) => i !== index);
    });
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>NexShop Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image
              source={{ uri: item.img }}
              style={styles.image}
              resizeMode="contain"
            />

            <View style={styles.productInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>₹{item.price}</Text>
              <Text style={styles.category}>{item.categoryName}</Text>
              <Button title="Add to Cart" onPress={() => handleAdd(item)} />
            </View>
          </View>
        )}
        ListFooterComponent={
          <View style={styles.cartSection}>
            <Text style={styles.heading}>Your Cart</Text>

            {cart.length === 0 ? (
              <Text>Your cart is empty.</Text>
            ) : (
              cart.map((item, index) => (
                <View key={`${item.id}-${index}`} style={styles.cartItem}>
                  <View style={styles.cartInfo}>
                    <Text>{item.name}</Text>
                    <Text>₹{item.price}</Text>
                  </View>

                  <Button
                    title="Remove"
                    color="red"
                    onPress={() => handleRemove(item.id)}
                  />
                </View>
              ))
            )}

            <Text style={styles.total}>Items: {cart.length}</Text>
            <Text style={styles.total}>
              Total Price: ₹{totalPrice.toLocaleString("en-IN")}
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 12,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  productCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
    gap: 5,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
  },
  category: {
    color: "#666",
    fontSize: 12,
  },
  cartSection: {
    backgroundColor: "white",
    padding: 15,
    marginTop: 15,
    marginBottom: 25,
    borderRadius: 10,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 10,
    gap: 10,
  },
  cartInfo: {
    flex: 1,
    gap: 4,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12,
  },
});



//myCode
import { StyleSheet, Text, FlatList, ScrollView,  Button,  Image, View } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import {useState} from 'react'



export default function App() {

  const [cart, setCart] = useState([]);

  const shopData = {
  shopName: 'NexShop',

  categories: [
    {
      categoryId: 'c1',
      categoryName: 'Electronics',

      products: [
        {
          id: 'p1',
          name: 'Mobile',
          price: 15000,
          img: 'https://images.unsplash.com/photo-1511702171634-5f897ff02aa9?w=300',
        },
        {
          id: 'p2',
          name: 'Laptop',
          price: 45000,
          img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300',
        },
        {
          id: 'p3',
          name: 'Headphones',
          price: 1500,
          img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
        },
      ],
    },

    {
      categoryId: 'c2',
      categoryName: 'Accessories',

      products: [
        {
          id: 'p4',
          name: 'Smart Watch',
          price: 2500,
          img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
        },
        {
          id: 'p5',
          name: 'Camera',
          price: 12000,
          img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300',
        },
        {
          id: 'p6',
          name: 'Keyboard',
          price: 800,
          img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300',
        },
      ],
    },
  ],
};

const products = shopData.categories.flatMap(category =>
  category.products.map(product => ({
    ...product,
    categoryName: category.categoryName,
  }))
);

const totalPrice = cart.reduce(
  (total, item) => total + item.price,
  0
);


const handleAdd = (product) => {
  setCart([...cart, product]);
};

const handleRemove = (indexToRemove) => {
  setCart(cart.filter((item, index) => index !== indexToRemove));
};

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.paragraph}>
        Product List
      </Text>

      <FlatList  
        data = {products}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => 
        <View style = {{flexDirection : 'row' ,margin : 10}}>

        <Image 
          source = {{uri : item.img}}
           style={{ width: 80, height: 80 }}
        /> 
        <View style = {{margin : 5}}>
          
        <Text>{item.id}</Text>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        
        </View>

        <Button title  = "Add to Cart"   onPress={() => handleAdd(item)}
        
        / >
       </View>
        }
      />
      

        <Text style={styles.paragraph}>
        Your Cart
      </Text>

      {cart.map((item, index) => (
  <View key={`${item.id}-${index}`} style={{ margin: 10 }}>
    <Text>{item.name}</Text>
    <Text>Price: ₹{item.price}</Text> 

   <Button
  title="Remove"
  color="red"
  onPress={() => handleRemove(index)}
/>
  </View>
))}


<View style = {{justifyContent : 'center'}}> <Text style={styles.paragraph}>
        Total Price : {totalPrice}
        
      </Text>
      <Text>Item : {cart.length}</Text>
</View>
      

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
