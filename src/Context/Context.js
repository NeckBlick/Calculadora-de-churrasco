import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import Data, { data } from '../data'

export const Context = createContext();

export default function Provider({ children }) {
	const [listaPessoas, setListaPessoas] = useState([]);
	const [listaCarnes, setListaCarnes] = useState([]);
	const [listaBebidas, setListaBebidas] = useState([]);
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
		let qtdHomem = listaPessoas.filter(item => item.sexo === "homem")
		let qtdMulher = listaPessoas.filter(item => item.sexo === "mulher")
		let qtdCrianca = listaPessoas.filter(item => item.sexo === "crianca")
		//Tipo de carne que a pessoa escolheu
		let tiposBov = listaCarnes.filter (item => item.tipo === "bovino")
		let tiposFrango = listaCarnes.filter (item => item.tipo === "frango")
		let tiposSuino = listaCarnes.filter (item => item.tipo === "suino")

		var tiposB = tiposBov
		var tiposF = tiposFrango
		var tiposS = tiposSuino
		// let tipoAgua = listaBebidas.filter (item => item.bebida === "Agua")
		// let tipoRefri = listaBebidas.filter (item => item.bebida === "Refrigerante")
		// let tipoSuco = listaBebidas.filter (item => item.bebida === "Suco")
		// let tipoCerveja = listaBebidas.filter (item => item.bebida === "Cerveja")

		// let refri = (qtdHomem + qtdMulher + qtdCrianca) * 1000
		// let agua = (qtdHomem + qtdMulher + qtdCrianca) * 1000
		// let suco = (qtdHomem + qtdMulher + qtdCrianca) * 1000
		// let refri = (qtdHomem + qtdMulher + qtdCrianca) * 1000
		

		//Homem
		if(qtdHomem.length >= 1){
			var numHomens = qtdHomem[0].quantidade

		}else{
			 qntdHomenC = 0
			 qntdHomenF = 0
			 qntdHomenS = 0
		}

		// Mulher	
		if(qtdMulher.length >= 1){
			var numMulher = qtdMulher[0].quantidade

		}else{
			 qntdMulheresC = 0
			 qntdMulheresF = 0
			 qntdMulheresS = 0
		}
		//Crianca
		if(qtdCrianca.length >= 1){
			var numCrianca = qtdCrianca[0].quantidade

		}else{
			 qntdCriancaC = 0
			 qntdCriancaF = 0
			 qntdCriancaS = 0
		}
		
		
		if(tiposSuino.length >= 1 ){
			var qntdHomenS = (data[0].carne.homem.suino * numHomens) / 1000
			var qntdMulheresS = (data[0].carne.mulher.suino * numMulher) / 1000	
			var qntdCriancaS = (data[0].carne.crianca.suino * numCrianca) / 1000;	
		}
		if(tiposBov.length >= 1){
			var qntdHomenC = (data[0].carne.homem.carne * numHomens) / 1000
			var qntdMulheresC = (data[0].carne.mulher.carne * numMulher) / 1000	
			var qntdCriancaC = (data[0].carne.crianca.carne * numCrianca) / 1000;
		}
		if(tiposFrango.length >= 1){
			var qntdHomenF = (data[0].carne.homem.frango * numHomens) / 1000
			var qntdMulheresF = (data[0].carne.mulher.frango * numMulher) / 1000	
			var qntdCriancaF = (data[0].carne.crianca.frango * numCrianca) / 1000;	
		}
		
		let tipos1 = tiposBov.map((item) => item.preco);
		// let teste = tiposBov.map((item) => item.preco)
		let tipos2 = tiposFrango.map(item => item.preco)
		let tipos3 = tiposSuino.map(item => item.preco)	


		if (tiposBov.length > 0) {
			tiposBov =  tiposBov.length
		} else {
			tiposBov = 1;	
		}

		if (tiposFrango.length > 0) {
			tiposFrango = tiposFrango.length
		} else {
			tiposFrango = 1;
		}

		if (tiposSuino.length > 0 ) {
			tiposSuino =  tiposSuino.length
		} else {
			tiposSuino = 1;
		}

		var qtdCarne = (qntdHomenC + qntdMulheresC + qntdCriancaC) / tiposBov
		var qtdFrango = (qntdHomenF + qntdMulheresF + qntdCriancaF) / tiposFrango
		var qtdSuino = (qntdHomenS + qntdMulheresS + qntdCriancaS) / tiposSuino

		var precoTotalC = 0
		for(let i  = 0; i < tipos1.length; i++){
	
			let precoFinal = (tipos1[i] * Number(qtdCarne.toFixed(2))) / tiposBov;
			precoTotalC += precoFinal
			Object.assign(tiposB[i], { total: precoFinal });
			
		}

		var precoTotalF = 0;
		for(let i  = 0; i < tipos2.length; i++){
			let precoFinal = (tipos2[i] * Number(qtdFrango.toFixed(2))) / tiposFrango;
			precoTotalF += precoFinal;
			Object.assign( tiposF[i],
				{ total: precoFinal });	
		}

		var precoTotalS = 0;
		for(let i  = 0; i < tipos3.length; i++){
			let precoFinal = (tipos3[i] * Number(qtdSuino.toFixed(2))) / tiposSuino;
			precoTotalS += precoFinal;
			Object.assign(tiposS[i], { total: precoFinal });	
		}
		
		 var dataCarnes = [
			{
				id: 0,
				tipo: "Carne Bovina",
				qntdTotal: qtdCarne.toFixed(2),
				carnes: tiposBov,
				tipos: tiposB,	
				precoFinal: precoTotalC		
			},
			{
				id: 1,
				tipo: "Frango",
				qntdTotal: qtdFrango.toFixed(2),
				carnes: tiposFrango,
				tipos: tiposF,
				precoFinal: precoTotalF	
			},
			{
				id: 2,
				tipo: "Carne Suína",
				qntdTotal: qtdSuino.toFixed(2),
				carnes: tiposSuino,
				tipos: tiposS,
				precoFinal: precoTotalS		
			},
		];
		return dataCarnes
    };
	return <Context.Provider value={{CalcularCarne}}>{children}</Context.Provider>;
}