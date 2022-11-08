import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [loading, setLoading] = useState(true);
  const [cep, setCep] = useState();
  const [local, setLocal] = useState();
  const [loadingCep, setLoadingCep] = useState(true);
  const [mapRegion, setMapRegion] = useState({
    latitude: "",
    longitude: "",
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let local = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: local.coords.latitude,
        longitude: local.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      setLoading(false);
    })();
  }, []);
  const mascaraCep = (cep) => {
    if (cep) {
      if (cep.length == 8) {
        return cep.replace(/(\d{5})/g, "$1-", cep);
      }
    }
  };
  const buscarCep = async () => {
    let { data } = await axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .catch((err) => {
        alert("Digite o cep");
      });
    setLocal(data);
    let response = await axios
      .get(
        `https://geocode.search.hereapi.com/v1/geocode?q=${data.logradouro}+${data.bairro}&apiKey=vpElMOWqr4ByGBopvqPMFd1XGwI2kg0ah8R0q32Mieg`
      )
      .catch((erro) => {
        console.log(err);
      });
    console.log(response.data.items[0].position);
    setMapRegion({
      latitude: response.data.items[0].position.lat,
      longitude: response.data.items[0].position.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    setLoadingCep(false);
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
        <Text style={style.title}>Localização</Text>
        <Text>(Digite o CEP do lugar do churrasco)</Text>
      </View>
      <View style={style.containerInput}>
        <TextInput
          placeholder="Digite o CEP do local"
          onChangeText={setCep}
          value={mascaraCep(cep)}
          keyboardType="numeric"
          maxLength={9}
          style={style.cep}
        />
        <TouchableOpacity style={style.iconSearch} onPress={buscarCep}>
          <Icon name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={style.titleScroll}>Arraste para o lado</Text>
      <Text style={style.subtitleScroll}>para obter mais informações</Text>
      {loading ? (
        ""
      ) : (
        <ScrollView style={{padding:15}} horizontal>
          
          {/* Mapa Local do churrasco */}
          <View style={style.mapContainer}>
          <Text style={style.titleMap}>Localização do seu churrasco</Text>
          <MapView
            initialRegion={location}
            region={mapRegion}
            style={style.map}
            showsMyLocationButton={true}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="Sua Localização"
              description="Você está aqui"
            />
            {loadingCep ? (
              ""
            ) : (
              <Marker
                coordinate={{
                  latitude: mapRegion.latitude,
                  longitude: mapRegion.longitude,
                }}
                title="Local do churrasco"
                description="Aqui será realizado o churrasco"
              />
            )}
          </MapView>
          </View>
          {/* Mapa Açougues próximos */}
          <View style={style.mapContainer}>
          <Text style={style.titleMap}>Açougues próximos do local do churrasco</Text>
          <MapView
            initialRegion={location}
            region={mapRegion}
            style={style.map}
            showsMyLocationButton={true}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="Sua Localização"
              description="Você está aqui"
            />
            {loadingCep ? (
              ""
            ) : (
              <Marker
                coordinate={{
                  latitude: mapRegion.latitude,
                  longitude: mapRegion.longitude,
                }}
                title="Local do churrasco"
                description="Aqui será realizado o churrasco"
              />
            )}
          </MapView>
          </View>
        </ScrollView>
      )}
      <TouchableOpacity
        style={style.buttonParticipante}
        onPress={() => {
          navigation.navigate("Resultado")
        }}
      >
        <Text style={style.textButton}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ED7941",
  },
  header: {
    width: "100%",
    height: 160,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "90%",
    height: 360,
    marginLeft: "auto",
    marginRight: "auto",
  },
  botaoVoltar: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  cep: {
    backgroundColor: "#ffff",
    width: "100%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: 13,
    borderRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
  iconSearch: {
    zIndex: 999,
    position: "absolute",
    right: 18,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: 50,
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mapContainer: {
    backgroundColor: "#fff",
    width: 370,
    height: 450,
    marginLeft: "auto",
    marginRight: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  titleMap:{
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    paddingBottom: 6
  },
  titleScroll:{
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 18,
    fontWeight: "700"
  },
  subtitleScroll:{
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 16,
    fontWeight: "500"
  },
  buttonParticipante: {
    backgroundColor: "#E95811",
    padding: 10,
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
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    position: "absolute",
    bottom: 20,
    right: 30,
  },
  textButton: {
    fontWeight: "500",
    fontSize: 20,
    color: "#fff",
    lineHeight: 24,
  },
});
