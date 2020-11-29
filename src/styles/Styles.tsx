import { StyleSheet, Platform } from 'react-native';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';

export const themeColor = '#5caff2'
const themeColorLight = '#a3d6ff'
const themeContrastSuperLight = '#fafff2'
export const darkBackground = "#262626"
const lightBackground = '#1d1d1d'
export const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

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
        backgroundColor: darkBackground,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        justifyContent: 'flex-start',
        backgroundColor: 'black',
        flex: 1,
    },
    darkContainer: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    defaultLight: {
        backgroundColor: 'black',
        justifyContent: 'center',
        flex: 1,
        borderColor: 'transparent'
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
    linkedText: {
        textAlign: 'center',
        color: 'white',
        margin: 8,
        // textDecorationLine: 'underline'
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
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 6,
    },
    title2: {
        fontSize: 16,
        color: 'white',
        marginVertical: 6,
    },
    light: {
        fontSize: 14,
        color: '#b3b3b3',
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
        marginRight: 26,
        fontSize: 16,
        // fontWeight: 'bold',
        color: themeColorLight,
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
        borderColor: 'transparent',
        borderBottomColor: '#555555',
        color: 'white',
    },
    card: {
        borderRadius: 6,
        borderColor: '#d2d2d2',
        borderWidth: 0,
        marginTop: 14,
        marginHorizontal: 10,
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: lightBackground
    },
    //UI Elements
    homeCard: {
        borderWidth: 0,
        borderRadius: 6,
        padding: 18,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        backgroundColor: lightBackground
    }
});

export default styles;
