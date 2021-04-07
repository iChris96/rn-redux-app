import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
    },
    text: {
        fontSize: 18
    }
});
