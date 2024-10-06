import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import Color from "../constants/Color";

const CustomInput = ({
  iconName = "ellipse",
  placeholder = "???",
  isPassword = false,
  inputText = "",
  setInputText = () => {},
  style,
  inputBgColor = "#fff",    // Add this line
}) => {
  const [isHiding, setIsHiding] = useState(isPassword);
  const toggleHiding = () => setIsHiding((state) => !state);

  return (
    <View style={[styles.container,style, {backgroundColor: inputBgColor}]}>
      <Ionicons name={iconName} size={24} style={{ padding: 5 }} />
      <TextInput
        style={[styles.inputArea, ]}    // Add this line
        placeholder={placeholder}
        secureTextEntry={isHiding}
        onChangeText={setInputText}
        value={inputText}
      />
      {isPassword && (
        <Ionicons
          name={isHiding ? "eye-outline" : "eye-off-outline"}
          size={24}
          style={{ padding: 5 }}
          onPress={toggleHiding}
        />
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    borderColor: Color.gray,
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
  },
  inputArea: {
    flex: 1,
  },
});
