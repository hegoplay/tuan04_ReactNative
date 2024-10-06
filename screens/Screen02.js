import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { CheckBox } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "../components/CustomInput";
import Color from "../constants/Color";
import { useContext, useState } from "react";
import CustomButton from "../components/CustomButton";
import {UserContext} from "../store/UserContext";
const Screen02 = ({ navigation }) => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const userCtx = useContext(UserContext);
  const handleContinue = () => {
    if (checked) {
      userCtx.addUser({ email, password });
      // console.log(userCtx.users);
      navigation.navigate("Screen03",{prevEmail : email,prevPassword: password});
    }
    else{
      Alert.alert("Please agree to the terms and conditions");
    }
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1, padding: 10 }}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} onPress={navigation.goBack} />
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../assets/images/Screen02_Icon.png")} />
          <Text style={styles.title}>Nice to see you</Text>
          <Text style={styles.label}>Create your account</Text>
        </View>
        <CustomInput
          iconName={"person-outline"}
          isPassword={false}
          placeholder="Enter your user name"
          setInputText={setUsername}
          inputText={userName}
          style={{ marginVertical: 10 }}
        />
        <CustomInput
          iconName={"mail-outline"}
          isPassword={false}
          placeholder="Enter your email address"
          setInputText={setEmail}
          inputText={email}
          style={{ marginVertical: 10 }}
        />
        <CustomInput
          iconName={"lock-closed-outline"}
          isPassword={true}
          placeholder="Enter your password"
          setInputText={setPassword}
          inputText={password}
          style={{ marginVertical: 10 }}
        />
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            paddingVertical: 10,
          }}
        >
          <CheckBox
            checked={checked}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <View style={{ justifyContent: "center" }}>
            <Text>
              I agree with{" "}
              <Text style={{ color: Color.primary }}>Terms & Conditions</Text>{" "}
            </Text>
          </View>
        </View>
        <CustomButton title="Continue" textColor="white" onPress={handleContinue}/>
      </View>
    </View>
  );
};

export default Screen02;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    fontWeight: "light",
    color: "#999",
  },
});
