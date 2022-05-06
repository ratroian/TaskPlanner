import * as React from 'react';
import { View, Text, Button } from 'react-native';

export const SignInScreen = ( { navigation } ) =>  {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>signInScreen</Text>
            <Button
                title="LogIn"
                onPress={() => navigation.navigate('LogInScreen')}
            />
        </View>
    );
}