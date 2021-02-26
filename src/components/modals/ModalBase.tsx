import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

interface ModalProps {
  children: any;
  visible: boolean;
}

const ModalBase = (props: ModalProps) => {

  return (
    <Modal isVisible={props.visible}>
      <View style={{ flex: 1 }}>
        <Text>Hello!</Text>
      </View>
    </Modal>
  );
};

export default Modal;

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
});
