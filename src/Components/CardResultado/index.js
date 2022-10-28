import { View, Text, StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import React from 'react'

export default function cardResultado({kilo, img, grama, }) {
  return (
    <View style={style.container}>
        <View style={style.left}>
          <Icon name="{img}" size={20} color="#000" />
        </View>

        <View style={style.right}>
          <Text style={style.kilos}>2,3 KG de Carne</Text>
          <Text style={style.gramas}>500g por pessoa</Text>
        </View>

    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: 180,
    height: 55,
    alignItems:"center",
    justifyContent:"center",
    flexDirection: "row",
    padding: 6,
  },
  kilos: {
    fontSize: 18,
    fontWeight: "500",
  },
  left: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    width: 130,

  },
  gramas: {
    fontWeight: '300',
    alignItems: "center",
    marginLeft: 10,
  }

})