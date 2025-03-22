import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ArregloDividido = () => {
    const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    const divididos = arreglo.map((val: number, index: number) => {
        return { key: index, value: val / 5 };
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Valores divididos por 5:</Text>
            {divididos.map((item) => (
                <Text key={item.key} style={styles.text}>
                    Índice {item.key}: {item.value}
                </Text>
            ))}
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
    },
});

export default ArregloDividido;
