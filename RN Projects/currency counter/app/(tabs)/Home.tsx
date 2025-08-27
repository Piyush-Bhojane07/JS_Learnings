import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import countryList from "../../constants/code"; // your currency-country mapping

export default function Home() {
  const [money, setMoney] = useState("");
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [result, setResult] = useState(null);

  const countryData = Object.entries(countryList).map(([code, country]) => ({
    label: `${code.toUpperCase()} - ${country}`,
    value: code.toLowerCase(),
  }));

  // function to fetch conversion
  const convertCurrency = async () => {
    if (!money || isNaN(money)) {
      alert("Please enter a valid amount");
      return;
    }

    try {
      const url = `https://latest.currency-api.pages.dev/v1/currencies/${fromCurrency}.json`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const rate = data[fromCurrency][toCurrency]; // conversion rate
      console.log(rate);
      if (rate) {
        const converted = (parseFloat(money) * rate).toFixed(2);
        setResult(
          `${money} ${fromCurrency.toUpperCase()} = ${converted} ${toCurrency.toUpperCase()}`
        );
      } else {
        setResult("Conversion not available.");
      }
    } catch (error) {
      console.error("Error fetching conversion:", error);
      setResult("Error fetching conversion.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Currency Calculator</Text>

      <TextInput
        style={styles.inputStyle}
        placeholder="Enter amount"
        value={money}
        keyboardType="numeric"
        onChangeText={(text) => setMoney(text)}
      />

      {/* From currency */}
      <View style={styles.row}>
        <Image
          source={{
            uri: `https://flagsapi.com/${fromCurrency
              .toUpperCase()
              .slice(0, 2)}/flat/64.png`,
          }}
          style={styles.flag}
        />
        <Dropdown
          data={countryData}
          labelField="label"
          valueField="value"
          style={styles.dropdown}
          value={fromCurrency}
          onChange={(item) => setFromCurrency(item.value)}
        />
      </View>

      {/* To currency */}
      <View style={styles.row}>
        <Image
          source={{
            uri: `https://flagsapi.com/${toCurrency
              .toUpperCase()
              .slice(0, 2)}/flat/64.png`,
          }}
          style={styles.flag}
        />
        <Dropdown
          data={countryData}
          labelField="label"
          valueField="value"
          style={styles.dropdown}
          value={toCurrency}
          onChange={(item) => setToCurrency(item.value)}
        />
      </View>

      {/* Result */}
      {result && (
        <View style={styles.txtDoller}>
          <Text style={styles.txtDollerTXT}>{result}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.convertBtn} onPress={convertCurrency}>
        <Text style={styles.convertBtnTxt}>Convert</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
  },
  titleText: {
    fontSize: 30,
    color: "green",
    alignSelf: "center",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    height: 60,
    width: 280,
    borderRadius: 10,
  },
  inputStyle: {
    fontSize: 22,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    margin: 20,
  },
  convertBtn: {
    width: "90%",
    borderWidth: 1,
    borderColor: "black",
    padding: 15,
    borderRadius: 10,
    margin: 20,
    backgroundColor: "grey",
  },
  convertBtnTxt: {
    alignSelf: "center",
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  txtDoller: {
    alignSelf: "center",
    marginVertical: 15,
  },
  txtDollerTXT: {
    fontSize: 20,
    fontWeight: "bold",
  },
  flag: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
