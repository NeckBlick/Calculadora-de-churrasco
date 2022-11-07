import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios'


export default function App() {
  const [location, setLocation] = useState({
    latitude: '',
    longitude: '',
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [loading, setLoading] = useState(true);
  const [cep, setCep] = useState();
  const [local, setLocal] = useState()
  const [loadingCep, setLoadingCep] = useState(true)
  const [mapRegion, setMapRegion] = useState({
    latitude: '',
    longitude: '',
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
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
      if(cep){
        if(cep.length == 8){
          return cep.replace(/(\d{5})/g, "\$1-", cep);
        }
      }
  }
  const buscarCep = async () => {
    let { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .catch(err => {
        alert("Digite o cep")
      })
    setLocal(data)
      let response = await axios.get(`https://geocode.search.hereapi.com/v1/geocode?q=${data.logradouro}+${data.bairro}&apiKey=vpElMOWqr4ByGBopvqPMFd1XGwI2kg0ah8R0q32Mieg`)
    .catch(erro => {
      console.log(err)
    })
  console.log(response.data.items[0].position)
    setMapRegion({
    latitude:response.data.items[0].position.lat,
    longitude: response.data.items[0].position.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
   setLoadingCep(false)
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <TouchableOpacity
          style={style.botaoVoltar}
          onPress={() => navigation.goBack()}>
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
      {loading ? (
        ''
      ) : (
        <View style={style.mapContainer}>
        <Text>Localização do seu churrasco</Text>
        <MapView initialRegion={location} region={mapRegion} style={style.map} showsMyLocationButton={true}>
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Sua Localização"
            description="Você está aqui"
          />
          {loadingCep ? "" : <Marker
            coordinate={{
              latitude: mapRegion.latitude,
              longitude: mapRegion.longitude,
            }}
            title="Local do churrasco"
            description="Aqui será realizado o churrasco"
          />}
        </MapView>
      </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ED7941',
  },
  header: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '90%',
    height: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  botaoVoltar: {
    position: 'absolute',
    top: 40,
    left: 30,
  },
  cep: {
    backgroundColor: '#ffff',
    width: '100%',
    height: "100%",
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 13,
    borderRadius:10
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  iconSearch:{
    zIndex:999,
    position:"absolute",
    right: 18
  },
  containerInput:{
    flexDirection: "row",
    alignItems:"center",
    width: '90%',
    height: 50,
    position:"relative",
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mapContainer:{
    backgroundColor:"#fff",
    width: "90%",
    height:450,
    justifyContent: "center",
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
