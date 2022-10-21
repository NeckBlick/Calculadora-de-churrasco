import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import Login from './src/Pages/Login';
import Perfil from './src/Pages/Perfil';
import TelaInicial from './src/Pages/TelaInicial';
import Cadastro from './src/Pages/Cadastro';


export default function App() {

  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TelaInicial' component={TelaInicial} options={{ headerShown: false}}/>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false}}/>
        <Stack.Screen name='Cadastro' component={Cadastro} options={{ headerShown: false}}/>
        <Stack.Screen name='Perfil' component={Perfil}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

