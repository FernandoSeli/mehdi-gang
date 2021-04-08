import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import styles from '../../styles/Styles';

interface HeaderButtonProps {
    onPress: any,
    children: any
}

const HeaderButton = (props: HeaderButtonProps) => {

    const { onPress, children } = props

    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.headerButton}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default HeaderButton;
