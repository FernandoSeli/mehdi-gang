import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styles, { offBlack, white } from '../../styles/Styles';
import Modal from 'react-native-modal';
import Button from '../buttons/Button';

interface ExerciseDataModalProps {
    visible: boolean,
    toggle: any,
}

const ExerciseDataModal = (props: ExerciseDataModalProps) => {

    const closeModal = () => {
        toggle(false)
    }

    const { visible, toggle } = props;
    const data = {
        name: "Bench Press",
        sets: [
            { order: 0, reps: 8, rest: 90 },
            { order: 1, reps: 8, rest: 90 },
            { order: 2, reps: 8, rest: 90 },
        ]
    }

    const renderRow = ({ item }) => {
        return (
            <View key={item.order} style={localStyles.row}>
                <View style={[localStyles.rowComponent, localStyles.setColumn]}>
                    <Text style={[localStyles.label, styles.bold]}>Set</Text>
                    <Text style={localStyles.text}>{item.order}</ Text>
                </View>
                <View style={[localStyles.rowComponent, localStyles.repsColumn]}>
                    <Text style={[localStyles.label, styles.bold]}>Reps</Text>
                    <Text style={localStyles.text}>{item.reps}</ Text>
                    <Text> + - </Text>
                </View>
                <View style={[localStyles.rowComponent, localStyles.restColumn]}>
                    <Text style={[localStyles.label, styles.bold]}>Rest</Text>
                    <Text style={localStyles.text}>{item.rest}</ Text>
                    <Text> + - </Text>
                </View>
            </View>
        );
    }

    return (
        <Modal
            isVisible={visible}
            style={localStyles.modal}
            backdropOpacity={0.15}
            onBackButtonPress={closeModal}
            onBackdropPress={closeModal}
            animationIn='fadeIn'
            animationOut='fadeOut'
        >
            <View style={styles.modalView}>
                <View style={localStyles.container}>
                    <Text style={[styles.h2, { textAlign: 'center' }]}>{data.name}</Text>
                    <View style={localStyles.subContainer}>
                        {
                            data.sets.map((item) => renderRow({ item }))
                        }
                        <View style={localStyles.subContainerFooter}>
                            <TouchableOpacity style={{backgroundColor: 'red'}}>
                                <Text style={[styles.textButton, {}]}>+ Add a new set</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.bottomRowWrapper}>
                        <Button title="Close" onPress={closeModal} />
                    </View>
                </View>
            </View>
        </Modal >
    );
};

export default ExerciseDataModal;

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    subContainer: {
        flex: 1,
        paddingHorizontal: 8,
        paddingTop: 12,
        // backgroundColor: 'yellow'
    },
    subContainerFooter: {
        flex: 1,
        justifyContent: 'flex-end',
        // backgroundColor: 'red'
    },
    modal: {
        marginHorizontal: 14,
        marginVertical: 160,
    },
    modalView: {

    },
    row: {
        flexDirection: 'row',
        marginBottom: 14,
        // flex: 1,
    },
    rowComponent: {
        flexDirection: 'row',
        flex: 1,

        borderColor: 'red',
        borderWidth: 1,
        // backgroundColor: 'yellow'
    },
    label: {
        // backgroundColor: 'green',
        textAlignVertical: 'center',
        color: offBlack,
        marginRight: 6,
        fontSize: 15,
    },
    text: {
        // backgroundColor: 'blue',
        fontSize: 15,
        // textAlignVertical: 'center',
    },
    setColumn: {
        flex: 2,
        paddingRight: 14,
    },
    repsColumn: {
        flex: 6,
    },
    restColumn: {
        flex: 6,
    },
});
