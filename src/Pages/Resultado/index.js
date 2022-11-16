import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState, useContext } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { data } from "../../data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from "../../Context/Context";
import { askAsync } from "expo-permissions";

export default function Resultado() {
  const { CalcularCarne } = useContext(Context);
  const navigation = useNavigation();
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rateio, setRateio] = useState(0)

  useEffect(() => {
    (async () => {
      var pessoas = await AsyncStorage.getItem("Participantes");
      var carnes = await AsyncStorage.getItem("Carnes");
      var bebidas = await AsyncStorage.getItem("Bebidas");
      var duracao = await AsyncStorage.getItem("Duracao");
      var rateio = await AsyncStorage.getItem("Rateio");
      pessoas = JSON.parse(pessoas);
      carnes = JSON.parse(carnes);
      bebidas = JSON.parse(bebidas);
      duracao = parseInt(duracao);
      rateio = parseInt(rateio);
      setRateio(rateio)
      setDados(CalcularCarne(pessoas, carnes, bebidas));
      setLoading(false);
      console.log(dados)
    })();
  }, []);


  const calcularNovamente = () => {
    AsyncStorage.clear();
    navigation.push("TelaInicial");
  };

  if (!loading) {
    let carnes = dados[0].filter((item) => {
      if (item.tipos.length > 0) {
        return item;
      }
    });
    let bebidas = dados[1];
    let outros = dados[2];

    var precoFinalC = dados[0].map((item) => item.precoFinal);
    var precoFinalB = dados[1].map((item) => item.total);
    var precoFinalO = dados[2].map((item) => item.precoFinal);

    var total = 0;
    var precosTotal = [];

    for (let i = 0; i < precoFinalC.length; i++) {
      precosTotal.push(Number(precoFinalC[i]));
    }
    for (let i = 0; i < precoFinalB.length; i++) {
      precosTotal.push(Number(precoFinalB[i]));
    }
    for (let i = 0; i < precoFinalO.length; i++) {
      precosTotal.push(Number(precoFinalO[i]));
    }
    for (let i = 0; i < precosTotal.length; i++) {
      total += precosTotal[i];
    }
    if( rateio > 1){
      var totalRateio = total / rateio
    }
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

        <Text style={style.subtitle}>Carnes:</Text>

        <View style={style.containerResultado}>
          {carnes.map((item) => (
            <View style={style.containerGlobal} key={item.qntdTotal}>
              <View style={style.container2}>
                <View style={style.left}>
                  <Icon name="money" size={20} color="#000" />
                </View>
                <View style={style.right}>
                  <Text style={style.kilos}>
                    {item.qntdTotal} Kg de {item.tipo}
                  </Text>

                  {item.tipos.map((items) => (
                    <View key={items.assado} style={style.listOpcoes}>
                      <Text>
                        {items.assado} - R${items.total}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
              <View key={item.assado}>
                <Text style={style.preco}>R${item.precoFinal}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={style.subtitle}>Bebidas:</Text>

        <View style={style.containerResultado}>
          {bebidas.map((item) => (
            <View style={style.containerGlobal} key={item.bebida}>
              <View style={style.container2}>
                <View style={style.left}>
                  <Icon name="money" size={20} color="#000" />
                </View>
                <View style={style.right}>
                  <Text style={style.kilos}>
                    {item.litrosTotal}L de {item.bebida}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={style.preco}>R${item.total}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={style.subtitle}>Outros: </Text>
        <View style={style.containerResultado}>
          {outros.map((item) => (
            <View style={style.containerGlobal} key={item.tipo}>
              <View style={style.container2}>
                <View style={style.left}>
                  <Icon name="money" size={20} color="#000" />
                </View>
                <View style={style.right}>
                  <Text style={style.kilos}>
                    {item.qntdTotal} de {item.tipo}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={style.preco}>R${item.precoFinal}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={style.total}> Total: R${total.toFixed(2)} </Text>
        {totalRateio ? 
        <Text style={style.total}> Total dividido: R${totalRateio.toFixed(2)} </Text>
        : <Text></Text>
        }
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
				navigation.navigate("Receitas");
			}}
			>
				<Text style={style.textButton}>Receitas</Text>
			</TouchableOpacity>
		</View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
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
  subtitle: {
    fontSize: 28,
    fontWeight: "600",
    color: "white",
    justifyContent: "center",
    textAlign: "center",
  },
  textButton: {
    fontWeight: "500",
    fontSize: 20,
    color: "#fff",
    lineHeight: 24,
  },
  containerResultado: {
    width: "100%",
  },
  preco: {
    fontSize: 24,
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
    textAlign: "center",
  },
  container2: {
    width: 240,
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 6,
  },
  kilos: {
    width: "100%",
    fontSize: 18,
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
    position: "relative",
  },
  containerGlobal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  listOpcoes: {
    marginLeft: 18,
  },
  buttons:{
	flexDirection: 'row',
	marginBottom: 20
  }
});
