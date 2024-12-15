import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const BottomNavigationBar = () => {
  const [activeTab, setActiveTab] = useState("Home"); // Hangi tab'ın aktif olduğunu tutar

  const tabs = [
    { name: "Home", icon: "home" },
    { name: "Explore", icon: "explore" },
    { name: "Save", icon: "bookmark" },
    { name: "Profile", icon: "person" },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.button}
          onPress={() => setActiveTab(tab.name)} // Aktif tab'ı günceller
        >
          <MaterialIcons
            name={tab.icon}
            size={24}
            color={activeTab === tab.name ? "#6857ED" : "#A29FB3"} // Renk duruma göre değişir
          />
          <Text
            style={[
              styles.label,
              { color: activeTab === tab.name ? "#6857ED" : "#A29FB3" },
            ]}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default BottomNavigationBar;
