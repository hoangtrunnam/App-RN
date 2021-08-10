import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './component/GoalItem';
import GoalInput from './component/GoalInput';
// import { useState } from 'react';

export default function App() {

  const [courseGoals, setCourseGoal] = useState([]);
  

  // hàm này để nhét các giá trị vừa lấy được vào 1 mảng khi click chuột 
  const addGoalHandler = goalTitle => {
    setCourseGoal(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle }]);
    this.textInput.clear()
  };

  return (

    <View style={styles.screen} >

    <GoalInput onAddGoal={addGoalHandler} />
      <FlatList data={courseGoals} renderItem={itemData => <GoalItem title={itemData.item.value} />
        // itemData.item (item,index la ham co san) bene duowis la de tro vao du lieu cua no,  vi du :itemdata.index la tro vao phan tu mang        
      }
      />
    </View>

  );
};


// phần giao diện 
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
 
});