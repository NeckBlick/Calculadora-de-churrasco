import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function CardBebida({img, nome}) {
  return (
    <View style={style.container}>
      <Image source={img} alt={nome} style={{width:70, height:70, marginBottom:7}}/>
      <Text style={{color:"white", fontSize:18, fontWeight:500}}>{nome}</Text>
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