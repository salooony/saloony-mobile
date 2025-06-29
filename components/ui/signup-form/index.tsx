import { Colors } from '@/theme/colors';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { styles } from './style';

interface SignupFormData {
    firstName: string;
    lastName: string;
    email: string;  
    password: string;
    phone: string;
    birthdate: string;  
}
const SignupForm: React.FC = () => {
    const [secureText, setSecureText] = useState<boolean>(true);
    const { control, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<SignupFormData>({
        defaultValues: { firstName: '', lastName: '', email: '', password: '', phone: '', birthdate: '' }
    });
    const onSubmit: SubmitHandler<SignupFormData> = async (data: SignupFormData) => {
      try {
         // Simulate a network request
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);    
        } catch (error) {
        setError('email', { message: 'Une erreur est survenue, veuillez réessayer plus tard.' });
        console.error('Error during signup:', error);
      }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.inputText}>Nom *</Text>
            <Controller
                control={control}
                name="lastName"
                rules={{ required: 'Merci de saisir votre nom' }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        mode="outlined"
                        value={value}
                        onChangeText={onChange}
                        autoCapitalize="words"
                        style={styles.input}
                        theme={{
                            colors: {
                            primary: Colors.brand.primary,
                            outline: Colors.dark.background,
                        },
      }}
                    />
                )}
            />
            {errors.lastName && <Text style={styles.errorText}>{errors.lastName.message}</Text>}
            <Text style={styles.inputText}>Prénom *</Text>
            <Controller
                control={control}
                name="firstName"
                rules={{ required: 'Merci de saisir votre prénom' }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        mode="outlined"
                        value={value}
                        onChangeText={onChange}
                        autoCapitalize="words"
                        style={styles.input}
                        theme={{
                            colors: {
                                primary: Colors.brand.primary,
                                outline: Colors.dark.background,
                            },
                        }}
                    />
                )}
            />
            {errors.firstName && <Text style={styles.errorText}>{errors.firstName.message}</Text>}
            <Text style={styles.inputText}>Email *</Text>
            <Controller
                control={control}
                name="email"
                rules={{ 
                    required: 'Merci de saisir votre adresse email' , 
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Adresse email invalide'
                    }
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        mode="outlined"
                        value={value}
                        onChangeText={onChange}
                        autoCapitalize="words"
                        style={styles.input}
                        theme={{
                            colors: {
                                primary: Colors.brand.primary,
                                outline: Colors.dark.background,
                            },
                        }}
                    />
                )}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
            <Text style={styles.inputText}>Téléphone *</Text>
            <Controller
                control={control}
                name="phone"
                rules={{ required: 'Merci de saisir votre numéro de téléphone' }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        mode="outlined"
                        value={value}
                        onChangeText={onChange}
                        autoCapitalize="words"
                        style={styles.input}
                        theme={{
                            colors: {
                                primary: Colors.brand.primary,
                                outline: Colors.dark.background,
                            },
                        }}
                    />
                )}
            />
            {errors.phone && <Text style={styles.errorText}>{errors.phone.message}</Text>}
            <Text style={styles.inputText}>Mot de passe *</Text>
            <Controller
                control={control}
                name="password"
                rules={{ 
                    required: 'Merci de saisir votre mot de passe',
                    minLength: { value: 6, message: 'Le mot de passe doit contenir au moins 6 caractères' } 
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        mode="outlined"
                        value={value}
                        onChangeText={onChange}
                        autoCapitalize="words"
                        style={styles.input}
                        secureTextEntry={secureText}
                        theme={{
                            colors: {
                                primary: Colors.brand.primary,
                                outline: Colors.dark.background,
                            },
                        }}
                        right={
                            <TextInput.Icon
                                icon={secureText ? 'eye-off' : 'eye'}
                                onPress={() => setSecureText(!secureText)}
                            />
                        }   
                    />
                )}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
            <Button
                loading={isSubmitting}
                disabled={isSubmitting}
                mode="contained"
                onPress={handleSubmit(onSubmit)}
                style={styles.button}
            >
                Créer mon compte
            </Button>
        </View>
    )
}
export default SignupForm;