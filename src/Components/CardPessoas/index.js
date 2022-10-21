import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function CardPessoa() {
    const [count, setCount] = useState(0)
  return (
    <View style={style.container}>
      <View>Icone</View>
      <View style={style.count}>
        <Text onPress={() => setCount(count-1)}>-</Text>
        <Text style={{color:"white"}}>
            {count}
        </Text>
        <Text onPress={() => setCount(count+1)}>+</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        width:250,
        height:30,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    count:{
        width:"80%",
        flex:1,
        flexDirection:'row',
        justifyContent: "space-around"
    }
})