import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";


import Perfil from "./src/Pages/Perfil";
import TelaInicial from "./src/Pages/TelaInicial";
import Participante from "./src/Pages/Participante";
import EscolhaCarnes from "./src/Pages/EscolhaCarnes";
import Bebidas from './src/Pages/Bebidas/index'
import Localizacao from "./src/Pages/Localizacao";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      
        <Stack.Navigator>
          <Stack.Screen
            name="TelaInicial"
            component={TelaInicial}
            options={{ headerShown: false}}
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
            name="Localizacao"
            component={Localizacao}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
    </NavigationContainer>
  );
}
