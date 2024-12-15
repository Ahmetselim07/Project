import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CustomTextInput from "../components/CustomTextInput";
import CustomCard from "../components/CustomCard";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CustomEventCard from "../components/CustomEventCard";
import BottomNavigationBar from "../components/BottomNavigationBar";
import MoshingFestDetails from "./MoshingFestDetails";

const HomePage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#E0E3FF", "white"]} // Gradient için gerekli renkler
        style={{ flex: 1 }}
      >
        <View style={styles.headerView}>
          <View style={styles.centerContent}>
            <Entypo name="location-pin" size={14} color="#1C1343" />

            <Text style={styles.headerText}>Jombang, East Java</Text>
            <AntDesign name="down" size={12} color="#1E1C33" />
          </View>

          <MaterialIcons name="notifications-none" size={24} color="black" />
        </View>
        <View style={styles.bodyTextView}>
          <Text style={styles.bodyText1}>Hello, Sasmita</Text>
          <Text style={styles.bodyText2}>There are 32 events</Text>
          <Text style={styles.bodyText2}>around your location.</Text>
        </View>
        <View style={styles.inputView}>
          <CustomTextInput placeholder={"Search your favourites events ..."} />
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scroll} // ScrollView için yükseklik belirleniyor
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.cardsView}>
            <CustomCard
              text={"Music"}
              IconComponent={Ionicons}
              iconName={"musical-notes-outline"}
            />
            <CustomCard
              IconComponent={MaterialCommunityIcons}
              text={"Clothes"}
              iconName={"tshirt-crew-outline"}
            />
            <CustomCard
              IconComponent={MaterialCommunityIcons}
              text={"Festival"}
              iconName={"party-popper"}
            />
            <CustomCard
              IconComponent={MaterialCommunityIcons}
              text={"Food"}
              iconName={"food-fork-drink"}
            />
          </View>
        </ScrollView>
        <View style={styles.bodyTextView2}>
          <Text style={styles.bodyText3}>Upcoming Events</Text>
          <Text style={styles.bodyText4}>See all events</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.customEventCardView}>
            <CustomEventCard
              onPress={() => navigation.replace("BernadyaConcert")}
              imageSource={require("../assets/images/image1.jpg")} // Arka plan resmi
              month={"Aug"}
              date="24" // Tarih
              title="Bernadya Solo Concert" // Başlık
              description1="Rp250k - Rp500k" // İlk açıklama
              description2="Mojokerto, East Java" // İkinci açıklama
            />
            <CustomEventCard
              onPress={() => navigation.replace("MoshingFest")}
              imageSource={require("../assets/images/image2.jpeg")} // Arka plan resmi
              month={"Aug"}
              date="24" // Tarih
              title="Moshing Fest 2024" // Başlık
              description1="Rp80k - Rp250k" // İlk açıklama
              description2="Jombang,East Java" // İkinci açıklama
            />
          </View>
        </ScrollView>
        <BottomNavigationBar />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E1E5FF",
  },
  scroll: {
    maxHeight: 120,
  },

  headerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 20,
    height: 50  ,
  },

  centerContent: {
    flexDirection: "row",

    alignItems: "center",
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 5,
    color: "#433C65",
  },
  bodyTextView: {
    marginTop: 40,
    height: 120,
    
    paddingHorizontal: 15,
  },
  bodyText1: {
    fontSize: 30,
    fontWeight: "bold",
  },
  bodyText2: {
    fontSize: 30,
    color: "#6351EC",
    fontWeight:'bold'
  },
  inputView: {
    
    height: 100,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  cardsView: {
    flexDirection: "row",
    paddingLeft: 15,
    
    height: 40,
    
  },
  bodyTextView2: {
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  bodyText3: {
    fontSize: 25,

    fontWeight: "600",
  },
  bodyText4: {
    color: "#ABA8B9",
    fontWeight:'bold'
  },
  customEventCardView: {
   
    flexDirection: "row",
    borderBottomWidth:0.3,
    width: "100%",
  },

 
});
