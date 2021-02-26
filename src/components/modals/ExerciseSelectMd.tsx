import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import styles from '../../styles/Styles';
import Button from '../buttons/Button';
import Modal from 'react-native-modal'

interface ExerciseSelectModalProps {
    visible: boolean;
    closeModal: any;
}

const ExerciseSelectModal = (props: ExerciseSelectModalProps) => {

    let { visible, closeModal } = props;

    const [text, changeText] = React.useState('');

    const onSave = () => {
        alert("Save form entry!");
        //Create new exercise entity here
        clearModal();
    }

    const clearModal = () => {
        closeModal();
        changeText('');
    }

    return (
        // <Modal
        //         visible={visible}
        //         style={localStyles.modal}
        //         animationType='slide'
        //         transparent={true}
        // >
        <Modal
            style={localStyles.modal}
            isVisible={visible}
            animationIn='slideInUp'
            animationOut='slideOutDown'
            backdropOpacity={0.15}
            coverScreen={true}
            onBackdropPress={() => clearModal()}
        >
            <View style={localStyles.modalView}>
                <TextInput
                    style={styles.grayTextInput}
                    onChangeText={text => changeText(text)}
                    value={text}
                    placeholder="Search"
                    placeholderTextColor='gray'
                />
                <View style={localStyles.container}>
                    {/* Exercise List */}
                </View>
                {/* <View style={localStyles.footer}>
                    <View style={localStyles.bottomRowWrapper}>
                        <Button title="Save" onPress={onSave} />
                        <Button title="Close" onPress={closeModal} />
                    </View>
                </View> */}
            </View>
        </Modal>
    );
};

export default ExerciseSelectModal;

const localStyles = StyleSheet.create({
    container: {
        paddingTop: 14,
        paddingHorizontal: 18,
        flex: 1,
    },
    modal: {
        // borderRadius: 5,
        marginHorizontal: 34,
        marginVertical: 124,
    },
    modalView: {
        backgroundColor: "white",
        flex: 1,
        borderRadius: 4,
        overflow: 'hidden',
    },
    footer: {
        height: 40,
        // flex: 1,
        alignItems: 'flex-end',
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
