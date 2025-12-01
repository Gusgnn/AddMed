import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Login from "./login";
import Cadastrar from "./cadastrar";
import Listar from "./listar";
import { styles } from "../styles/home";

export default function Home() {
  const [tela, setTela] = useState("home");

  if (tela === "login") return <Login voltar={() => setTela("home")} />;
  if (tela === "cadastrar") return <Cadastrar voltar={() => setTela("home")} />;
  if (tela === "listar") return <Listar voltar={() => setTela("home")} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sistema de Atendimento Médico</Text>

      <TouchableOpacity style={styles.button} onPress={() => setTela("login")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setTela("cadastrar")}>
        <Text style={styles.buttonText}>Cadastrar Atendimento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setTela("listar")}>
        <Text style={styles.buttonText}>Listar Atendimentos</Text>
      </TouchableOpacity>
    </View>
  );
}
