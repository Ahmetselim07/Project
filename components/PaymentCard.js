import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import PaymentHeader from "./PaymentHeader";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const { height } = Dimensions.get("window");

const PaymentCard = ({ isVisible, onClose, title }) => {
  const navigation = useNavigation();

  const [selectedMethod, setSelectedMethod] = useState("virtual");
  const selectedCard = useSelector((state) => state.card.selectedCard);

  if (!isVisible) return null;

  return (
    <View style={styles.modalContainer}>
      {/* Kaplama Alanı */}
      <TouchableOpacity style={styles.overlay} onPress={onClose} />

      {/* Kart */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            In App Payment
          </Text>
          <Entypo name="cross" size={24} color="black" />
        </View>

        <View style={styles.topBody}>
          <PaymentHeader
            selected={selectedMethod}
            onSelectionChange={setSelectedMethod}
          />
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>{title}</Text>
          <Text style={{ fontSize: 14, color: "#534C70", marginTop: 5 }}>
            3 Seconds Pre-Sale Tickets
          </Text>
          <View
            style={{
              borderColor: "#ccc",
              marginVertical: 10,
              paddingBottom: 10,
            }}
          />
        </View>

        <View style={styles.downBody}>
          <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 5 }}>
            Rp300.000
          </Text>
          <Text style={{ marginTop: 10, fontWeight: "bold" }}>
            Payment Method
          </Text>
          {selectedMethod === "virtual" && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,

                borderColor: "#ccc",
                borderRadius: 10,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    height: 30,
                    width: 50,
                    borderWidth: 0.5,
                    borderRadius: 6,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    borderColor: "grey",
                  }}
                >
                  <Image
                    source={require("../assets/images/gopay_icon.png")}
                    style={{ height: 12, width: 12, marginRight: 3 }}
                  />
                  <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                    gopay
                  </Text>
                </View>
                <Text style={{ marginLeft: 10, fontWeight: "600" }}>
                  8971 3190 0666
                </Text>
              </View>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Text style={{ color: "#7161EF", fontWeight: "600" }}>
                  Change
                </Text>
                <AntDesign
                  name="down"
                  size={12}
                  color="#7161EF"
                  style={{ marginLeft: 5 }}
                />
              </TouchableOpacity>
            </View>
          )}
          {selectedMethod === "transfer" && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
                padding: 15,
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 10,
                backgroundColor: "#f9f9f9",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{
                    fontWeight: "600",
                    marginRight: 10,
                    fontSize: 16,
                    color: "#333",
                  }}
                >
                  IBAN:
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    color: "#444",
                    letterSpacing: 1.2,
                  }}
                >
                  TR33 0006 1005 1978 6457 8413 26
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 5,
                  borderWidth: 1,
                  borderColor: "#7161EF",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{ color: "#7161EF", fontWeight: "600", fontSize: 12 }}
                >
                  Change
                </Text>
                <AntDesign
                  name="down"
                  size={12}
                  color="#7161EF"
                  style={{ marginLeft: 5 }}
                />
              </TouchableOpacity>
            </View>
          )}

          {selectedMethod === "card" && (
            <View>
              {selectedCard ? (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: 15,
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 10,
                    marginVertical: 10,
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  {/* Kredi Kartı İkonu */}
                  <Entypo
                    name="credit-card"
                    size={40}
                    color="#444"
                    style={{ marginRight: 15 }}
                  />

                  {/* Kart Detayları */}
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#444",
                      }}
                    >
                      {selectedCard.name}
                    </Text>
                    <Text style={{ fontSize: 16, color: "#333", marginTop: 5 }}>
                      **** **** **** {selectedCard.cardNumber.slice(-4)}
                    </Text>
                  </View>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{ fontSize: 16, fontWeight: "600", color: "grey" }}
                  >
                    No Cards Yet
                  </Text>
                  <TouchableOpacity
                    style={styles.addCardButton}
                    onPress={() => navigation.navigate("AddCard")}
                  >
                    <Text style={styles.addCardButtonText}>Add Card</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
        </View>

        <View style={styles.topFooter}>
          <Text
            style={{
              margin: 10,
              color: "#2152FF",
              lineHeight: 20,
              padding: 5,
              fontSize: 13.5,
            }}
          >
            By Purchasing this ticket, you agree to the terms and conditions of
            Moshing Fest 2024. Please review them carefully before completing
            your purchase.
          </Text>
        </View>

        <View style={styles.downFooter}>
          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buyNowButtonText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PaymentCard;

// Styles
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    flex: 1,
    borderBottomWidth: 0.3,
  },
  cardDetailsContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  cardName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
  },
  cardInfoContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  cardNumber: {
    fontSize: 16,
    color: "#333",
  },
  topBody: {
    flex: 3,
    borderBottomWidth: 0.5,
  },
  downBody: {
    flex: 3,
    width: "100%",
    borderBottomWidth: 0.5,
  },
  topFooter: {
    flex: 2,
    width: "100%",
    backgroundColor: "#EAEEFF",
    marginTop: 40,
    borderRadius: 12,
  },
  downFooter: {
    flex: 3,
    paddingTop: 20,
    width: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  card: {
    height: height * 0.8,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  buyNowButton: {
    backgroundColor: "#7161EF",
    paddingVertical: 15,
    marginVertical: 3,
    borderRadius: 20,
    alignItems: "center",
  },
  buyNowButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#E9E8ED",
    paddingVertical: 15,
    marginVertical: 3,
    borderRadius: 20,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  addCardButton: {
    backgroundColor: "#7161EF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  addCardButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
