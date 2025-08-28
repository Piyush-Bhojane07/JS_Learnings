import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Expo vector icons

export default function Header() {
  return (
    <View style={styles.header}>
      {/* Left side - Title */}
      <Text style={styles.title}>Home</Text>

      {/* Right side - Icons */}
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="person-circle-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    elevation: 4, // shadow for Android
    shadowColor: "#000", // shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12, // spacing between icons
  },
  iconBtn: {
    marginLeft: 12,
  },
});
