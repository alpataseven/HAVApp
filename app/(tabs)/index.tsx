import React from "react";
import { View, Text, StyleSheet } from "react-native";

function App() {

  const Styles = StyleSheet.create({
    container: {
      margin: 'auto',
    },
    white: {
      color: 'black',
      fontSize: 50,
    },
    background: {
      backgroundColor: 'yellow',
    }
  })

  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.background}>
          <Text style={Styles.white}>HavApp</Text>
        </View>
      </View>
    </>
  )


}

export default App;