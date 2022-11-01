import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Checkbox from "expo-checkbox";
import Toast from "react-native-toast-message";
import Vaca from "../../Img/vaca.png";
import Galo from "../../Img/frango.png";
import Porco from "../../Img/suino.png";
import Paozinho from "../../Img/pao.png";

export default function EscolhaCarnes() {
	const navigation = useNavigation();

	//bovinos
	const [isPicanha, setPicanha] = useState(false);
	const [isContra, setContra] = useState(false);
	const [isCoxao, setCoxao] = useState(false);

	//frango
	const [isAsa, setAsa] = useState(false);
	const [isCoxa, setCoxa] = useState(false);
	const [isCoracao, setCoracao] = useState(false);

	//suino
	const [isLinguica, setLinguica] = useState(false);
	const [isBisteca, setBisteca] = useState(false);
	const [isCostela, setCostela] = useState(false);

	//pao de alho
	const [isPao, setPao] = useState(false);


	const dataCarnes = [
		{ assado : "Picanha" , ytid:"Sy0A0pQmGPM", preco:60, estado:isPicanha},
		{ assado : "Contra Filé" , ytid:"PyaIw9Wb_i8", preco:40, estado:isContra},
		{ assado : "Coxão Mole" , ytid:"PyaIw9Wb_i8", preco:30, estado:isCoxao},
		{ assado : "Asa" ,  ytid:"PyaIw9Wb_i8",preco:11, estado:isAsa},
		{ assado : "Coxa" , ytid:"PyaIw9Wb_i8", preco:8, estado:isCoxa},
		{ assado : "Coração" , ytid:"PyaIw9Wb_i8", preco:35, estado:isCoracao},
		{ assado : "Linguica" , ytid:"PyaIw9Wb_i8", preco:15, estado:isLinguica},
		{ assado : "Bisteca" , ytid:"PyaIw9Wb_i8", preco:15, estado:isBisteca},
		{ assado : "Costela" , ytid:"PyaIw9Wb_i8", preco:29, estado:isCostela},
		{ assado : "Pão de Alho" , ytid:"PyaIw9Wb_i8", preco:10, estado:isPao},
	]

	const guardarBanco = () => {
		let true_keys = dataCarnes.filter(key => key.estado === true)
		true_keys.length > 0 ? AsyncStorage.setItem("Carnes", JSON.stringify(true_keys)) && navigation.push("Bebidas") : 
		Toast.show({
			type: "info",
			position: "top",
			text1: "Escolha pelo menos uma opção para prosseguir!",
			visibilityTime: 3000,
			autoHide: true,
			onShow: () => {},
			onHide: () => {},
		  });
	};

	return (
		<View style={style.container}>
			 <Toast
  
  			/>
			<View style={style.header}>
				<TouchableOpacity
					style={style.botaoVoltar}
					onPress={() => navigation.goBack()}
				>
					<Icon name="arrow-left" size={20} color="#000" />
				</TouchableOpacity>
				<Text style={style.title}>Escolha os tipos de carne</Text>
				<Text>(Clique para selecionar os tipos de carne)</Text>
			</View>
			<View style={style.tipo}>
				<View style={style.card}>
					<Image source={Vaca} alt="Vaca" style={style.animal} />
				</View>

				<View>
					<Text style={style.tipocarne}>Bovína</Text>

					<View style={style.escolha}>
						<Checkbox
							style={style.checkbox}
							value={isPicanha}
							onValueChange={setPicanha}
							color={isPicanha ? "#E95811" : undefined}
						/>
						<TouchableOpacity onPress={() => setPicanha(!isPicanha)}>
							<Text style={style.nome}>Picanha</Text>
						</TouchableOpacity>
					</View>

					<View style={style.escolha}>
						<Checkbox
							style={style.checkbox}
							value={isContra}
							onValueChange={setContra}
							color={isContra ? "#E95811" : undefined}
						/>
						<TouchableOpacity onPress={() => setContra(!isContra)}>
							<Text style={style.nome}>Contra Fíle</Text>
						</TouchableOpacity>
					</View>

					<View style={style.escolha}>
						<Checkbox
							style={style.checkbox}
							value={isCoxao}
							onValueChange={setCoxao}
							color={isCoxao ? "#E95811" : undefined}
						/>
						<TouchableOpacity onPress={() => setCoxao(!isCoxao)}>
							<Text style={style.nome}>Coxão Mole</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={style.tipo}>
				<View style={style.card}>
					<Image source={Galo} alt="galo caríjo" style={style.animal} />
				</View>

				<View>
					<Text style={style.tipocarne}>Frango</Text>
					<View style={style.escolha}>
						<Checkbox
							style={style.checkbox}
							value={isAsa}
							onValueChange={setAsa}
							color={isAsa ? "#E95811" : undefined}
						/>
						<TouchableOpacity onPress={() => setAsa(!isAsa)}>
							<Text style={style.nome}>Asinha</Text>
						</TouchableOpacity>
					</View>

					<View style={style.escolha}>
						<Checkbox
							style={style.checkbox}
							value={isCoxa}
							onValueChange={setCoxa}
							color={isCoxa ? "#E95811" : undefined}
						/>
						<TouchableOpacity onPress={() => setCoxa(!isCoxa)}>
							<Text style={style.nome}>Coxa</Text>
						</TouchableOpacity>
					</View>

					<View style={style.escolha}>
						<Checkbox
							style={style.checkbox}
							value={isCoracao}
							onValueChange={setCoracao}
							color={isCoracao ? "#E95811" : undefined}
						/>
						<TouchableOpacity onPress={() => setCoracao(!isCoracao)}>
							<Text style={style.nome}>Coração</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={style.tipo}>
				<View style={style.card}>
					<Image source={Porco} alt="porco" style={style.animal} />
				</View>

				<View>
					<Text style={style.tipocarne}>Suíno</Text>
					<View style={style.escolha}>
						<Checkbox
							style={style.checkbox}
							value={isLinguica}
							onValueChange={setLinguica}
							color={isLinguica ? "#E95811" : undefined}
						/>
						<TouchableOpacity onPress={() => setLinguica(!isLinguica)}>
							<Text style={style.nome}>Linguiça</Text>
						</TouchableOpacity>
					</View>
					<View style={style.escolha}>
						<Checkbox
							style={style.checkbox}
							value={isBisteca}
							onValueChange={setBisteca}
							color={isBisteca ? "#E95811" : undefined}
						/>
						<TouchableOpacity onPress={() => setBisteca(!isBisteca)}>
							<Text style={style.nome}>Bisteca</Text>
						</TouchableOpacity>
					</View>
					<View style={style.escolha}>
						<Checkbox
							style={style.checkbox}
							value={isCostela}
							onValueChange={setCostela}
							color={isCostela ? "#E95811" : undefined}
						/>
						<TouchableOpacity onPress={() => setCostela(!isCostela)}>
							<Text style={style.nome}>Costela</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={style.escolha}>
				<Image source={Paozinho} style={style.paozinho} alt="pao de alho" />
				<Checkbox
					style={style.checkbox1}
					value={isPao}
					onValueChange={setPao}
					color={isPao ? "#E95811" : undefined}
				/>
				<TouchableOpacity onPress={() => setPao(!isPao)}>
					<Text style={style.nome}>Pão de Alho</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity
				style={style.buttonBebidas}
				onPress={() => {
					guardarBanco();
				}}
			>
				<Text style={style.textButton}>Avançar</Text>
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
	},
	seta: {
		width: 30,
		height: 30,
	},
	titulo: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	escolha: {
		flexDirection: "row",
	},
	tipo: {
		flexDirection: "row",
		marginBottom: 15,
		marginLeft: 20,
	},
	animal: {
		width: 80,
		height: 80,
	},
	tipocarne: {
		marginLeft: 10,
		fontWeight: "bold",
		fontSize: 20,
		marginBottom: 5,
	},
	checkbox: {
		width: 24,
		height: 24,
		marginLeft: 10,
		marginBottom: 10,
	},
	checkbox1: {
		marginTop: 4.7,
		width: 22,
		height: 22,
		marginLeft: 10,
		marginBottom: 10,
	},
	nome: {
		marginTop: 4.7,
		color: "#fff",
		marginLeft: 5,
		fontSize: 15,
		fontWeight: "semibold",
		alignItems: "center",
	},
	buttonBack: {
		position: "absolute",
		top: -5,
		left: 30,
	},
	card: {
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		borderWidth: 3,
		borderColor: "#E95811",
		borderRadius: 10,
		width: 125,
		height: 125,
	},
	paozinho: {
		width: 35,
		height: 35,
		marginLeft: 20,
	},

	buttonBebidas: {
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
		bottom: 20,
		right: 40,
	},
	textButton: {
		fontWeight: "500",
		fontSize: 20,
		color: "#fff",
		lineHeight: 24,
	},
	header: {
		width: "100%",
		height: 200,
		alignItems: "center",
		justifyContent: "center",
	},
	botaoVoltar: {
		position: "absolute",
		top: 10,
		left: 30,
	},
	title: {
		fontSize: 26,
		fontWeight: "bold",
		color: "white",
	},
});
