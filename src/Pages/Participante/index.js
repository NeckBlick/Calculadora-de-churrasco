import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import CardPessoas from "../../Components/Pessoas";
import Toast from "react-native-toast-message";

export default function Participante() {
  const [male, setMale] = useState(0);
  const [female, setFemale] = useState(0);
  const [child, setChild] = useState(0);
  const navigation = useNavigation();
  const showMessage = () => {
    Toast.show({
      type: "info",
      position: "top",
      text1: "Bebidas alcólicas apenas para maiores de 18 anos!",
      text2: "Não nos responsabilizamos pelo seus atos",
      visibilityTime: 3000,
      autoHide: true,
    });
  };
  console.log(child)
  return (
    <View style={style.container}>
        <Toast
        ref={(ref) => {
          Toast.setRef(ref);
        }}
      />  
      <View style={style.header}>
        <TouchableOpacity
          style={style.botaoVoltar}
          onPress={() => navigation.goBack()}
        >
         
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={style.title}>Participantes do churrasco</Text>
        <Text>(Clique para adicionar um participante)</Text>
      </View>
      <View style={style.containerPessoa}>
        <View style={style.containerCard}>
          <View style={style.iconContainer}>
            <Icon name="male" size={45} color={"#000"} />
          </View>
          <View style={style.buttonContainer}>
            <TouchableOpacity onPress={() => setMale(male - 1)}>
              <Text style={style.icon}>-</Text>
            </TouchableOpacity>
            <Text style={{ color: "white", fontSize: 32 }}>
              {male < 0 ? setMale(0) && male : male}
            </Text>
            <TouchableOpacity onPress={() => setMale(male + 1)}>
              <Text style={style.icon}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.containerCard}>
          <View style={style.iconContainer}>
            <Icon name="female" size={45} color={"#000"} />
          </View>
          <View style={style.buttonContainer}>
            <TouchableOpacity onPress={() => setFemale(female - 1)}>
              <Text style={style.icon}>-</Text>
            </TouchableOpacity>
            <Text style={{ color: "white", fontSize: 32 }}>
              {female < 0 ? setFemale(0) && female : female}
            </Text>
            <TouchableOpacity onPress={() => setFemale(female + 1)}>
              <Text style={style.icon}>+</Text>
            </TouchableOpacity>
          </View>

        </View>
      
          <View style={style.containerCard}>
            <View style={style.iconContainer}>
              <Icon name="child" size={45} color={"#000"} />
            </View>
            <View style={style.buttonContainer}>
              <TouchableOpacity onPress={() => setChild(child - 1)}>
                <Text style={style.icon}>-</Text>
              </TouchableOpacity>
              <Text style={{ color: "white", fontSize: 32 }}>
                {child < 0 ? setChild(0) && child : child}
              </Text>
              <TouchableOpacity onPress={() => {
                setChild(child + 1)
                Toast.show({
                  type: "info",
                  position: "top",
                  text1: "Bebidas alcólicas apenas para maiores de 18 anos!",
                  text2: "Não nos responsabilizamos pelo seus atos",
                  visibilityTime: 3000,
                  autoHide: true,
                  onShow: () => {},
                  onHide: () => {},
                })
                } }>
                <Text style={style.icon}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
      
      
      
      
      <TouchableOpacity
        style={style.buttonParticipante}
        onPress={() => {
          navigation.navigate("Carnes");
        }}
      >
        <Text style={style.textButton}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  containerCard: {
    width: 300,
    height: 60,
    flexDirection: "row",
    marginBottom: 50,
  },
  iconContainer: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "80%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  icon: {
    fontSize: 38,
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ED7941",
  },
  header: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoVoltar: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "white",
  },
  containerPessoa: {
    alignItems: "center",
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
});
