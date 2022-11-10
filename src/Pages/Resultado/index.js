import {
	View,
	Text,
	Dimensions,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState, useContext } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { data } from "../../data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from "../../Context/Context";

const { width, height } = Dimensions.get("screen");
export default function Resultado() {
	const { CalcularCarne } = useContext(Context);
	const navigation = useNavigation();
	const [dados, setDados] = useState([]);
	const [loading, setLoading] = useState(true);
	const [total, setTotal] = useState(0)

	useEffect(() => {
		(async () => {
			setDados(CalcularCarne());
			setLoading(false);
			
		})();
	},[]);

	const calcularNovamente = () => {
		AsyncStorage.clear();
		navigation.push("TelaInicial");
	};

	console.log(dados)

	return (
		<ScrollView style={style.container}>
			<View style={style.header}>
				<TouchableOpacity
					style={style.botaoVoltar}
					onPress={() => navigation.goBack()}
				>
					<Icon name="arrow-left" size={20} color="#000" />
				</TouchableOpacity>
				<Text style={style.title}>Lista de Compra</Text>
				<Text style={style.title2}>
					(Esse aplicativo é apenas uma simulação, a quantidade e o preço é
					apenas uma estimativa)
				</Text>
				
			</View>
			<View style={style.containerResultado}>
				{loading ? (
					""
				) : (
					dados.map((item => (
							<View style={style.containerGlobal}>
								<View style={style.container2} key={item.qntdTotal}>
									<View style={style.left}>
	 									<Icon name='chicken' size={20} color="#000" />
									</View>
									<View style={style.right}>
										<Text style={style.kilos}>
												{item.qntdTotal} Kg de {item.tipo}	
										</Text>
										
									{item.tipos.map(items => (
												<View key={items.assado} style={style.listOpcoes}>
													<Text>{items.assado}</Text>
												</View>
								
										))}
									</View>
								</View>
								{item.tipos.map(data => (
									<View key={data.assado}>
										<Text style={style.preco}>R${(data.preco * item.qntdTotal / item.carnes).toFixed(2)}</Text>
									</View>
								))}
							</View>							
					)))
				)}
			</View>

			<Text style={style.total}> Total:R${total} </Text>
				<View style={style.buttons}>
					<TouchableOpacity
						style={style.buttonParticipante}
						onPress={() => {
							calcularNovamente();
						}}
					>
						<Text style={style.textButton}>Calcular Novamente</Text>
					</TouchableOpacity>

					<TouchableOpacity
							style={style.buttonParticipante}
							onPress={() => {
								navigation.navigate("Receitas")
							}}
						>
						<Text style={style.textButton}>Receitas</Text>
					</TouchableOpacity>
				</View>
		</ScrollView>
	);
}

const style = StyleSheet.create({
	container: {
		width: width,
		height: height,
		backgroundColor: "#ED7941",
	},
	header: {
		width: "100%",
		height: 200,
		alignItems: "center",
		justifyContent: "center",
		padding: 9,
	},
	botaoVoltar: {
		position: "absolute",
		top: 40,
		left: 30,
	},
	title: {
		fontSize: 32,
		fontWeight: "600",
		color: "white",
	},
	title2: {
		textAlign: "center",
		justifyContent: "center",
		fontWeight: "400",
		fontSize: 18,
	},
	containerPessoa: {
		alignItems: "center",
	},
	button: {
		backgroundColor: "#E95811",
		padding: 10,
		borderRadius: 15,
		shadowColor: "#000",
		width: 150,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 20,
		position: "absolute",
		bottom: 80,
		right: 50,
	},
	textButton: {
		fontWeight: "500",
		fontSize: 20,
		color: "#fff",
		lineHeight: 24,
	},
	containerBebida: {
		width: "100%",
		height: 300,
		justifyContent: "center",
		alignItems: "center",
		marginLeft: "auto",
		marginRight: "auto",
		padding: 8,
	},
	cardActive: {
		backgroundColor: "#F1590F",
		borderRadius: 10,
	},
	cardDesable: {
		backgroundColor: "#ED7941",
	},
	textButton: {
		fontWeight: "500",
		fontSize: 20,
		color: "#fff",
		lineHeight: 24,
	},
	containerResultado: {
		width: width,
	},
	containerCard: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginBottom: 15,
	},
	preco: {
		fontSize: 20,
		fontWeight: "600",
		color: "#fff",
	},
	total: {
		fontWeight: "500",
		fontSize: 25,
		textAlign: "center",
		alignItems: "center",
		color: "#fff",
		padding: 8,
	},
	buttonParticipante: {
		backgroundColor: "#E95811",
		padding: 13,
		borderRadius: 15,
		shadowColor: "#000",
		shadowOffset: {
		  width: 0,
		  height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		width: 150,
		height: 55,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 20,
		marginLeft: "auto",
		marginRight: "auto",
		textAlign: 'center'
	  },
	  container2: {
		width:240,
		height: 'auto',
		alignItems:"center",
		justifyContent:"center",
		flexDirection: "row",
		padding: 6,
	  },
	  kilos: {
		width: "100%",
		fontSize: 16,
		fontWeight: "500",
	  },
	  left: {
		width: "10%",
		marginRight: 6,
		justifyContent: "center",
		alignItems: "center",
	  },
	  right: {
		width: "90%",
		position: 'relative'
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
	containerGlobal:{
		flexDirection: 'row',
		alignItems:'center',
		justifyContent: 'space-between',
		padding: 8,
		
	},
	listOpcoes:{
		marginLeft: 18,
		position: 'absolute',
		top: 22,
		left: 20
	},
	buttons:{
		flexDirection: 'row'
	}
});
