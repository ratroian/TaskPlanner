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
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="SignInScreen" component={SignInScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="LogInScreen" component={LogInScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
