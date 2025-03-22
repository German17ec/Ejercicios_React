import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PromedioCalificaciones = () => {
    const alumnos = [
        { 
            nombre: "Viviana", 
            edad: 19, 
            calificacion: 10 
        },
        { 
            nombre: "Wendy", 
            edad: 20, 
            calificacion: 8 
        },
        { 
            nombre: "Gerson", 
            edad: 18,
            calificacion: 9 
        },
    ];

    const calcularPromedio = (arr: { nombre: 
        string, edad: 
        number, calificacion: 
        number }[]): number => {
        const total = arr.reduce((acc, alumno) => acc + alumno.calificacion, 0);
        return total / arr.length;
    };

    const promedio = calcularPromedio(alumnos);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>El promedio de las calificaciones de los estudiantes es: {promedio}</Text>
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

export default PromedioCalificaciones;
