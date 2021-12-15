// React Native dynamic todo list
import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";
import TodoType from "../../../../domain/types/challenge";
import Todo from "../Challenge";
import baseChallenges from "../../../../infrastructure/data/challenges";
import Challenge from "../Challenge";
import ChallengeType from "../../../../domain/types/challenge";
const StyledButton = styled.TouchableOpacity`
  background-color: #202020;
  padding: 20px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 65px;
`;

// TodoList component
const ChallengeList = () => {
  const [challenges, setChallenges] = React.useState<ChallengeType[]>([
    ...baseChallenges,
  ]);
  const [challengeText, setChallengeText] = React.useState<string>("");
  const onDeleteChallenge = (id: number) => {
    setChallenges(challenges.filter((challenge, i) => challenge.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setChallengeText(text);
        }}
        autoComplete={false}
      />
      <StyledButton
        onPress={() => {
          console.log(challenges);
          console.log("PRESSED");
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
    </View>
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

export default ChallengeList;
