import { Modal, Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Formulario = ({ modalVisible, nuevaCitaHandler }: any) => {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <Text style={styles.titulo}>
          Nueva {""}
          <Text style={styles.tituloBold}>Cita</Text>{" "}
        </Text>
        <Pressable onPress={nuevaCitaHandler}>
          <Text style={styles.btnCancelar}>Cancelar</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
};

export default Formulario;

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: "#6D28D9",
    flex: 1,
  },
  btnCancelar: {
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 10,
    color: "#6D28D9",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  titulo: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
    marginTop: 50,
  },
  tituloBold: {
    fontWeight: "700",
    color: "#fff",
  },
});
