import * as React from 'react';
import { Text, View, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import styles from '../../styles/Styles';
import Button from '../buttons/Button';

interface ExerciseSelectModalProps {
    visible: boolean;
    closeModal: any;
}

const ExerciseSelectModal = (props: ExerciseSelectModalProps) => {

    let { visible, closeModal } = props;

    const onSave = () => {
        alert("Save form entry!")
        closeModal()
    }

    return (
        <Modal visible={visible} style={localStyles.modal} animationType='slide' transparent={true}>
            <View style={localStyles.modalView}>
                <View style={localStyles.container}>
                    <Text style={styles.title}>
                        Choose exercise:
                    </Text>
                </View>
                <View style={localStyles.footer}>
                    <View style={localStyles.bottomRowWrapper}>
                        <Button title="Save" onPress={onSave} />
                        < Button title="Close" onPress={closeModal} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ExerciseSelectModal;

const localStyles = StyleSheet.create({
    container: {
        paddingTop: 14,
        paddingHorizontal: 18,
        flex: 15,
    },
    modal: {
        maxWidth: 500,
        maxHeight: 500,
        alignSelf: 'center',
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
    footer: {
        // height: 40,
        flex: 1,
        alignItems: 'flex-end'
        // backgroundColor: 'red'
    },
    bottomRowWrapper: {
        // backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        // alignSelf: 'flex-end',
    }
});
