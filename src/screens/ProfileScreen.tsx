import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../components/buttons/Button';
import ExerciseSelectModal from '../components/modals/ExerciseSelectMd';
import ModalBase from '../components/modals/ModalBase';
import styles from '../styles/Styles'

export interface Props {
}

export default function Profile(props: Props) {

    const [modalVisible, toggleModal] = React.useState(false)

    const onPress = () => {
        toggleModal(true);
    }

    return (
        <View style={styles.whiteContainer}>
            {/* <Text style={styles.white}>Profile Page</Text> */}
            {/* <TouchableOpacity>
                <Text style={styles.linkedText}>
                    See all workout templates (Routines)
                </Text>
            </TouchableOpacity> */}

            <ExerciseSelectModal closeModal={() => toggleModal(false)} visible={modalVisible} />

            <View style={localStyles.btnContainer}>
                <Button title="ExerciseSelectMd.tsx" onPress={onPress} />
            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    btnContainer: {
        height: 50,
        alignSelf: 'stretch'
    }
})
