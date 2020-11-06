import { StyleSheet } from 'react-native';

const themeColor = '#841584'
const themeColorLight = '#881989'

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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        justifyContent: 'flex-start',
        backgroundColor: 'white',
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
        borderRadius: 4
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
    //Inputs and Form Components
    formRow: {
        flexDirection: 'row',
        marginHorizontal: 24,
        marginVertical: 8
    },
    inputLabel: {
        marginRight: 12,
        fontSize: 16,
        fontWeight: 'bold',
        color: themeColor,
        textAlignVertical: 'center',
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
        borderColor: 'black'
    },
    card: {
        borderRadius: 6,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 16,
        padding: 6,
        backgroundColor: '#FAFAFA'
    }
});

export default styles;
