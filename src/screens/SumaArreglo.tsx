import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SumaArreglo = () => {
    const sumarElementos = (arr: number[]): number => {
        return arr.reduce((acc, val) => acc + val, 0);
    };

    const suma = sumarElementos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>La suma de los elementos del arreglo es: {suma}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        padding: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
});

export default SumaArreglo;
