import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const CustomTextInput = ({
  placeholder,
  
  rightIconName,
  onChangeText,
  value,
  isSecureText = false,
}) => {
  return (
    <View style={styles.inputContainer}>
      {/* Sol Tarafa Arama İkonu */}
      {
        <Fontisto
          name="search"
          size={24}
          color="black"
          style={styles.leftIcon}
        />
      }

      {/* TextInput */}
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="grey"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecureText}
      />

      {/* Sağ Tarafa Dinamik İkon */}
      <View>
        (
        <MaterialCommunityIcons name="tune-variant" size={24} color="black" />)
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#FFFFFF",
  },
  leftIcon: {
    marginRight: 0,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  rightIcon: {
    marginLeft: 10,
  },
});
