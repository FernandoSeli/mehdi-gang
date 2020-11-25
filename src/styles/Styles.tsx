import { StyleSheet, Platform } from 'react-native';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';

const themeColor = '#841584'
const themeColorLight = '#881989'
const themeContrastSuperLight = '#fafff2'

const styles = StyleSheet.create({
    //Base
    colored: {
        color: themeColor
    },
    white: {
        color: 'white',
    },
    //Layout
    row: {
        flexDirection: 'row',
        // flex: 1,
    },
    //Containers
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        justifyContent: 'flex-start',
        backgroundColor: '#F8F8F8',
        flex: 1,
    },
    darkContainer: {
        backgroundColor: '#0A0A0A',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    defaultLight: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        flex: 1,
    },
    //Buttons
    button: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        height: 36,
        borderWidth: 1,
        borderColor: themeColor,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    buttonText: {
        color: themeColor,
        fontSize: 16
    },
    buttonSolid: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        height: 36,
        backgroundColor: themeColor,
        borderRadius: 4
    },
    //Text
    text: {
        fontSize: 16,
    },
    textBold: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    h1: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 30,
        fontWeight: '300',
        color: themeColor,
        marginVertical: 6,
    },
    title2: {
        fontSize: 18,
        color: themeColor,
        marginVertical: 6,
    },
    light: {
        fontSize: 14,
        color: 'gray',
    },
    debug: {
        fontSize: 12,
        color: 'red'
    },
    //Inputs and Form Components
    formRow: {
        flexDirection: 'row',
        marginHorizontal: 24,
        marginVertical: 8
    },
    inputLabel: {
        marginRight: 12,
        fontSize: 16,
        // fontWeight: 'bold',
        color: themeColor,
        textAlignVertical: 'center', lineHeight: Platform.OS === 'ios' ? 40 : 20,
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        // backgroundColor: 'black', //Testing purposes only.
    },
    inputBox: {
        padding: 8,
        fontSize: 16,
        height: 36,
        flex: 5,
        borderWidth: 1,
        borderColor: '#d8d8d8'
    },
    card: {
        borderRadius: 6,
        borderColor: '#d2d2d2',
        borderWidth: 1,
        margin: 8,
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: 'white'
    },
    //UI Elements
    homeCard: {
        borderWidth: 0,
        borderRadius: 6,
        padding: 18,
        backgroundColor: 'white',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    }
});

export default styles;
