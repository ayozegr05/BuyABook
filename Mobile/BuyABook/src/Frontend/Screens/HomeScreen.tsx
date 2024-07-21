import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BooksScreen from "./books.js";
const Main = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Buy a Book</Text>
            <View style={styles.booksContainer}>
                <BooksScreen />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 150,
    },
 
});

export default Main;
