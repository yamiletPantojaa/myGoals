import { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

function GoalInput({onAddGoal}) {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function handleInputGoal(enteredText) {
        // console.log(enteredText)
        setEnteredGoal(enteredText)
    }

    function addGoalHandler(){
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
        console.log('addGoalHandler')
    }
    return(
    <View style={style.GoalInputContainer}>
        <TextInput
        style={style.TextInput}
        placeholder='Your Goal'
        onChangeText={handlerInputGoal}
        value={enteredGoalText}
        />
    </View>
    )
}

export default GoalInput

const stuyles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottonWidth: 1,
        borderBottomColor: '#7BC9FF'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '80%',
        marginRight: 3,
        padding: 8,
        borderRadius: 5
    }
})