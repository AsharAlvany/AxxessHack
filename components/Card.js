import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';

export default function Card (props){
    return (
        <TouchableOpacity>
        
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: Colors.darkBlue,
        shadowOffset: { width: 3, height: 2},
        shadowRadius: 10,
        shadowOpacity: .5,
        backgroundColor: 'black',
        //padding: 20,
        borderRadius: 20, 
        margin: 20,
        marginHorizontal: 60,
        //flexDirection: 'row',
        width: 250,
        height: 160,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 5,
        borderColor: Colors.darkBlue
    },
    cardImg:
    {
        width: 250,
        height: 150,
        borderRadius: 20,
        resizeMode: 'cover',
        opacity: .6


    },
    cardTit:
    {
        width: "100%",
        flex: 1,
        fontSize: 20,
        paddingTop: 10,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        marginTop: 100,
        paddingLeft: 20

    }
});