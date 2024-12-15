import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageDetails from "../components/ImageDetails";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const image1 = require("../assets/images/image1.jpg");

const BernadyaConcert = ({navigation}) => {
  
  return (
    <ImageDetails
      navigation={() => navigation.navigate("Home")}
      assetName={image1}
      IconComponent={Ionicons}
      iconName={"musical-notes-outline"}
      title={"Music"}
      bodyCardData={[
        {
          IconComponent: Ionicons,
          iconName: "musical-notes-outline",
          title: "Music",
        },
        {
          IconComponent: MaterialCommunityIcons,
          iconName: "party-popper",
          title: "Festival",
        },
        {
          IconComponent: Ionicons,
          iconName: "star-outline",
          title: "Popular",
        },
      ]}
      text1={"Bernadya Solo Concert"}
      date={"24 August 2024"}
      place={"Mojokerto, East Java"}
      text2={
        "Bernadya Solo Concert 2024 is a special event where Bernadya will give music lovers an unforgettable night with her enchanting voice and unique performance. This concert will give you emotional moments with the artist's most popular songs."
      }
      Rp1={"Rp250.000"}
      Rp2={"Rp400.000"}
      Rp3={"Rp500.000"}
    />
  );
};

export default BernadyaConcert;

const styles = StyleSheet.create({});
