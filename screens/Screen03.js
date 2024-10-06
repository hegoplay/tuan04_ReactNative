import { useContext, useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, Alert } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Color from "../constants/Color";
import { UserContext } from "../store/UserContext";

const Screen03 = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userCtx = useContext(UserContext);
  useEffect(() => {
    const { prevEmail = "", prevPassword = "" } = route.params;
    setEmail(prevEmail);
    setPassword(prevPassword);
  }, []);
  const handleSubmit = () =>{
    users = userCtx.users;
    let check = false;
    users.forEach((user) => {
      if (user.email === email && user.password === password) {
        navigation.navigate("Screen04");
        check = true;
        return;
      }
    });
    if(!check)
        Alert.alert("Invalid credentials","email or password not found");

  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Screen03_Bg.png")}
        style={styles.image}
        resizeMode="cover"
      ></Image>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.label}>Email</Text>
        <CustomInput
          iconName="mail-outline"
          inputText={email}
          inputBgColor={Color.gray}
          placeholder="Enter email"
          setInputText={setEmail}
        />
        <Text style={styles.label}>Password</Text>
        <CustomInput
          iconName="lock-closed-outline"
          inputText={password}
          inputBgColor={Color.gray}
          placeholder="Enter password"
          isPassword={true}
          setInputText={setPassword}
        />
        <CustomButton title="Login" style={{paddingTop:24}} textColor="white" onPress={handleSubmit}/>
      </View>
    </View>
  );
};

export default Screen03;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  image: {
    width: "100%",
  },
  innerContainer: {
    backgroundColor: "white",
    marginTop: -16,
    flex: 1,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 56,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    paddingTop: 24,
    paddingBottom:8
  },
});
