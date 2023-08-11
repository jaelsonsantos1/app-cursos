import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity
            style={
                props.activate ? styles.buttonActivate:styles.buttonDisable
            }
            onPress={
                props.action
            }
            disabled={!props.activate}
        >
            <Text
                style={
                    props.activate ? styles.textButtonActivate:styles.textButtonDisable
                }
            >
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonActivate: {
        position: 'absolute',
        bottom: props.bottom,
        backgroundColor: '#A5FC83',
        height: 45,
        width: props.width,
        borderRadius: 39,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButtonActivate: {
        fontSize: 12,
        color: '#000',
    },
    buttonDisable: {
        position: 'absolute',
        bottom: props.bottom,
        backgroundColor: '#EFF0F4',
        height: 45,
        width: props.width,
        borderRadius: 39,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButtonDisable: {
        fontSize: 12,
        color: '#9AA3B6',
    }
});

export default Button;
