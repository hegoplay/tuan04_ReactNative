import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useEffect } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import Color from "../constants/Color";
const Screen04 = ({ navigation }) => {
  //   const imgList = ["_7_2", "_7_1", "_7_4", "_7"];
  const imagePath = [
    require("../assets/images/Image_7_2.png"),
    require("../assets/images/Image_7_1.png"),
    require("../assets/images/Image_7_4.png"),
    require("../assets/images/Image_7.png"),
  ];
  const imgBg = [
    require("../assets/images/Container_7_2.png"),
    require("../assets/images/Container_7_1.png"),
    require("../assets/images/Container_7_4.png"),
    require("../assets/images/Container_7.png"),
  ];
  const colors = ["#f00", "#0f0", "#00f", "#ff0"];
  const [idx, setIdx] = useState(0);
  const sizeList = ["XS", "S", "M", "L", "XL"];
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const str = "_7_2";
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          onPress={() => {
            navigation.goBack;
          }}
          size={24}
          style={{ marginRight: 10 }}
        />
        <Text style={styles.title}>Product name</Text>
      </View>
      <View>
        <Image style={styles.containerImage} source={imgBg[idx]} />
      </View>
      <View style={styles.list}>
        {/* <Image source={require("../assets/images/Image" + str + ".png")} /> */}
        {imagePath.map((img, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => {
                setIdx(index);
              }}
              style={[
                index === idx ? styles.imageSelected : {},
                { borderRadius: 10, overflow: "hidden" },
              ]}
            >
              <Image source={img} style={{ backgroundColor: colors[index] }} />
            </Pressable>
          );
        })}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.priceText}>$2,99</Text>
        <Text style={styles.redArea}>Buy 1 get 1</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={styles.title}>Product name</Text>
          <Text>Occaecat est deserunt tempor offici</Text>
        </View>
        <View
          style={{
            flexDirection: "row-reverse",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text>4.5</Text>
          <Image source={require("../assets/images/star.png")} />
        </View>
      </View>
      <Text style={{ paddingTop: 24, paddingBottom: 8, fontSize: 16 }}>
        Size
      </Text>
      <View
        style={{
          flexDirection: "row",
          borderRadius: 5,
          borderColor: Color.gray,
          overflow: "hidden",
          width: "auto",
        }}
      >
        {sizeList.map((sz, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => {
                setSize(sz);
              }}
              style={{
                backgroundColor: sz === size ? Color.primary : "white",
                padding: 10,
                borderColor: Color.gray,
                borderWidth: 1,
                borderTopEndRadius: sz === "XL" ? 5 : 0,
                borderBottomEndRadius: sz === "XL" ? 5 : 0,
                borderTopLeftRadius: sz === "XS" ? 5 : 0,
                borderTopRightRadius: sz === "XS" ? 5 : 0,
                minWidth: 40,
                alignItems: "center",
              }}
            >
              <Text style={{ color: sz === size ? "white" : "black" }}>
                {sz}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <Text style={{ paddingTop: 24, paddingBottom: 8, fontSize: 16 }}>
        Quantity
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CustomButton
            title={<Ionicons name="remove-sharp" />}
            textColor="black"
            style={{ borderRadius: 20 }}
            btnColor={Color.gray}
            onPress={() => {
              setQuantity(quantity - 1);
            }}
          />
          <Text style={{ marginHorizontal: 8 }}>{quantity}</Text>
          <CustomButton
            title={<Ionicons name="add-sharp" />}
            textColor="white"
            style={{ borderRadius: 20 }}
            onPress={() => {
              setQuantity(quantity + 1);
            }}
          />
        </View>
        <View style={{ flexDirection: "row-reverse", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>
            ${(quantity * 2.99).toFixed(2)}
          </Text>
          <Text style={{ color: Color.gray }}>Total</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Size guide</Text>
        <Ionicons name="arrow-forward" size={24} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Review (99)</Text>
        <Ionicons name="arrow-forward" size={24} />
      </View>
      <View style={styles.bottomContainer}>
        <View style ={{flex:1}}>
          <CustomButton>
            <Text style={{ color: "white" }}>
              {" "}
              <Ionicons name="cart" size={16} />
              Add to cart
            </Text>
          </CustomButton>
        </View>
      </View>
    </View>
  );
};

export default Screen04;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginVertical:10,
    marginTop: 10,
    alignItems: "center",
  },
  containerImage: {
    width: "100%",
    height: 200,
  },
  imageSelected: {
    borderColor: Color.primary,
    borderWidth: 2,
  },
  priceText: {
    fontSize: 40,
    fontWeight: "bold",
    color: Color.primary,
  },
  redArea: {
    backgroundColor: "#eca",
    padding: 6,
    borderRadius: 20,
    marginLeft: 10,
    fontSize: 12,
    color: "red",
  },
  bottomContainer: {
    borderTopColor: Color.gray,
    borderTopWidth: 2,
    paddingTop: 16,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
