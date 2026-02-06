import { StyleSheet, Text, View } from "react-native";

const Paciente = ({ item }: { item: any }) => {
  const { paciente, dateSelected } = item;

  const formatDate = (dateSelected: any) => {
    if (!dateSelected) return "Fecha no disponible";
    const nuevaFecha = new Date(dateSelected);
    if (isNaN(nuevaFecha.getTime())) return "Fecha inválida";
    const opciones = {
      weekday: "long" as const,
      year: "numeric" as const,
      month: "long" as const,
      day: "numeric" as const,
    };
    return nuevaFecha.toLocaleDateString("es-ES", opciones);
  };

  return (
    <View style={styles.paciente}>
      <Text>{paciente}</Text>
      <Text>{formatDate(dateSelected)}</Text>
    </View>
  );
};

export default Paciente;

const styles = StyleSheet.create({
  paciente: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
});
