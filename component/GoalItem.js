import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

const GoalItem =  props => {
    return (
        <View style={styles.listItem} >
          <Text>{props.title}</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
      listItem: {
      padding: 10,
      marginVertical: 10,
      borderWidth: 1,
      borderColor: 'black',
      fontSize: 17,
      backgroundColor: '#ccc'
  }
})

export default GoalItem