import * as React from 'react';
import { View, Text, Button } from 'react-native';

export const LogInScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>logInScreen</Text>
            <Button
                title="SignIn"
                onPress={() => navigation.navigate('SignInScreen')}
            />
            <Button
                title="Home"
                onPress={() => navigation.navigate('HomeScreen')}
            />
        </View>
    );
}