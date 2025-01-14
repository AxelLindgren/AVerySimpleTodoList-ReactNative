import { StyleSheet, Text, View, TextInput } from "react-native";

const MainApp = () => {
  return (
    <>
      {/* <View style={styles.container}> */}
      <Text>Input into your list here</Text>
      <TextInput />
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "blue", padding: 20 },
  text: { color: "white", fontSize: 18 },
});

export default MainApp;