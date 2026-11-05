import React, { useCallback, useState } from "react";

import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  RefreshControl,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";

// Fake product data
const products = [
  { id: "1", name: "T-shirt", price: "₹499" },
  { id: "2", name: "Shoes", price: "₹1,499" },
  { id: "3", name: "Backpack", price: "₹899" },
];

// Fake category data
const categories = [
  { title: "Fruits", data: ["Apple", "Banana", "Orange"] },
  { title: "Vegetables", data: ["Carrot", "Potato", "Tomato"] },
];

// Reusable heading component
function DemoTitle({ children }) {
  return <Text style={styles.demoTitle}>{children}</Text>;
}

// Reusable card component
function DemoCard({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default function App() {
  const [name, setName] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Tap a button to see its result.");
  const [refreshing, setRefreshing] = useState(false);

  const { width } = useWindowDimensions();

  // 1. RefreshControl
  const handleRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
      setMessage("Refresh completed!");
    }, 1000);
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* 2. StatusBar */}
      <StatusBar backgroundColor="#17324d" barStyle="light-content" />

      {/* 3. ScrollView */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        <Text style={styles.heading}>React Native Components</Text>

        <Text style={styles.subtitle}>Beginner examples in one file</Text>

        {/* 4. View */}
        <DemoTitle>1. View</DemoTitle>

        <DemoCard>
          <View style={styles.row}>
            <View style={[styles.colourBox, { backgroundColor: "#e76f51" }]} />

            <View style={[styles.colourBox, { backgroundColor: "#2a9d8f" }]} />

            <View style={[styles.colourBox, { backgroundColor: "#457b9d" }]} />
          </View>

          <Text style={styles.help}>
            View is a container for other components.
          </Text>
        </DemoCard>

        {/* 5. Text */}
        <DemoTitle>2. Text</DemoTitle>

        <DemoCard>
          <Text style={styles.normalText}>Normal text</Text>

          <Text style={styles.boldText}>Bold text</Text>

          <Text style={styles.colouredText}>Colored text</Text>
        </DemoCard>

        {/* 6. Image */}
        <DemoTitle>3. Image</DemoTitle>

        <DemoCard>
          <Image
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.help}>
            Image displays a local or remote image.
          </Text>
        </DemoCard>

        {/* 7. ImageBackground */}
        <DemoTitle>4. ImageBackground</DemoTitle>

        <DemoCard>
          <ImageBackground
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
            style={styles.imageBackground}
            imageStyle={styles.imageBackgroundImage}
            resizeMode="cover"
          >
            <Text style={styles.imageBackgroundText}>Text over an image</Text>
          </ImageBackground>
        </DemoCard>

        {/* 8. TextInput */}
        <DemoTitle>5. TextInput</DemoTitle>

        <DemoCard>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#777"
            autoCapitalize="words"
            returnKeyType="done"
          />

          <Text style={styles.normalText}>Hello, {name || "friend"}!</Text>
        </DemoCard>

        {/* 9. Button */}
        <DemoTitle>6. Button</DemoTitle>

        <DemoCard>
          <Button
            title="Press the button"
            onPress={() => setMessage("Button was pressed!")}
          />

          <Text style={styles.help}>{message}</Text>
        </DemoCard>

        {/* 10. Pressable */}
        <DemoTitle>7. Pressable</DemoTitle>

        <DemoCard>
          <Pressable
            onPress={() => setCount((current) => current + 1)}
            style={({ pressed }) => [
              styles.actionButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.actionButtonText}>Tap me — count: {count}</Text>
          </Pressable>
        </DemoCard>

        {/* 11. TouchableOpacity */}
        <DemoTitle>8. TouchableOpacity</DemoTitle>

        <DemoCard>
          <TouchableOpacity
            style={styles.actionButton}
            activeOpacity={0.6}
            onPress={() => setMessage("TouchableOpacity was pressed!")}
          >
            <Text style={styles.actionButtonText}>Tap TouchableOpacity</Text>
          </TouchableOpacity>
        </DemoCard>

        {/* 12. TouchableHighlight */}
        <DemoTitle>9. TouchableHighlight</DemoTitle>

        <DemoCard>
          <TouchableHighlight
            style={styles.highlightButton}
            underlayColor="#1d3557"
            onPress={() => setMessage("TouchableHighlight was pressed!")}
          >
            <Text style={styles.actionButtonText}>Tap TouchableHighlight</Text>
          </TouchableHighlight>
        </DemoCard>

        {/* 13. TouchableWithoutFeedback */}
        <DemoTitle>10. TouchableWithoutFeedback</DemoTitle>

        <DemoCard>
          <TouchableWithoutFeedback
            onPress={() => setMessage("TouchableWithoutFeedback was pressed!")}
          >
            <View style={styles.feedbackArea}>
              <Text style={styles.normalText}>Tap this text area</Text>
            </View>
          </TouchableWithoutFeedback>
        </DemoCard>

        {/* 14. Switch */}
        <DemoTitle>11. Switch</DemoTitle>

        <DemoCard>
          <View style={styles.rowBetween}>
            <Text style={styles.normalText}>Notifications</Text>

            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
            />
          </View>

          <Text style={styles.help}>
            Status: {notificationsEnabled ? "Enabled" : "Disabled"}
          </Text>
        </DemoCard>

        {/* 15. ActivityIndicator */}
        <DemoTitle>12. ActivityIndicator</DemoTitle>

        <DemoCard>
          <ActivityIndicator size="large" color="#2563eb" />

          <Text style={styles.help}>
            Use this indicator while loading data.
          </Text>
        </DemoCard>

        {/* 16. FlatList */}
        <DemoTitle>13. FlatList</DemoTitle>

        <DemoCard>
          <FlatList
            horizontal
            data={products}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.productCard}>
                <Text style={styles.productName}>{item.name}</Text>

                <Text style={styles.normalText}>{item.price}</Text>
              </View>
            )}
          />

          <Text style={styles.help}>
            FlatList efficiently renders a list of items.
          </Text>
        </DemoCard>

        {/* 17. Modal */}
        <DemoTitle>14. Modal</DemoTitle>

        <DemoCard>
          <Button title="Open Modal" onPress={() => setModalVisible(true)} />

          <Text style={styles.help}>
            Modal displays content over the current screen.
          </Text>
        </DemoCard>

        {/* 18. SectionList inside Modal */}
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackdrop}>
            <View style={styles.modalCard}>
              <Text style={styles.modalTitle}>15. SectionList</Text>

              <Text style={styles.help}>Items grouped into sections.</Text>

              <SectionList
                sections={categories}
                keyExtractor={(item, index) => `${item}-${index}`}
                style={styles.sectionList}
                renderSectionHeader={({ section }) => (
                  <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                renderItem={({ item }) => (
                  <Text style={styles.sectionItem}>{item}</Text>
                )}
              />

              <Button
                title="Close Modal"
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </Modal>

        {/* 19. KeyboardAvoidingView */}
        <DemoTitle>16. KeyboardAvoidingView</DemoTitle>

        <DemoCard>
          <Text style={styles.help}>
            The entire demo uses KeyboardAvoidingView to help prevent the
            keyboard from covering content on supported platforms.
          </Text>
        </DemoCard>

        {/* 20. RefreshControl */}
        <DemoTitle>17. RefreshControl</DemoTitle>

        <DemoCard>
          <Text style={styles.normalText}>
            Pull down from the top to refresh.
          </Text>

          <Text style={styles.help}>
            Refreshing: {refreshing ? "Yes" : "No"}
          </Text>
        </DemoCard>

        {/* 21. useWindowDimensions */}
        <DemoTitle>18. Screen Dimensions</DemoTitle>

        <DemoCard>
          <Text style={styles.normalText}>
            Window width: {Math.round(width)} dp
          </Text>

          <Text style={styles.help}>
            useWindowDimensions updates when the window size changes. It is a
            hook, not a component.
          </Text>
        </DemoCard>

        {/* StyleSheet */}
        <Text style={styles.footer}>End of React Native components demo.</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f3f6fa",
  },

  scroll: {
    flex: 1,
  },

  content: {
    padding: 16,
    paddingBottom: 40,
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: "#17324d",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: "#526273",
    marginBottom: 18,
  },

  demoTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#17324d",
    marginTop: 16,
    marginBottom: 8,
  },

  card: {
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e1e7ef",
    gap: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  colourBox: {
    width: 54,
    height: 54,
    borderRadius: 10,
  },

  normalText: {
    fontSize: 16,
    color: "#243447",
  },

  boldText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#243447",
  },

  colouredText: {
    fontSize: 16,
    color: "#2563eb",
  },

  help: {
    fontSize: 13,
    lineHeight: 19,
    color: "#64748b",
  },

  logo: {
    width: 60,
    height: 60,
    alignSelf: "flex-start",
  },

  imageBackground: {
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cbd5e1",
  },

  imageBackgroundImage: {
    opacity: 0.35,
  },

  imageBackgroundText: {
    padding: 12,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#17324d",
    color: "#ffffff",
    fontWeight: "700",
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#b8c4d2",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: "#243447",
    fontSize: 16,
  },

  actionButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#2563eb",
  },

  actionButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },

  pressed: {
    opacity: 0.65,
    transform: [{ scale: 0.99 }],
  },

  highlightButton: {
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    backgroundColor: "#2563eb",
  },

  feedbackArea: {
    padding: 12,
    backgroundColor: "#eef2ff",
    borderRadius: 8,
  },

  productCard: {
    width: 140,
    marginRight: 10,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#eef2ff",
    gap: 8,
  },

  productName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#17324d",
  },

  modalBackdrop: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },

  modalCard: {
    maxHeight: "85%",
    padding: 18,
    borderRadius: 14,
    backgroundColor: "#ffffff",
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#17324d",
    marginBottom: 6,
  },

  sectionList: {
    marginVertical: 10,
    flexGrow: 0,
  },

  sectionHeader: {
    backgroundColor: "#dbeafe",
    color: "#17324d",
    fontWeight: "700",
    fontSize: 16,
    padding: 8,
    marginTop: 6,
  },

  sectionItem: {
    fontSize: 15,
    color: "#243447",
    padding: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#dbe2ea",
  },

  footer: {
    marginTop: 24,
    textAlign: "center",
    fontSize: 12,
    color: "#64748b",
  },
});
