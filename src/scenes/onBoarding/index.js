import React from "react";
import { View, Image, TouchableOpacity, Button, Text } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnBoarding = ({ navigation }) => {
  const Skip = () => (
    <TouchableOpacity onPress={() => navigation.replace("Login")}>
      <Text style={{ marginHorizontal: 10, color: "#fff" }}>Pular</Text>
    </TouchableOpacity>
  );
  const Next = ({ ...props }) => (
    <TouchableOpacity {...props}>
      <Text style={{ marginHorizontal: 10, color: "#FFF" }}>Próximo</Text>
    </TouchableOpacity>
  );
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.replace("Login")}
      pages={[
        {
          backgroundColor: "#2e2e2e",
          image: <Image source={require("../../assets/onboarding-img1.png")} />,
          title: "Salve suas ideias",
          subtitle: "Nunca mais esqueça de nada.",
        },
        {
          backgroundColor: "#68686b",
          image: <Image source={require("../../assets/onboarding-img2.png")} />,
          title: "Em qualquer lugar",
          subtitle: "Utilize em qualquer hora e lugar.",
        },
        {
          backgroundColor: "#2e2e2e",
          image: <Image source={require("../../assets/onboarding-img3.png")} />,
          title: "Não para por aqui",
          subtitle: "Utiize o repositório no GitHub e Fork esse projeto.",
        },
      ]}
    />
  );
};

export default OnBoarding;