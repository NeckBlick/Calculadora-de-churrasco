import React, { useState, useRef } from "react";
import { View, StyleSheet, Text, Modal, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function CardVideo({ data }) {
  const [verModal, setVerModal] = useState(false);
  const [playing, setPlaying] = useState(false);
  const controlRef = useRef();

  const onStateChange = (state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  };
  return (
    <View style={style.containervideo}>
      <TouchableOpacity onPress={() => setVerModal(true)}>
        <Text style={style.titulo_video}>Receita com {data.assado}</Text>
      </TouchableOpacity>
      <Modal animationType="slide" visible={verModal} >
        <View style={style.container}>
          <View style={style.modalContainer}>
            <YoutubePlayer
            height={205}
            ref={controlRef}
            play={playing}
            videoId={data.ytid}
            onChangeState={onStateChange}
            />
            <TouchableOpacity style={style.btnVoltar} onPress={setVerModal}>
                <Text style={style.texto}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const style = StyleSheet.create({
  containervideo: {
    width: 350,
    marginLeft: "auto",
    marginRight: "auto",
  },
  titulo_video: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 50,
    textDecorationLine: 'underline',
    textDecorationColor: '#fff',
  },
  container: {
    marginLeft: 10,  
    marginRight: 10,  
    marginBottom: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
      width: "100%",
      height: "auto",
      backgroundColor: '#fff',
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
  },
  btnVoltar: {
      backgroundColor: '#e52246',
      padding: 10,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
  },
  texto: {
    color: '#fff',
    fontSize: 16,
},
});
