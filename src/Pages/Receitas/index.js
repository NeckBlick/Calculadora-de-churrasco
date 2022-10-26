import React, { useState, useRef } from "react";
import { View, Alert, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";
import  Icon  from 'react-native-vector-icons/FontAwesome'

export default function Receitas (){
	const navigation = useNavigation();
	const [playing, setPlaying] = useState(false);
	const controlRef = useRef();

	const onStateChange = (state) => {
		if (state === "ended") {
			setPlaying(false);
		}
	};
	
	return (
		<View style={style.container}>
			<View style={style.header}>
				<TouchableOpacity
					style={style.botaoVoltar}
					onPress={() => navigation.goBack()}
				>
					<Icon name="arrow-left" size={20} color="#000" />
				</TouchableOpacity>
				<Text style={style.title}>Sugestão de receitas</Text>
			</View>
			<View style={style.containervideo}>
      <Text style={style.titulo_video}>Receita com linguiça saborosa</Text>
				<YoutubePlayer
					height={300}
					ref={controlRef}
					play={playing}
					videoId={"PAd6AKfdFzE"}
					onChangeState={onStateChange}
				/>
			</View>
		</View>
	);
};


const style = StyleSheet.create({
	container: {
      width: "100%",
      height: "100%",
      backgroundColor: "#ED7941",
    },
	containervideo:{
		width: 350,
		heigh: 350,
		marginLeft: "auto",
		marginRight: "auto",
	},
    header:{
        width: "100%",
        height: 90,
        alignItems:'center',
        justifyContent:"center"
    },
    botaoVoltar: {
      position: "absolute",
      top: 40,
      left: 30,
    },
    title:{
        fontSize:26,
        fontWeight:"600",
        color:"white"
    },
    containerPessoa:{
        alignItems:'center',
        
    },
    buttonParticipante: {
      backgroundColor: "#E95811",
      padding: 10,
      borderRadius: 15,
      shadowColor: "#000",
      width: 150,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      position:"absolute",
      bottom:80,
      right:50
    },
    textButton: {
      fontWeight: "500",
      fontSize: 20,
      color: "#fff",
      lineHeight: 24,
    },
    titulo_video:{
      fontSize: 20,
      color: "#fff",
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 50,
    }
});
