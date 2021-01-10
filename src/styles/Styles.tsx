import { StyleSheet, Platform } from 'react-native';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';

export const themeColor = '#5caff2'
const themeColorLight = '#a3d6ff'
const themeContrastSuperLight = '#fafff2'
export const darkBackground = '#FFFFFF'//'#262626'
export const gray = '#454545'
export const lightBackground = '#EFEFEF' //'#111114'
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
        // backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
    },
    darkContainer: {
        backgroundColor: 'white',//'black',
        flex: 1,
        // alignItems: 'center',
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
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 0,
        backgroundColor: 'transparent',
        width: 180,
        height: 40,
    },
    buttonText: {
        color: themeColor,
        fontSize: 15,
        // textDecorationLine: 'underline'
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
        color: 'black',
        margin: 8,
        textDecorationLine: 'underline'
    },
    //Text
    bold: {
        fontFamily: 'OpenSans-bold',
        letterSpacing: -.5,
        // color: 'white'
    },
    text: {
        fontSize: 14,
        letterSpacing: -.5,
        // color: 'white'
    },
    textBold: {
        fontSize: 14,
        letterSpacing: -.5,
        fontFamily: 'OpenSans-bold',
        // color: 'white'
    },
    h1: {
        fontSize: 18,
        letterSpacing: -.5,
        fontFamily: 'OpenSans-bold',
        // color: 'white'
    },
    title: {
        fontSize: 18,
        letterSpacing: -.5,
        fontFamily: 'OpenSans-bold',
        // color: 'white',
        marginVertical: 6,
    },
    title2: {
        fontSize: 15,
        letterSpacing: -.5,
        // color: 'white',
        marginVertical: 6,
    },
    light: {
        fontSize: 14,
        letterSpacing: -.5,
        color: '#b3b3b3',
    },
    debug: {
        fontSize: 12,
        letterSpacing: -.5,
        color: 'red'
    },
    //Inputs and Form Components
    formRow: {
        flexDirection: 'row',
        marginHorizontal: 8,
        marginVertical: 2
    },
    inputLabel: {
        paddingHorizontal: 6,
        paddingVertical: 10,
        fontSize: 14,
        // fontFamily: 'OpenSans-bold',
        // color: 'white',
        // textAlignVertical: 'center', lineHeight: Platform.OS === 'ios' ? 40 : 20,
        flex: 1,
        // backgroundColor: 'red', //Testing purposes only.
    },
    inputBox: {
        padding: 6,
        fontSize: 14,
        flex: 4,
        borderWidth: 1,
        borderColor: 'transparent',
        // borderBottomColor: gray,
        // color: 'white',
        // backgroundColor: 'red',
    },
    card: {
        // borderColor: '#d2d2d2',
        borderWidth: 0,
        marginTop: 14,
        marginHorizontal: 10,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: lightBackground
    },
    //UI Elements
    homeCard: {
        borderWidth: 0,
        // elevation: 2,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        backgroundColor: lightBackground,
        marginHorizontal: 10,
        marginVertical: 8,
        paddingHorizontal: 16,
        paddingVertical: 14,
    }
});

export default styles;
