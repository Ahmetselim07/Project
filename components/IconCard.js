import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



const IconCard = ({IconComponent,iconName}) => {
  return (
    <View style={styles.container}>
      {IconComponent && iconName && (
        <IconComponent name={iconName} color="#333432" size={24}/>
      )}
    </View>
  );
}

export default IconCard

const styles = StyleSheet.create({
    container:{
        height:40,
        width:40,
        backgroundColor:'white',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    }
})