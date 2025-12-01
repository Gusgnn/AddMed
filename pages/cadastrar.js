import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/cadastrar";
import { adicionarAtendimento } from "../model/atendimentos";

export default function Cadastrar({ voltar }) {
  const [paciente, setPaciente] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  function salvar() {
    adicionarAtendimento({
      paciente,
      data,
      hora
    });
    voltar();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Atendimento</Text>

      <TextInput style={styles.input} placeholder="Paciente" value={paciente} onChangeText={setPaciente} />
      <TextInput style={styles.input} placeholder="Data" value={data} onChangeText={setData} />
      <TextInput style={styles.input} placeholder="Hora" value={hora} onChangeText={setHora} />

      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={voltar}>
        <Text style={styles.back}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
