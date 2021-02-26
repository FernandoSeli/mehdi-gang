import * as React from 'react';
import { Text, View, StyleSheet, Modal } from 'react-native';
import { white } from '../../styles/Styles';
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

    return (
        <Modal visible={visible} style={localStyles.modal} transparent={true}>
            <View style={localStyles.modalView}>
                <View style={localStyles.container}>
                    <Text>Edit your entry data here.</Text>
                </View>
                <Button title={"Close"} onPress={closeModal} />
            </View>
        </Modal >
    );
};

export default ExerciseDataModal;

const localStyles = StyleSheet.create({
    modal: {
        maxWidth: 500,
        maxHeight: 300,
        alignSelf: 'center',
    },
    container: {
        padding: 36,
    },
    modalView: {
        flex: 1,
        // marginHorizontal: 16,
        marginTop: 64,
        backgroundColor: "white",
        borderRadius: 5,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 4,
    },
});
