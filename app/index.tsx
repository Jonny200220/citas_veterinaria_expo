import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Formulario from "./components/Formulario";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas {""}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        style={styles.btnNewCita}
        onPressIn={() => setModalVisible(true)}
      >
        <Text style={styles.btnText}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? (
        <Text style={styles.titulo}>No hay citas Agregadas</Text>
      ) : <Text>Si Hay pacientes</Text>}

      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F6",
    flex: 1,
  },
  titulo: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
    color: "#374151",
  },
  tituloBold: {
    fontWeight: "900",
    color: "#6D28D9",
  },
  btnNewCita: {
    padding: 15,
    backgroundColor: "#6D28D9",
    margin: 10,
    borderRadius: 10,
    elevation: 10,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
