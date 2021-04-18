
import { 
  View, 
  Text, 
  TouchableHighlight, 
  StyleSheet, 
  FlatList,
  Image
} from 'react-native';
import React from 'react';


const FoodList = ({ route }) => {

  const performPressAction = () => {
    console.log("props...", route.params.categories)
  }

  const renderItem = ({ item, idx }) => {
    return (
      <View style = {styles.listItemStyling}>
        <Text style = {styles.text}>{item.category.categoryName}</Text>
        <Image 
        style = {styles.logo}
          source = {{ uri: "https://i.pinimg.com/originals/65/11/98/651198ddbe0fe2cddd9e9099d6c94ffd.gif"}}
        />
      </View>
    );
  };

  return (
    <View style = { styles.container }>
        <Text style={styles.textDesc}>Welcome to the Food List page, Below are the list of items that can be useful.</Text>
        <FlatList
          data = { route.params.categories}
          renderItem = {renderItem}
          keyExtractor = {(item) => item.category.categoryName}
        />
    </View>
  )
}

export default FoodList;

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      padding: 16
    },
    text: {
      fontSize: 18,
      color: 'gray'
    },
    textDesc: {
      fontSize: 15,
      color: 'blue',
      margin: 10
    },
    button_container: {
      height: 50,
      width: 150,
      justifyContent: 'center',
      backgroundColor: '#73c6b6'
    },
    wrapperCustom: {
      borderRadius: 8,
      padding: 16
    },
    listItemStyling: {
      margin: 20,
      height: 180,
      padding: 16,
      backgroundColor: '#ffffff',
      flexDirection: 'column'
    },

  logo: {
    width: 90,
    height: 90,
  }
  });