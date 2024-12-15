import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const CustomCard = ({text,iconName,IconComponent}) => {
  return (
    <View style={styles.view}>
    {
        IconComponent && iconName &&(
    <IconComponent name={iconName}  size={24} color="#0A0234" />        
        )
    }
      
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default CustomCard

const styles = StyleSheet.create({
  view: {
    height: 75,
    width: 100,
    borderWidth: 0.5,
    marginVertical: 10,
    marginRight:12,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    padding:10,
    justifyContent:'space-around'
  },
  text: {
    fontSize: 15,
    color: "##0A0234",
  },
});