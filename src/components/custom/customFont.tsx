import { useLinkProps } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const customFont = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontFamily: 'New-York-r'}}>{}</Text>
        </View>
    );
};

export default customFont;

const styles = StyleSheet.create({
    container: {}
});
