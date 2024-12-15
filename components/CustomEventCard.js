import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const CustomEventCard = ({
  imageSource,
  date,
  title,
  description1,
  description2,
  month,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
        {/* Resim */}
        <ImageBackground
          source={imageSource}
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}
        >
          {/* Sol üst köşe: Tarih kutusu */}
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{month}</Text>
            <Text style={{ fontWeight: "bold" }}>{date}</Text>
          </View>
        </ImageBackground>

        {/* Yazılar */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description1}</Text>
          <View style={styles.description2View}>
            <Entypo name="location-pin" size={18} color="#1C1343" />
            <Text style={styles.description2}>{description2}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomEventCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 225,
    height: 225,
    marginLeft: 15,
  },
  imageBackground: {
    width: "100%", // Resmin kart genişliğine göre ayarlanması
    height: 165, // Resim yüksekliği
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  imageStyle: {
    resizeMode: "cover", // Resmin tüm alanı kaplamasını sağlar
    borderRadius: 12,
  },
  dateContainer: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
  },
  dateText: {
    color: "black",
    fontSize: 10,
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1, // Kalan alanı doldurur
    paddingVertical: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333", // Yazı rengi
  },
  description: {
    fontSize: 16,
    color: "#6857ED",
    lineHeight: 25,
  },
  description2View: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    position:'relative',
    right:4
  },
  description2: {
    fontSize: 12,
    lineHeight: 25, // Satır yüksekliğini simge boyutuna uygun yap
    fontWeight: "500",
  },
});
