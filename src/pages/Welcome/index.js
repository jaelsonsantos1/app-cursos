import { 
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            {/* Forma azul superior */}
            <Animatable.View
                animation="fadeInDown"
                style={styles.containerLogo}
            >

                {/* Base circular para imagem logo */}
                <Animatable.View
                    delay={600}
                    animation={"flipInY"}
                    style={styles.shapeLogo}
                >
                    {/* Imagem logo */}
                    <Image
                        source={require('../../assets/img/icone-logo.png')}
                        style={{width:'100%'}}
                    />
                </Animatable.View>
            </Animatable.View>

            {/* Área para os textos e o botão */}
            <View style={styles.containerForm}>

                {/* Titulo */}
                <Text style={styles.title}>
                    CursoX
                </Text>

                {/* Frase abaixo do título */}
                <Text style={styles.Text}>
                    Invista em si mesmo, torne-se uma versão melhor de você!
                </Text>

                {/* Botão para entrar no aplicativo */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('SignIn');
                    }}
                >
                    {/* Texto do botão */}
                    <Text style={styles.textButton}>
                        Comece agora!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
