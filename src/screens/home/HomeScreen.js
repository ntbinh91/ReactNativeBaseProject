import React from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import styles from "./HomeScreen.styles";

function HomeScreen({ navigation, count, increment, incrementAsync }) {
  return (
    <View style={styles.wrapper}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      <View>
        <Text>The count is {count}</Text>
        <Button onPress={increment} title="increment" />
        <Button onPress={incrementAsync} title="incrementAsync" />
      </View>
    </View>
  );
}

const mapState = state => ({
  count: state.count,
});

const mapDispatch = dispatch => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1),
});

export default connect(mapState, mapDispatch)(HomeScreen);
