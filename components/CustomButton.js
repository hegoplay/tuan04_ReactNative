import { Pressable, StyleSheet, Text, View } from "react-native";
import Color  from "../constants/Color";

const CustomButton = ({
  btnColor = Color.primary,
  textColor,
  fontSize = 16,
  style = StyleSheet.create({}),
  onPress = () => {},
  title = "",
  children,
}) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          styles.innerContainer,
          { backgroundColor: btnColor },
          pressed && styles.onPressEffect,
          style
        ]}
        onPress={onPress}
      >
        <Text style={{ color: textColor, fontSize, justifyContent:"center", alignItems:"center" }}>{title}{children}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  onPressEffect: {
    opacity: 0.7,
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: Color.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
