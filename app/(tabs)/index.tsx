import React from "react";
import { 
  View, 
  Text, 
  StyleSheet,
  Button,
  SafeAreaView,
  Alert,
 } from "react-native";



function App() {

  const Seperator = () => <View style={Styles.separator} />

  const Styles = StyleSheet.create({
    container: {
      margin: 'auto',
    },
    buttonBgc: {
      margin: 'auto',
    },
    white: {
      color: 'black',
      fontSize: 50,
    },
    background: {
      backgroundColor: 'yellow',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button: {
      margin: 'auto',
    }
  })

  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.background}>
          <Text style={Styles.white}>HavApp</Text>
        </View>
      </View>
      <View style={Styles.buttonBgc}>
        <Button  
        title="Get Started"
        onPress={() => Alert.alert('Butona basıldı!')} />
      </View>
    </>
  )
}

export default App;