import { Text, View } from 'react-native';
import * as React from 'react';
import { lightBackground } from '../styles/Styles'
import styles from '../styles/Styles'

const exerciseRow = ({ item }) => {

    const plus = ' + '

    return (
        <View key={item.key} style={{
            backgroundColor: lightBackground,
            height: 40,
            margin: 6,
            minWidth: '90%',
            paddingHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{ color: 'white', fontWeight: 'bold', marginHorizontal: 2 }}>
                {item.name}
            </Text>
            <Text style={{ color: 'white', marginHorizontal: 2 }}>
                {item.sets} sets of
            </Text>
            <Text style={{ color: 'white', marginHorizontal: 2 }}>
                {item.reps} reps
            </Text>
        </View>
    )
}
export default exerciseRow;