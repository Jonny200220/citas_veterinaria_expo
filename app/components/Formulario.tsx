import { Modal, Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Formulario = ({ modalVisible, nuevaCitaHandler }: any) => {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.container}>
        <Text>Desde el modal</Text>
        <Pressable onPress={nuevaCitaHandler}>
          <Text style={styles.btnCancelar}>Cancelar</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
};

export default Formulario;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnCancelar: {
    padding: 15,
    backgroundColor: "#6D28D9",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 10,
    color: "#fff",
  },
});
