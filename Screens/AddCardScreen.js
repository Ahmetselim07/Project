import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  TextInput,
} from "react-native";
import CreditCard from "react-native-credit-card-display";
import { useDispatch } from "react-redux";
import { setSelectedCard } from "../redux/cardSlice";
const AddCardScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
    name: "",
  });
  const [isFlipped, setIsFlipped] = useState(false);
  

  // Kart numarasını dörtlü gruplar halinde formatlar
  const formatCardNumber = (number) => {
    return number
      .replace(/\s?/g, "") // Boşlukları kaldır
      .replace(/(\d{4})/g, "$1 ") // Dörtlü gruplara ayır
      .trim(); // Fazla boşlukları kaldır
  };

  const handleCardNumberInput = (text) => {
    let formattedNumber = text.replace(/\D/g, ""); // Sadece sayıları al
    if (formattedNumber.length > 16)
      formattedNumber = formattedNumber.slice(0, 16); // Maksimum 16 karakter
    setCardDetails({
      ...cardDetails,
      cardNumber: formatCardNumber(formattedNumber), // Dörtlü gruplar halinde ayır
    });
    setIsFlipped(false); // Kartın ön yüzünü göster
  };

  // Ay ve yıl girişini formatlar
  const handleExpiryInput = (text) => {
    let formattedText = text.replace(/\D/g, ""); // Sadece sayıları al
    if (formattedText.length > 4) formattedText = formattedText.slice(0, 4); // Maksimum 4 karakter
    if (formattedText.length >= 3) {
      // 3 veya daha fazla hane varsa araya "/" koy
      formattedText = `${formattedText.slice(0, 2)}/${formattedText.slice(2)}`;
    }
    setCardDetails({ ...cardDetails, expiry: formattedText });
    setIsFlipped(true);
  };

  const handleSaveCard = () => {
    if (
      !cardDetails.cardNumber ||
      !cardDetails.expiry ||
      !cardDetails.cvc ||
      !cardDetails.name
    ) {
      Alert.alert("Error", "Please fill in all fields to add a card.");
      return;
    }
    dispatch(setSelectedCard(cardDetails));
    Alert.alert("Success", "Card added successfully!");
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Kredi Kartı Önizleme */}
      <View style={styles.cardPreviewContainer}>
        <CreditCard
          number={cardDetails.cardNumber || "XXXX XXXX XXXX XXXX"} // Dörtlü gruplar halinde göster
          cvc={cardDetails.cvc || "CVV"}
          name={cardDetails.name || "Cardholder Name"}
          expiry={cardDetails.expiry || "MM/YY"} // Ay ve yıl formatında göster
          flipped={isFlipped}
          
        />
      </View>

      {/* Kart Bilgisi Girişi */}
      <Text style={styles.inputLabel}>Cardholder Name</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={cardDetails.name}
        onChangeText={(text) => {
          setCardDetails({ ...cardDetails, name: text });
          setIsFlipped(false);
        }}
      />

      <Text style={styles.inputLabel}>Card Number</Text>
      <TextInput
        placeholder="1234 5678 9012 3456"
        style={styles.input}
        value={cardDetails.cardNumber}
        onChangeText={handleCardNumberInput}
        keyboardType="number-pad"
      />

      <Text style={styles.inputLabel}>Expiry Date (MM/YY)</Text>
      <TextInput
        placeholder="MM/YY"
        style={styles.input}
        value={cardDetails.expiry}
        onChangeText={handleExpiryInput}
        keyboardType="number-pad"
      />

      <View style={styles.column}>
        <Text style={styles.inputLabel}>CVC</Text>
        <TextInput
          placeholder="123"
          style={styles.input}
          value={cardDetails.cvc}
          onChangeText={(text) => {
            if (text.length <= 3) {
              setCardDetails({ ...cardDetails, cvc: text });
              setIsFlipped(true); // CVC girilirken kartın arka yüzünü göster
            }
          }}
          keyboardType="number-pad"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveCard}>
        <Text style={styles.saveButtonText}>Save Card</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddCardScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  cardPreviewContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
  saveButton: {
    backgroundColor: "#7161EF",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
