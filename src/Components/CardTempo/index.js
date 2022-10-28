import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CardTempo({tempo}) {
  return (
    <View style={style.container}>
      <Text style={{color:"white", fontSize:18, fontWeight:500}}>{tempo}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        width:120,
        height:120,
        justifyContent:"center",
        alignItems:'center',
        borderWidth:2,
        borderRadius:10,
        borderColor:"#E95811"
    }
})