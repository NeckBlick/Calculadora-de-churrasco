import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import Vaca from "../../Img/vaca.png";
import Galo from "../../Img/frango.png";
import Porco from "../../Img/suino.png";
import Seta from "../../Img/arrow-left.png";
import Paozinho from "../../Img/pao.png";

export default function EscolhaCarnes() {
	const navigation = useNavigation();

	//bovinos
	const [isBov1, setBov1] = useState(false);
	const [isBov2, setBov2] = useState(false);
	const [isBov3, setBov3] = useState(false);

	//frango
	const [isFrango1, setFrango1] = useState(false);
	const [isFrango2, setFrango2] = useState(false);
	const [isFrango3, setFrango3] = useState(false);

	//suino
	const [isPorco1, setPorco1] = useState(false);
	const [isPorco2, setPorco2] = useState(false);
	const [isPorco3, setPorco3] = useState(false);
	
	//pao de alho
	const [isPao, setPao] = useState(false);


	return (
		<View style={style.container}>
			{/* botão de voltar */}
		
			<View style={style.header}>
				<TouchableOpacity
					style={style.buttonBack}
					onPress={() => navigation.navigate("TelaInicial")}
				>
					<Image source={Seta} alt="seta" style={style.seta} />
				</TouchableOpacity>
				<Text style={style.titulo}>Escolha seus assados!</Text>
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
							value={isBov1}
							onValueChange={setBov1}
							color={isBov1 ? "#04CB00" : undefined}
						/>
						<Text style={style.nome}>Picanha</Text>
					</View>
					<View style={style.escolha}>
						<Checkbox
							style={style.checkbox}
							value={isBov2}
							onValueChange={setBov2}
							color={isBov2 ? "#04CB00" : undefined}
						/>
						<Text style={style.nome}>Contra Fíle</Text>
					</View>
					<View style={style.escolha}>
						<Checkbox
							style={style.checkbox}
							value={isBov3}
							onValueChange={setBov3}
							color={isBov3 ? "#04CB00" : undefined}
						/>
						<Text style={style.nome}>Coxão Mole</Text>
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
							value={isFrango1}
							onValueChange={setFrango1}
							color={isFrango1 ? "#04CB00" : undefined}
						/>
						<Text style={style.nome}>Asinha</Text>
					</View>
					<View style={style.escolha}>
						<Checkbox
							style={style.checkbox}
							value={isFrango2}
							onValueChange={setFrango2}
							color={isFrango2 ? "#04CB00" : undefined}
						/>
						<Text style={style.nome}>Coxa</Text>
					</View>
					<View style={style.escolha}>
						<Checkbox
							style={style.checkbox}
							value={isFrango3}
							onValueChange={setFrango3}
							color={isFrango3 ? "#04CB00" : undefined}
						/>
						<Text style={style.nome}>Coração</Text>
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
							value={isPorco1}
							onValueChange={setPorco1}
							color={isPorco1 ? "#04CB00" : undefined}
						/>
						<Text style={style.nome}>Linguiça</Text>
					</View>
					<View style={style.escolha}>
						<Checkbox
							style={style.checkbox}
							value={isPorco2}
							onValueChange={setPorco2}
							color={isPorco2 ? "#04CB00" : undefined}
						/>
						<Text style={style.nome}>Bisteca</Text>
					</View>
					<View style={style.escolha}>
						<Checkbox
							style={style.checkbox}
							value={isPorco3}
							onValueChange={setPorco3}
							color={isPorco3 ? "#04CB00" : undefined}
						/>
						<Text style={style.nome}>Costela</Text>
					</View>
				</View>
			</View>
				<View style={style.escolha}>
					<Image source={Paozinho} style={style.paozinho} alt="pao de alho" />
					<Checkbox
						style={style.checkbox1}
						value={isPao}
						onValueChange={setPao}
						color={isPao ? "#04CB00" : undefined}
					/>
					<Text style={style.nome}>Pão de Alho</Text>
				</View>
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
	header: {
		width: "100%",
		height: 80,
		alignItems: "center",
		justifyContent: "center",

	},
	seta: {
		width: 30,
		height: 30,
	},
	titulo: {
		color: "#fff",
		fontWeight: 600,
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
		fontWeight: 600,
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
		fontWeight: 400,
		alignItems: 'center',
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
	container_pao: {
		flexDirection: 'row',
		justifyContent: "center",
		alignItems: "baseline",
		marginLeft: 20,
	},
});