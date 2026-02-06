import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from "react-native-ui-datepicker";

interface NuevoPaciente {
  paciente: string;
  propietario: string;
  telefono: string;
  email?: string;
  sintomas: string;
  dateSelected: DateType;
}

const Formulario = ({
  modalVisible,
  setModalVisible,
  pacientes,
  setPacientes,
}: any) => {
  const [selectedSpecies, setSelectedSpecies] = useState();
  const [paciente, setPaciente] = useState("");
  const [propietario, setPropietario] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [dateSelected, setDateSelected] = useState<DateType>();
  const defaultStyles = useDefaultStyles();

  const newCitaHandler = () => {
    // Validar que no este vacio
    if (
      !paciente ||
      !propietario ||
      !telefono ||
      !email ||
      !sintomas ||
      !dateSelected
    ) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    } else {
      const nuevoPaciente: NuevoPaciente = {
        paciente,
        propietario,
        telefono,
        email,
        sintomas,
        dateSelected,
      };

      setPacientes([...pacientes, nuevoPaciente]);
      setModalVisible(false);
      console.log("Cita creada...");
      console.log(nuevoPaciente);
      setPaciente("");
      setPropietario("");
      setTelefono("");
      setEmail("");
      setSintomas("");
      setDateSelected(new Date());
    }
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView style={{ flex: 1 }}>
          <Text style={styles.titulo}>
            Nueva {""}
            <Text style={styles.tituloBold}>Cita</Text>{" "}
          </Text>
          <Pressable
            onPress={() => setModalVisible(false)}
            style={styles.btnCancelar}
          >
            <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
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
            <Text style={styles.label}>Fecha de Cita:</Text>
            <DateTimePicker
              mode="single"
              date={dateSelected}
              onChange={({ date }) => setDateSelected(date)}
              styles={{
                ...defaultStyles,
                day_label: { color: "#000" },
                outside_label: { color: "#000" },
                disabled_label: { color: "#000" },
                today: { borderColor: "#000", borderWidth: 1 },
                today_label: { color: "#000" },
                selected: { backgroundColor: "#E5E7EB" },
                selected_label: { color: "#000" },
                header: { backgroundColor: "#e7b81eff" },
              }}
              style={{
                backgroundColor: "#fff",
                marginHorizontal: 10,
                borderRadius: 10,
              }}
            />
          </View>
          <View style={styles.input}>
            <Text style={[styles.label]}>Sintomas del Paciente:</Text>
            <TextInput
              style={[styles.inputText, styles.inputTextArea]}
              placeholder="Sintomas"
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
            />
          </View>

          <Pressable onPress={newCitaHandler}>
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
    backgroundColor: "#5827A4",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 10,
    textTransform: "uppercase",
    borderWidth: 1,
    borderColor: "#fff",
  },
  btnCancelarTexto: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
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
  inputTextArea: {
    height: 120,
    textAlignVertical: "top",
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
    backgroundColor: "#e7b81eff",
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 20,
    elevation: 10,
  },
});
