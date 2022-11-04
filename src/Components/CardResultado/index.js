import { View, Text, StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import React from 'react'

export default function cardResultado({ kilo, tipo, img, homem, mulher, crianca }) {
  return (
		<View style={style.container}>
			<View style={style.left}>
				<Icon name={img} size={20} color="#000" />
			</View>

			<View style={style.right}>
				<Text style={style.kilos}>
					{kilo} Kg de {tipo}
				</Text>
				{homem ? <Text style={style.gramas}>Homem: {homem}g</Text>: ""}
				{mulher ? <Text style={style.gramas}>Mulher: {mulher}g</Text>: ""}
				{crianca ? <Text style={style.gramas}>Criança: {crianca}g</Text> : ""}
			</View>
		</View>
	);
}

const style = StyleSheet.create({
  container: {
    width:220,
    height: 55,
    alignItems:"center",
    justifyContent:"center",
    flexDirection: "row",
    padding: 6,
  },
  kilos: {
    width: "100%",
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
  },
  containerCard: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginBottom: 15,
	},

})