import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/Styles'

export interface Props {
    item: any,
    onPress: any,
}

export default function WorkoutCard(props: Props) {

    const { item, onPress } = props

    return (
        <TouchableOpacity onPress={() => onPress(item)}>
            <View style={[styles.homeCard, {
                flexDirection: 'row',
                // flex: 1,
                alignItems: 'center'
            }]}>
                <Text style={localStyle.title}>{item.name}</Text>
                <Text style={[styles.light, localStyle.date]}>02/04/2021</Text>
            </View>
        </TouchableOpacity>
    );
}


const localStyle = StyleSheet.create({
    date: {
        textAlign: 'center',
        marginLeft: 'auto',
        fontSize: 12,
    },
    title: {
        fontSize: 15,
        color: 'black', //'white'
        letterSpacing: -1,
    }
})