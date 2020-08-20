import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./HomeScreen.styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}
