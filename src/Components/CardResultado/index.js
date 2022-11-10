import { View, Text, StyleSheet, FlatList } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import React from 'react'

export default function CardResultado({data}) {
  return (
		<View style={style.container}>
			<View style={style.left}>
				<Icon name={img} size={20} color="#000" />
			</View>

			<View style={style.right}>
				<Text style={style.kilos}>
					{data.qntdTotal} Kg de {data.tipo}
          {data.tipos.assado}    
				</Text>
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