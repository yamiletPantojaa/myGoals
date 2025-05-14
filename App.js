import { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App(){
  const [goals, setGoals] = useState([])


  function handleAddGoal(enteredGoalText){
    //console.log(enteredGoalText)
    //console.log('Hello You')
    setGoals(() => [...goals, {text: enteredGoalText, key: Math.random()}])
    console.log('goals', goals)
    console.log('handleAddGoal')

  }

  function handleDeleteGoal(id){
  console.log('DELETE')
  const deleteGoal = goals.filter((goal) => {return goal.key !==id})
  setGoals(deleteGoal)

  }

  return(
  <View style ={style.goalscontainer}>
    <FlatList
    data={goals}
    renderItem={ (ItemData) =>{
      return(
        <GoalItem
        itemData={itemData}
        onDeleteItem={handleDeleteGoal}
        id={itemData.item.key}
        />
      )
    }}
    keyExtractor={(itemData) =>{
      return item.id
    }}
    />
  </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#7BC9FF'
  },
  btnGoal:{
    borderRadius: 20,
    backgroundColor: '#cccccc',
    width: '80%',
    marginRight: 3,
    padding: 8,
    borderRadius: 5
  },
  goalscontainer: {
    flex: 5
  },
});