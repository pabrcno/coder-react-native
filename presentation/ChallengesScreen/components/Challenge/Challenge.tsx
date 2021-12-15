import React, { useState } from "react";
import ChallengeType from "../../../../domain/types/challenge";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

interface IProps {
  challenge: ChallengeType;
  onDelete: (id: number) => void;
  setCompleted: () => void;
}

const Challenge = ({ challenge, onDelete, setCompleted }: IProps) => {
  return (
    <View style={styles.challenge}>
      <TouchableOpacity
        onPress={() => {
          onDelete(challenge.id);
        }}
      >
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text style={styles.challengeText}>{challenge.title}</Text>
      </View>
      <TouchableOpacity onPress={setCompleted} style={styles.toggleButton}>
        <Text style={styles.toggleText}>
          {challenge.completed ? "Completed" : "TODO"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

//styles
const styles = StyleSheet.create({
  challenge: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F5FCFF",
    marginBottom: 20,
  },
  challengeText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  toggleButton: {
    width: 120,
    height: 50,
    backgroundColor: "#202020",
    justifyContent: "center",
    alignItems: "center",
  },
  toggleText: {
    fontSize: 20,
    color: "white",
  },
  delete: {
    fontSize: 25,
    color: "red",
    marginLeft: 10,
    fontWeight: "bold",
  },
});

export default Challenge;
