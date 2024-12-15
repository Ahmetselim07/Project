import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FooterCard = ({ IconComponent,iconName, title, subtitle, rightComponent }) => {
  return (
    <View style={styles.container}>
      {/* Sol kısım: İkon ve yazılar */}
      <View style={styles.leftSection}>
        {IconComponent && (
          <IconComponent
          
            name={iconName}
            style={styles.iconContainer}
            size={24}
            color={"#7161EF"}
          />
        )}
        <View />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>

      {/* Sağ kısım: Ek yapı */}
      <View style={styles.rightSection}>
        {rightComponent && rightComponent}
      </View>
    </View>
  );
};

export default FooterCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Yatay düzen
    justifyContent: "space-between", // İki tarafı ayır
    alignItems: "center", // Dikey hizalama
    
   
    borderColor: "#ccc",
    borderRadius: 8,
    
    height:70,
    width: "100%",
  },
  leftSection: {
    flexDirection: "row", // İkon ve yazıları yan yana tut
    alignItems: "center", // Dikey hizalama
  },
  rightComponent: {
    flexDirection: "row", // Yatay düzen
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 10, // İkon ve yazı arası boşluk
    borderWidth: 0.3,
    borderColor: "grey",
    borderRadius: 10,
    padding: 5,
  },
  textContainer: {
    justifyContent: "center", // Yazıları ortala
  },
  title: { fontSize: 14, color: "#555" },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4, // Başlık ve alt başlık arası boşluk
  },
  rightSection: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'row',
  },
});
