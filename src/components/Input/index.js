import React from 'react';
import { TextInput, StyleSheet } from 'react-native'


export default ({ onChange, value, onSubmit }) => {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            onSubmitEditing={onSubmit}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#eee',
        height: 34,
        alignSelf: 'stretch',
        padding: 4
    }
})