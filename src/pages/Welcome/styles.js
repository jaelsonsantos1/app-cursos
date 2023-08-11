import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    containerLogo: {
        backgroundColor: '#111B32',
        width: '100%',
        flex: 1,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
    },
    shapeLogo: {
        position: 'absolute',
        bottom: -66.2,
        left: '35%',
        width: 133,
        height: 133,
        backgroundColor: '#F4F4F4',
        borderRadius: 133,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    containerForm: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight:'bold',
        marginTop: '30%',
    },
    Text: {
        fontSize: 12,
        marginTop: 35,
    },
    button: {
        position: 'absolute',
        bottom: '15%',
        backgroundColor: '#A5FC83',
        height: 45,
        width: '60%',
        borderRadius: 39,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 12,
        color: '#000',
    }
})

export default styles;
