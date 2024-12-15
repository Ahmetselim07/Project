import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import IconCard from "../components/IconCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import BodyCard from "../components/BodyCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FooterCard from "../components/FooterCard";
import FontAwesome from "@expo/vector-icons";
import { useState } from "react";
import PaymentCard from "../components/PaymentCard";
import { BlurView } from "expo-blur";

const ImageDetails = ({
  navigation,
  navigation2,
  assetName,
  IconComponent,
  iconName,
  title,
  text1,
  bodyCardData = [],
  date,
  place,
  text2,
  Rp1,
  Rp2,
  Rp3,
  footerTitle,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      {isModalVisible && (
        <BlurView intensity={50} style={styles.blur} tint="light"></BlurView>
      )}
      <View style={styles.imageView}>
        <ImageBackground
          source={assetName}
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}
        >
          <View style={styles.headerView}>
            <View style={styles.overlay}>
              <TouchableOpacity onPress={navigation}>
                <IconCard
                  IconComponent={Ionicons}
                  iconName={"arrow-back-outline"}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.leftIcons}>
              <View style={{ marginRight: 10 }}>
              <TouchableOpacity onPress={navigation2}>
                <IconCard
                  IconComponent={MaterialIcons}
                  iconName={"bookmark-outline"}
                />
              </TouchableOpacity>
                
              </View>

              <IconCard IconComponent={Feather} iconName={"more-horizontal"} />
            </View>
          </View>

          <View style={styles.topBodyView}>
            <View style={styles.topBodyCardView}>
              {bodyCardData.map((item, index) => (
                <BodyCard
                  key={index}
                  IconComponent={item.IconComponent}
                  iconName={item.iconName}
                  title={item.title}
                />
              ))}
            </View>
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.moshingText}>{text1}</Text>
              <View style={{ flexDirection: "row" }}>
                <FontAwesome6 name="calendar" size={16} color="white" />
                <Text style={styles.imageDownText}>{date}</Text>
                <Entypo name="dot-single" size={24} color="white" />
                <EvilIcons name="location" size={18} color="white" />
                <Text style={styles.imageDownText}>{place}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.bodyView}>
        <View style={styles.halfBodyTopView}>
          <Text style={styles.halfBodyTopText}>About Event</Text>
        </View>
        <View style={styles.halfBodyDownView}>
          <Text style={styles.halfBodyDownText}>{text2}</Text>
        </View>
        <View style={styles.halfBodyTopView}>
          <Text style={styles.halfBodyDownText2}>Available Tickets</Text>
        </View>{" "}
        */Üstteki ile birebir aynı olduğundan yeni style oluşturmadım./*
        <View style={styles.buyingTicket}>
          {/* İlk Bilet */}

          <FooterCard
            IconComponent={MaterialCommunityIcons}
            iconName={"ticket-confirmation-outline"}
            title="First Pre-Sale"
            subtitle={Rp1}
            rightComponent={
              <View
                style={{
                  height: 30,
                  width: 70,
                  borderRadius: 12,
                  backgroundColor: "#F8F8FA",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Sold out
                </Text>
              </View>
            }
          />

          {/* İkinci Bilet */}

          <FooterCard
            IconComponent={MaterialCommunityIcons}
            iconName={"ticket-confirmation-outline"}
            title="Second Pre-Sale"
            subtitle={Rp2}
            rightComponent={
              <View style={styles.rightComponent}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.countText}>3</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
          />
          <FooterCard
            IconComponent={MaterialCommunityIcons}
            iconName={"ticket-confirmation-outline"}
            title="Third Pre-Sale"
            subtitle={Rp3}
            rightComponent={
              <View style={styles.rightComponent}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.countText}>0</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
          />
          <FooterCard
            IconComponent={MaterialCommunityIcons}
            iconName={"ticket-confirmation-outline"}
            title="Second Pre-Sale"
            subtitle="Rp100.000"
            rightComponent={
              <View style={styles.rightComponent}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.countText}>0</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
          />
        </View>
      </View>
      <View style={styles.footerButtonContainer}>
        <TouchableOpacity style={styles.buyTicketButton} onPress={toggleModal}>
          <Text style={styles.buyTicketButtonText}>Buy Ticket</Text>
        </TouchableOpacity>
      </View>
      <PaymentCard
        isVisible={isModalVisible}
        onClose={toggleModal}
        title={text1}
        navigation={navigation}
      />
    </View>
  );
};

export default ImageDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buyingTicket: {
    marginTop: 20, // Üstte biraz boşluk
  },
  ticketRow: {
    flexDirection: "row", // Yatay düzen
    justifyContent: "space-between", // Sol ve sağ hizalama
    alignItems: "center", // Dikey hizalama
    marginBottom: 15, // Satırlar arası boşluk
  },

  leftIcons: {
    flexDirection: "row",
  },
  imageView: {
    flex: 1,
  },
  imageDownView: {
    flexDirection: "row",
    alignItems: "center",
  },

  moshingText: {
    color: "white",
    marginTop: 10,
    fontSize: 23,
    fontWeight: "bold",
  },
  imageDownText: {
    color: "white",
    marginLeft: 5,
    fontSize: 14,
  },
  topBodyView: {
    position: "absolute",

    borderColor: "white",
    top: 280,
    height: 120,
    width: "100%",
  },
  blur: {
    ...StyleSheet.absoluteFill, // Ekranın tamamını kaplayan blur efekti
    zIndex: 1,
    height: "26%",
    bottom: 0,
    position: "absolute",
  },
  topBodyCardView: {
    flexDirection: "row",
    marginLeft: 15,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  imageStyle: {
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    alignItems: "flex-start",

    flexDirection: "row",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  headerView: {
    marginHorizontal: 15,
    flexDirection: "row",
    paddingTop: 40,
  },
  cardText: {
    fontSize: 16,
    color: "#333",
  },
  bodyView: {
    flex: 1,
    padding: 20,
  },
  bodyText: {
    fontSize: 16,
    color: "#333",
  },
  halfBodyTopView: {
    flex: 0.8,
  },
  halfBodyDownView: {
    flex: 2,
  },
  buyingTicket: {
    flex: 4,
  },
  halfBodyTopText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  halfBodyDownText: {
    color: "#6F6987",
    lineHeight: 20,
  },
  halfBodyDownText2: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5, // Butonlar arası boşluk
  },
  buttonText: {
    color: "#151515",
    fontSize: 16,
    fontWeight: "bold",
  },
  countText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginHorizontal: 5,
  },
  footerButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 15,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  buyTicketButton: {
    backgroundColor: "#7161EF",
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: "center",
  },
  buyTicketButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
