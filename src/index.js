import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from './components/ListItem'
import { connect } from 'react-redux'
import { completedAction, addTodoThunk } from './reducers/todos';
import Input from './components/Input'

const App = ({ todos, filters, dispatch, handleCompleted, addTodo }) => {

    const [value, setValue] = useState('');

    const handleChange = (val) => {
        setValue(val);
    }

    const handleSubmit = () => {
        addTodo(value);
        setValue('');
    }

    return (
        <View style={styles.container}>
            <Input onChange={handleChange} value={value} onSubmit={handleSubmit} />
            <FlatList
                style={styles.list}
                data={todos}
                keyExtractor={x => String(x.id)}
                renderItem={({ item }) => <ListItem text={item.text} onPress={() => { handleCompleted(item.id) }} isCompleted={item.completed} />}
            />
            {/* <LittleText /> { /* this not receive redux state yet*/}
        </View>
    );
}

const LittleText = (props) => {
    console.log(props)
    return (<Text>{"little textx"}</Text>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch'
    }
});

//INJECT STATE AS PROP
const mapStateToProps = (state) => {
    //console.log("state: ", state)
    return state;
}

//INJECT ACTIONS CREATORS AS PROPS
const mapDistatchToProps = (dispatch) => {
    return {
        handleCompleted: (id) => dispatch(completedAction(id)),
        addTodo: (val) => dispatch(addTodoThunk(val))
    }
}

export default connect(mapStateToProps, mapDistatchToProps)(App)
