import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Card({nome, dono, preco, qntd}) {
  return (
    <View style={style.container}>
      <View style={style.containerLeft}>
        <View style={style.img}></View>
      </View>
      <View style={style.containerRight}>
        <View style={style.rightTop}>
            <Text style={style.nome}>{nome}</Text>
            <Text style={style.dono}>{dono}</Text>
        </View>
        <View style={style.rightBottom}>
            <Text style={style.qntd}>{qntd}</Text>
            <Text style={style.preco}>R${preco}</Text>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:"#F1F1F1",
        width:300,
        height:100,
        flexDirection:'row'
    },
    containerLeft:{
       
        width:"35%",
        height:"100%",
        padding:8
    },
    img:{
        backgroundColor:"white",
        width:"100%",
        height:"100%"
    },
    containerRight:{
        width:"65%",
        height:"100%",
        padding:8,
        flex:1,
        flexDirection:"column",
        justifyContent:"space-between",
        position:"relative"
    },
    rightBottom:{
        width:"100%",
        padding:8,
        position:"absolute",
        bottom:5,
        right:3,
        flex:1,
        flexDirection:'row',
        justifyContent:"space-between",
    },
    nome:{
        fontSize:24,
        fontWeight:"600"
    },
    dono:{
       fontSize:18,
        fontWeight:"500",
        lineHeight: 20
    },
    qntd:{
        fontSize:16,
        fontWeight:"400",
        lineHeight: 20
    },
    preco:{
        fontSize:16,
        fontWeight:"400",
        lineHeight: 20
    }
})