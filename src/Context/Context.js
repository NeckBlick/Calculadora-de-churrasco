import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import Data, { data } from '../data'

export const Context = createContext();

export default function Provider({ children }) {
	const [listaPessoas, setListaPessoas] = useState();
	const [listaCarnes, setListaCarnes] = useState();
	const [listaBebidas, setListaBebidas] = useState();
	const [duracao, setDuracao] = useState();
	useEffect(() => {
		(async () => {
			let pessoas = await AsyncStorage.getItem("Participantes");
			let carnes = await AsyncStorage.getItem("Carnes");
			let bebidas = await AsyncStorage.getItem("Bebidas");
			let duracao = await AsyncStorage.getItem("Duracao");
			pessoas = JSON.parse(pessoas);
			carnes = JSON.parse(carnes);
			bebidas = JSON.parse(bebidas);
			duracao = parseInt(duracao);
			setListaPessoas(pessoas);
			setListaCarnes(carnes);
			setListaBebidas(bebidas);
			setDuracao(duracao);
		})();
	}, []);
	const CalcularCarne = () => {
		// Filtrar a quantiadde de pessoas
		let qtdHomem = listaPessoas.filter(item => item.sexo == "homem")
		let qtdMulher = listaPessoas.filter(item => item.sexo == "mulher")
		let qtdCrianca = listaPessoas.filter(item => item.sexo == "crianca")
		//Tipo de carne que a pessoa escolheu
		let tiposBov = listaCarnes.filter (item => item.tipo === "bovino")
		let tiposFrango = listaCarnes.filter (item => item.tipo === "frango")
		let tiposSuino = listaCarnes.filter (item => item.tipo === "suino")
		
		//Homem
		if(qtdHomem.length >= 1){
			var numHomens = qtdHomem[0].quantidade
			var qntdHomenC = (data[0].carne.homem.carne * numHomens) / 1000
			var qntdHomenF = (data[0].carne.homem.frango * numHomens) / 1000
			var qntdHomenS = (data[0].carne.homem.suino * numHomens) / 1000
		}else{
			var qntdHomenC = 0
			var qntdHomenF = 0
			var qntdHomenS = 0
		}
		// Mulher	
		if(qtdMulher.length >= 1){
			var numMulher = qtdMulher[0].quantidade
			var qntdMulheresC = (data[0].carne.mulher.carne * numMulher) / 1000	
			var qntdMulheresF = (data[0].carne.mulher.frango * numMulher) / 1000	
			var qntdMulheresS = (data[0].carne.mulher.suino * numMulher) / 1000	
		}else{
			var qntdMulheresC = 0
			var qntdMulheresF = 0
			var qntdMulheresS = 0
		}
		//Crianca
		if(qtdCrianca >= 1){
			var numCrianca = qtdCrianca[0].quantidade
			var qntdCriancaC = (data[0].carne.crianca.carne * numCrianca) / 1000;	
			var qntdCriancaF = (data[0].carne.crianca.frango * numCrianca) / 1000;	
			var qntdCriancaS = (data[0].carne.crianca.suino * numCrianca) / 1000;	
		}else{
			var qntdCriancaC = 0;	
			var qntdCriancaF = 0
			var qntdCriancaS = 0
		}

		

		if (tiposBov.length >= 1) {
			tiposBov =  tiposBov.length
		} else {
			tiposBov = 0;
		}

		if (tiposFrango.length >= 1) {
			tiposFrango = tiposFrango.length
		} else {
			tiposFrango = 0;
		}

		if (tiposSuino.length >= 1) {
			tiposSuino =  tiposSuino.length
		} else {
			tiposSuino = 0;
		}
		var dataCarnes = [
			{
				id: 0,
				tipo: "Carne",
				qntd: Math.round(
					(qntdHomenC + qntdMulheresC + qntdCriancaC) / tiposBov
				),
			},
			{
				id: 1,
				tipo: "Frango",
				qntd: Math.round(
					(qntdHomenF + qntdMulheresF + qntdCriancaF) / tiposFrango
				),
			},
			{
				id: 2,
				tipo: "Carne Suína",
				qntd: Math.round(
					(qntdHomenS + qntdMulheresS + qntdCriancaS) / tiposSuino
				),
		
			},
		];
		return dataCarnes
    };
	return <Context.Provider value={{CalcularCarne}}>{children}</Context.Provider>;
}