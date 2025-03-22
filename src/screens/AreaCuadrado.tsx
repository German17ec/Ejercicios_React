import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AreaCuadrado = () => {
    const calcularArea = (lado: number): number => {
        return lado * lado;
    };

    const area = calcularArea(5);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>El área del cuadrado es: {area}</Text>
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

export default AreaCuadrado;
