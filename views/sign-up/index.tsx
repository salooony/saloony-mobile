import ThemedText from '@/components/atoms/typography/ThemedText';
import { Link } from 'expo-router';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { styles } from './style';
import SignupForm from '@/components/organisms/signup-form';
import { ROUTES } from '@/constants/routes';


const SignupPage: React.FC = () => {

  return (
    <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <ScrollView style={styles.container}>
            <ThemedText type='title'>Nouveau sur Saloony ?</ThemedText>
            <SignupForm />
            <View style={styles.footer}>
                <ThemedText style={styles.footerText}>Vous avez déjà un compte ?</ThemedText>
                <Link href={ROUTES.LOGIN} style={styles.link}>Se connecter</Link>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignupPage;