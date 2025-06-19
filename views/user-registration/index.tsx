import SignupForm from '@/components/ui/signup-form';
import { Link } from 'expo-router';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    View
} from 'react-native';
import { styles } from './style';

const SignupPage = () => { 

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Nouveau sur Saloony ?</Text> 
                <SignupForm />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Vous avez déjà un compte ?</Text>
                    <Link href="/login" style={styles.link}>Se connecter</Link>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default SignupPage;