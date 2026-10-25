import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.txt}>My Profile</Text>

        <Text style={styles.txt}>Name : piyush</Text>

        <Text style={styles.txt}>age : 26</Text>

        <Text style={styles.txt}>role : rn dev</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  txt: {
    fontSize: 30,
    color: "white",
  },

  box: {
    borderRadius: 15,
    padding: 20,
    width: 250,
    height: 250,
    backgroundColor: "brown",
  },
});
