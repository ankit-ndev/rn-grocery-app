
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import React from 'react';
import axios from 'axios';

const HomeScreen = ({navigation}) => {

  const performPressAction = () => {
    console.log("Navigatin...")
    axios.get("https://api.jsonbin.io/b/5fce7e1e2946d2126fff85f0")
    .then(res => {
      if (res.data)
        navigation.navigate('FoodList', res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <TouchableHighlight
                onPress={ performPressAction }
                style = {styles.wrapperCustom} >
                <View style = { styles.button_container }>
                    <Text style={styles.text}>VIEW LIST</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
  }


  export default HomeScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    button_container: {
      height: 50,
      width: 150,
      justifyContent: 'center',
      backgroundColor: '#73c6b6'
    },
    text: {
      fontSize: 19,
      textAlign: 'center',
      color: 'white'
    },
    wrapperCustom: {
      borderRadius: 8,
      padding: 16
    }
  });