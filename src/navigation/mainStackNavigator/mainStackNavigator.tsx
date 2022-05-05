// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogInScreen } from '../../../modules/authentication/ui/screens/logInScreen';
import { SignInScreen } from '../../../modules/authentication/ui/screens/signInScreen';
import { HomeScreen } from '../../../modules/home/ui/screens/homeScreen';

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="logInScreen" component={LogInScreen} />
                <Stack.Screen name="signInScreen" component={SignInScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
