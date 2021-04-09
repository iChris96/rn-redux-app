import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from './components/ListItem'
import { connect } from 'react-redux'

const App = ({ todos, filters, dispatch }) => {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={todos}
                keyExtractor={x => String(x.id)}
                renderItem={({ item }) => <ListItem text={item.text} onPress={() => { }} />}
            />
        </View>
    );
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

const mapStateToProps = (state) => {
    console.log("state: ", state)
    return state;
}

export default connect(mapStateToProps)(App)
