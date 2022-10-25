import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import  Icon  from 'react-native-vector-icons/FontAwesome';


export default function Cadastro() {
  const navigation = useNavigation();
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [usuario, setUsuario] = useState();
  const [senha, setSenha] = useState();
  const [status, setStatus] = useState();
  const user = {
    nome: nome,
    email: email,
    usuario: usuario,
    senha: senha,
  }
  const cadUser= () => {
    let cadUser = AsyncStorage.setItem(nome, JSON.stringify(user))
    if(cadUser){
      navigation.navigate("Login")
    }else{
      setStatus("Não foi possivel cadastrar o usuario")
    }
  }

  
  return (
    <>
      <View style={style.container}>
        <TouchableOpacity
          style={style.buttonBack}
          onPress={() => navigation.navigate("TelaInicial")}
        >
          <Icon name='arrow-left' size={20} color="#000"/>
        </TouchableOpacity>
        <Text style={style.title}>Cadastro</Text>
        <View>
          <View style={{position:"relative", alignItems:"center"}}>
          <Icon name="user-circle" size={20} color="#000" style={style.userIcon} />

            <TextInput
              style={style.input}
              placeholder="Nome"
              
              onChangeText={setNome}
            />
          </View>
          <View style={{position:"relative"}}>
          <Icon name="envelope" size={20} color="#000" style={style.userIcon} />

          <TextInput
            style={style.input}
            placeholder="Email"
            name="email"
            onChangeText={setEmail}
          />
          </View>
          <View style={{position:"relative"}}>
          <Icon name="user" size={20} color="#000" style={style.userIcon} />

          <TextInput
            style={style.input}
            placeholder="Usuário"
            name="user"
            onChangeText={setUsuario}
          />
          </View>
          <View style={{position:"relative"}}>
          <Icon name="lock" size={20} color="#000" style={style.userIcon} />

          <TextInput
            style={style.input}
            secureTextEntry={true}
            placeholder="Senha"
            name="senha"
            onChangeText={setSenha}
          />
          </View>
        </View>
        <TouchableOpacity
          style={style.button}
          onPress={cadUser}
        >
          <Text style={style.textButton}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.text}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "#fff" }}>
            Já tenho uma conta.
            <Text style={{ color: "#2C2C2C", textAlign: "center" }}>
              Fazer Login
            </Text>
          </Text>
        </TouchableOpacity>
        <Text>{status}</Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#ED7941",
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
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
    marginBottom:16
  },
  textButton: {
    fontWeight: "500",
    fontSize: 20,
    color: "#fff",
    lineHeight: 24,
  },
  title: {
    fontWeight: "400",
    fontSize: 45,
    color: "#000",
    lineHeight: 48,
    marginBottom: 40,
  },
  input: {
    backgroundColor: "rgba(241, 241, 241, 0.8);",
    width: 300,
    padding: 8,
    paddingLeft: 40,
    marginBottom: 20,
    borderRadius: 15,
    fontSize: 14,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    position: "absolute",
    bottom: 25,
    flex: 1,
    alignItems: "center",
  },
  buttonBack: {
    position: "absolute",
    top: 45,
    left: 30,
  },
  userIcon:{
    position:"absolute",
    left:15,
    top:8
  }
});
