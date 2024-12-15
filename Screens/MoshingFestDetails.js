import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageDetails from '../components/ImageDetails'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'

const MoshingFestDetails = ({navigation}) => {
  const image2 = require('../assets/images/image2.jpg')
  return (
      <ImageDetails
        navigation={() => navigation.navigate('Home')} 
        assetName={image2}
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
        ]}
        text1={"Moshing Fest 2024"}
        date={"26 August 2024"}
        place={"Jombang, East Java"}
        text2={
          "Moshing Fest 2024 is an electrifying local pop-punk festival that brings together to best of the genre in an unforgottable celebration of high-energy music and community"
        }
        Rp1={"Rp80.000"}
        Rp2={"Rp100.000"}
        Rp3={"Rp250.000"}
        key={''}
      />
    
  );
}

export default MoshingFestDetails

const styles = StyleSheet.create({})