import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from '@react-native-community/datetimepicker';

const Formulario = ({ modalVisible, nuevaCitaHandler }: any) => {
  const [selectedSpecies, setSelectedSpecies] = useState();
  const [paciente, setPaciente] = useState("hook");
  const [propietario, setPropietario] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [sintomas, setSintomas] = useState("");
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView style={{ flex: 1 }}>
          <Text style={styles.titulo}>
            Nueva {""}
            <Text style={styles.tituloBold}>Cita</Text>{" "}
          </Text>
          <Pressable onPress={nuevaCitaHandler}>
            <Text style={styles.btnCancelar}>Cancelar</Text>
          </Pressable>
          <View style={styles.input}>
            <Text style={styles.label}>Paciente:</Text>
            <Picker
              style={styles.pickerSpecies}
              mode="dropdown"
              selectedValue={selectedSpecies}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedSpecies(itemValue);
              }}
            >
              <Picker.Item label="Gato" value="gato" />
              <Picker.Item label="Perro" value="perro" />
              <Picker.Item label="Otro" value="otro" />
            </Picker>
            <TextInput
              style={styles.inputText}
              placeholder="Nombre del paciente"
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.label}>Nombre Propietario:</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Nombre del propietario"
              value={propietario}
              onChangeText={setPropietario}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>Telefono Propietario:</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Telefono del propietario"
              keyboardType="numeric"
              value={telefono}
              onChangeText={setTelefono}
              maxLength={10}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>Email Propietario:</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Email del propietario"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.input}>
            <Text style={[styles.label, styles.labelSintomas]}>Sintomas del Paciente:</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Sintomas"
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
            />
          </View>

          <Pressable>
            <Text style={styles.btnCrearCita}>Crear Cita</Text>
          </Pressable>
        </ScrollView>
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
  input: {
    marginBottom: 5,
  },
  label: {
    color: "#fff",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 15,
    fontWeight: "600",
  },
  inputText: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 10,
    marginHorizontal: 15,
  },
  pickerSpecies: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginBottom: 15,
    elevation: 10,
    borderRadius: 10,
  },
  btnCrearCita: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    textTransform: "uppercase",
    backgroundColor: "#ddb226ff",
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 20,
    elevation: 10,
  },
  labelSintomas: {
    height: 100,
  }
});
