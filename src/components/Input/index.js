import React from 'react';
import { TextInput, StyleSheet } from 'react-native'


export default ({ onChange, value }) => {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
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