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
            style={styles.modal}
            isVisible={visible}
            animationIn='slideInUp'
            animationOut='slideOutDown'
            backdropOpacity={0.15}
            coverScreen={true}
            onBackdropPress={() => clearModal()}
            onBackButtonPress={() => clearModal()}
        >
            <View style={styles.modalView}>
                <TextInput
                    style={styles.grayTextInput}
                    onChangeText={text => changeText(text)}
                    value={text}
                    placeholder="Search"
                    placeholderTextColor='gray'
                />
                <View style={localStyles.container}>
                    {/* Exercise List */}
                    <Text>Exercise list here (WiP)</Text>
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
});
