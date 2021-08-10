import React, {useState} from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    //hàm này để lấy thông tin từ input 
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  
    return (

        <View style={styles.inputContainer} >
            <TextInput ref={input => { this.textInput = input }} Placeholder="age" style={styles.inputItemWork} onChangeText={goalInputHandler} />
            <Button title="add" onPress={() => props.onAddGoal(enteredGoal)} />
        </View>

    )
}

const styles = StyleSheet.create({
    inputContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    inputItemWork:
    {
        textDecorationLine: 'none',
        width: '80%',
        padding: 5,
        marginRight: 10,
        fontSize: 16,
        borderWidth: 1
    }

})




export default GoalInput