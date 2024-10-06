import { Button, Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color } from "../constants/Color";
import CustomButton from "../components/CustomButton";

const Screen01 = ({navigation}) => (
  <View style={styles.container}>
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../assets/images/Container17.png")}
        style={{ width: "100%", borderRadius: 30 }}
      />
    </View>
    <Text style={styles.title}>Boost Productivity</Text>
    <Text style={styles.label}>Simpify tasks, boost productivity</Text>
    <CustomButton
      btnColor={Color.primary}
      title="Sign up"
      textColor="white"
      style={StyleSheet.create({ marginVertical: 10 })}
      onPress={() => navigation.navigate("Screen02")}
    />
    <CustomButton
      btnColor="white"
      title="Login"
      textColor="#333"
      style={StyleSheet.create({ marginVertical: 10 })}
      onPress={() => navigation.navigate("Screen03",{prevEmail:"",prevPassword:""})}
    />
    <View style={{flexDirection:"row", justifyContent:"center"}}>
      <Ionicons name="ellipse-outline" size={24} color={Color.primary} />
      <Ionicons name="ellipse" size={24} color={Color.primary} />
      <Ionicons name="ellipse-outline" size={24} color={Color.primary} />
    </View>
  </View>
);

export default Screen01;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    fontWeight: "light",
    color: "#999",
  },
});
