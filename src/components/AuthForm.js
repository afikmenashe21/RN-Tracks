import React, { useState } from 'react';
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={(newText) => setEmail(newText)} // equals to : onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='email-address'
            />
            <Spacer />
            <Input
                label="Passord"
                value={password}
                onChangeText={setPassword} // equals to : onChangeText={(password) => setPassword(password)}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
            />
            {errorMessage ? (<Text style={styles.error}>{errorMessage}</Text>) : null}
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
            </Spacer>
        </>
    )
};

const styles = StyleSheet.create({
    error: {
        marginLeft: 15,
        marginTop: 15,
        color: 'red',
        fontSize: 16
    }
})

export default AuthForm;