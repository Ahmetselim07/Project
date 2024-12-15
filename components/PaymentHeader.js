import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
const PaymentHeader = ({ selected, onSelectionChange }) => {
  const handlePress = (option) => {
    onSelectionChange(option);
  };

  return (
    <View style={styles.topBody}>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selected === "virtual" && styles.selectedButton,
          ]}
          onPress={() => handlePress("virtual")}
        >
          <Text
            style={[
              styles.optionText,
              selected === "virtual" && styles.selectedText,
            ]}
          >
            Virtual Account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            selected === "card" && styles.selectedButton,
          ]}
          onPress={() => handlePress("card")}
        >
          <Text
            style={[
              styles.optionText,
              selected === "card" && styles.selectedText,
            ]}
          >
            Card
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            selected === "transfer" && styles.selectedButton,
          ]}
          onPress={() => handlePress("transfer")}
        >
          <Text
            style={[
              styles.optionText,
              selected === "transfer" && styles.selectedText,
            ]}
          >
            Transfer
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default PaymentHeader;

const styles = StyleSheet.create({
  topBody: {
    width: "100%",
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e0e0e0", // Arka plan
    borderRadius: 20, // Genel yuvarlak köşeler
    padding: 5,
  },
  optionButton: {
    flex: 1, // Tüm butonların eşit genişlikte olması
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 15, // Buton köşeleri
    backgroundColor: "#e0e0e0", // Varsayılan arka plan
  },
  selectedButton: {
    backgroundColor: "#fff", // Seçili butonun arka planı
    borderRadius: 15, // Seçili durumun köşeleri sabit
  },
  optionText: {
    fontSize: 14,
    color: "#555", // Varsayılan metin rengi
  },
  selectedText: {
    fontWeight: "bold",
    color: "#333", // Seçili metin rengi
  },
});
