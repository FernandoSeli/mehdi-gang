import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/Styles'

export interface Props {
}

export default function Profile(props: Props) {
    return (
        <View style={styles.darkContainer}>
            {/* <Text style={styles.white}>Profile Page</Text> */}
            <TouchableOpacity>
                <Text style={styles.linkedText}>
                    See all workout templates (Routines)
                </Text>
            </TouchableOpacity>
        </View>
    );
}
