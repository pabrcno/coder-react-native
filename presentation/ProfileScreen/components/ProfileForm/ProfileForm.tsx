import React from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";
import styled from "styled-components/native";
import { useCreateFBUser } from "../../../../application/hooks/useCreateFBUser";

//a react native component that receives two text inputs email and name
//and a button that when pressed, sends the data to the server using firebase

const ProfileForm = () => {
  const [email, setEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const { error, loading, createUser } = useCreateFBUser(email, userName);
  const handleSubmit = async () => {
    await createUser();
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setUserName}
        value={userName}
        placeholder="Your Name"
      />
      <Button onPress={handleSubmit} title="Create user" />
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default ProfileForm;
