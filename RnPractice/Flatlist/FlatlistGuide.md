

const products = [
  { id: '1', name: 'Laptop' },
  { id: '2', name: 'Mobile' },
];

<FlatList data={products} />


const products = {
  productList: [
    { id: '1', name: 'Laptop' },
    { id: '2', name: 'Mobile' },
  ],
};
<FlatList data={products.productList} />

const data = {
  shop: {
    products: [
      { id: '1', name: 'Laptop' },
    ],
  },
};

<FlatList data={data.shop.products} />


const store = {
  inventory: {
    items: [
      { id: '1', name: 'Phone' },
      { id: '2', name: 'Tablet' },
    ],
  },
};
<Flatlist 
data={store.inventory.items}
keyExtractor={(item) => item.id}
renderItem={({ item }) => (
  <View style={{ flexDirection: 'row' }}>
    <Text style={{ fontSize: 20, padding: 5 }}>
      {item.id}
    </Text>
  </View>
)}/>