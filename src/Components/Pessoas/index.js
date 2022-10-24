import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import  Icon  from 'react-native-vector-icons/FontAwesome';

export default function CardPessoas({ icon }) {
  const [count, setCount] = useState(0);
  return (
    <View style={style.container}>
      <View style={style.iconContainer}>
        <Icon name={icon} size={45} color={"#000"}/>
      </View>
      <View style={style.buttonContainer}>
        <TouchableOpacity onPress={() => setCount(count - 1)}>
          <Text style={style.icon}>-</Text>
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 32 }}>
          {count < 0 ? setCount(0) && count : count}
        </Text>
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text style={style.icon}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
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
});
