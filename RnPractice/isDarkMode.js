import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleIsDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "black" : "white" },
      ]}
    >
      <Text
        style={{
          color: isDarkMode ? "white" : "black",
          fontSize: 24,
          marginBottom: 20,
        }}
      >
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </Text>

      <Button
        title={isDarkMode ? "Turn Off Dark Mode" : "Turn On Dark Mode"}
        onPress={handleIsDarkMode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
});
