import { StyleSheet, Platform } from 'react-native';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';

export const themeColor = '#5caff2'
export const buttonColor = '#359cf0'
export const offBlack = '#222222'
const themeColorLight = '#a3d6ff'
const themeContrastSuperLight = '#fafff2'
export const white = '#FFFFFF'//'#262626'
export const gray = '#454545'
export const lightBackground = '#F9F9F9' //'#111114'
export const light = '#FBFBFB'
export const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
export const borderColor = '#eeeeee'

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
        // alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        justifyContent: 'flex-start',
        flex: 1,
        paddingTop: 24,
        // alignItems: 'center',
    },
    whiteContainer: {
        backgroundColor: 'white',//'black',
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
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
        fontSize: 14,
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
    headerButton: {
        fontSize: 16,
        color: themeColor,
        marginHorizontal: 18,
    },
    //Text
    bold: {
        fontFamily: 'bold',
        // color: 'white'
    },
    medium: {
        fontFamily: 'medium'
    },
    text: {
        fontSize: 14,
    },
    textButton: {
        fontSize: 14,
        color: buttonColor
    },
    textBold: {
        fontSize: 14,
        fontFamily: 'medium',
        // color: 'white'
    },
    h1: {
        fontSize: 18,
        fontFamily: 'medium',
        // color: 'white'
    },
    h2: {
        fontSize: 16,
        fontFamily: 'medium',
        // color: 'white'
    },
    title: {
        fontSize: 18,
        fontFamily: 'medium',
        // color: 'white',
        marginVertical: 6,
    },
    title2: {
        fontSize: 14,
        // color: 'white',
        marginVertical: 6,
    },
    light: {
        fontSize: 14,
        color: 'gray',
    },
    lightRegular: {
        fontSize: 14,
        color: 'gray'
    },
    debug: {
        fontSize: 12,
        color: 'red'
    },
    //Inputs and Form Components
    textInput: {
        borderWidth: 1,
        height: 40,
        borderColor: 'gray'
    },
    grayTextInput: {
        borderWidth: 1,
        height: 42,
        borderColor: borderColor,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        paddingLeft: 18,
        backgroundColor: lightBackground
    },
    formRow: {
        flexDirection: 'row',
        marginHorizontal: 8,
        marginVertical: 2
    },
    inputLabel: {
        paddingHorizontal: 6,
        paddingVertical: 10,
        fontSize: 14,
        // fontFamily: 'medium',
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
        marginVertical: 4,
        paddingHorizontal: 16,
        paddingVertical: 14,
    },
    //Modal
    modal: {
        // borderRadius: 5,
        marginHorizontal: 16,
        marginVertical: 104,
    },
    modalView: {
        backgroundColor: "white",
        flex: 1,
        borderRadius: 4,
        overflow: 'hidden',
    },
    footer: {
        minHeight: 40,
        maxHeight: 100,
        justifyContent: 'flex-end'
        // backgroundColor: 'red',
        // paddingHorizontal: 12,
        // paddingVertical: 8,
    },
    bottomRowWrapper: {
        // backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        // alignSelf: 'flex-end',
    }
});

export default styles;
