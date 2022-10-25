import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import Login from "./src/Pages/Login";
import Perfil from "./src/Pages/Perfil";
import TelaInicial from "./src/Pages/TelaInicial";
import Cadastro from "./src/Pages/Cadastro";
import AuthProvider from "./src/Contexs/Auth";
import Participante from "./src/Pages/Participante";
import EscolhaCarnes from "./src/Pages/EscolhaCarnes";
import Bebidas from './src/Pages/Bebidas/index'
import Receitas from './src/Pages/Receitas'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="TelaInicial"
            component={TelaInicial}
            options={{ headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false   }}
          />
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Perfil"
            component={Perfil}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Participante"
            component={Participante}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bebidas"
            component={Bebidas}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Carnes"
            component={EscolhaCarnes}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Receitas"
            component={Receitas}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
