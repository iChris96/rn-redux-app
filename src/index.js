import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from './components/ListItem'

export default () => {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={[
                    { id: 1, text: "todo 1", completed: false },
                    { id: 2, text: "todo 2", completed: false },
                ]
                }
                keyExtractor={x => x.id}
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
