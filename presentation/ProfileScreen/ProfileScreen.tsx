import React from "react";
import ImagePicker from "./components/ImagePicker";
import { SafeAreaView } from "react-native";
import { Appbar } from "react-native-paper";
import RootStackParamList from "../../domain/types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import ProfileForm from "./components/ProfileForm";

type profileScreenProp = StackNavigationProp<RootStackParamList, "Profile">;

const ProfileScreen = () => {
  const navigation = useNavigation<profileScreenProp>();

  return (
    <>
      <Appbar.Header style={{ backgroundColor: "white" }}>
        <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
        <Appbar.Content title="Your Profile!" />
      </Appbar.Header>
      <ImagePicker />
      <ProfileForm />
    </>
  );
};
export default ProfileScreen;
