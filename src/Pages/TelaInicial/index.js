import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Logo from "../../Img/Logo.png";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../../Context/Context";

export default function TelaInicial() {
	const navigation = useNavigation();
	const { teste } = useContext(Context);
	console.log(teste);
	return (
		<View style={style.container}>
			<Image source={Logo} alt="Logo" style={style.logo} />
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("Participante");
				}}
			>
				<Text style={style.textCalcular}>Calcular seu churrasco</Text>
			</TouchableOpacity>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		backgroundColor: "#ED7941",
		width: "100%",
		height: "100%",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		width: 250,
		height: 250,
	},
	textCalcular: {
		fontWeight: "500",
		fontSize: 28,
		color: "#fff",
		lineHeight: 40,
		marginTop: 20,
	},
});
