import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BodyCard = ({IconComponent,iconName,title}) => {
  return (
    <View style={styles.container}>
      {IconComponent && iconName && (
        <IconComponent name={iconName} color="#D1CFD0" size={16} />
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

export default BodyCard

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 90,
    flexDirection: "row",
    backgroundColor: "#434140",
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    marginRight:10
  },
  text: {
    marginLeft:5,
    color: "#D1CFD0",
  },
});