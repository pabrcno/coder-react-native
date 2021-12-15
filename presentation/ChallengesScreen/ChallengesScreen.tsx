import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Appbar, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import ChallengeType from "../../domain/types/challenge";
import RootStackParamList from "../../domain/types/navigation";
import baseChallenges from "../../infrastructure/data/challenges";
import Challenge from "./components/Challenge";
import ChallengeList from "./components/ChallengeList";

type challengesScreenProp = StackNavigationProp<
  RootStackParamList,
  "Challenges"
>;
const StyledButton = styled.TouchableOpacity`
  background-color: #202020;
  margin-bottom: 20px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65px;
`;
const ChallengesScreen = () => {
  const navigation = useNavigation<challengesScreenProp>();
  const _goBack = () => console.log("Went back");
  const [challenges, setChallenges] = React.useState<ChallengeType[]>([
    ...baseChallenges,
  ]);
  const [challengeText, setChallengeText] = React.useState<string>("");
  const onDeleteChallenge = (id: number) => {
    setChallenges(challenges.filter((challenge, i) => challenge.id !== id));
  };
  return (
    <SafeAreaView>
      <Appbar.Header style={{ backgroundColor: "white" }}>
        <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
        <Appbar.Content title="Challenges" />
      </Appbar.Header>

      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setChallengeText(text);
        }}
        autoComplete={false}
        selectionColor="#202020"
        activeUnderlineColor="#202020"
      />
      <StyledButton
        onPress={() => {
          console.log(challenges);

          setChallenges([
            ...challenges,
            { id: Math.random(), title: challengeText, completed: false },
          ]);
          setChallengeText("");
        }}
      >
        <Text style={{ color: "white" }}>ADD</Text>
      </StyledButton>

      <ScrollView>
        {challenges.map((challenge, index) => (
          <Challenge
            challenge={challenge}
            onDelete={onDeleteChallenge}
            key={challenge.id}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  challengeInput: {
    flex: 1,
    flexDirection: "row",
    marginTop: 50,

    alignItems: "center",
    width: "95%",
    backgroundColor: "#F5FCFF",
  },
  input: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
  },
  challengeList: {
    flex: 1,
    flexDirection: "column",
    width: "90%",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontFamily: "VCR",
    color: "#fff",
    fontSize: 20,
  },
});

export default ChallengesScreen;
