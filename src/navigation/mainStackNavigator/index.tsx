import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LogInScreen } from '../../../modules/authentication/ui/screens/logInScreen';
import { SignInScreen } from '../../../modules/authentication/ui/screens/signInScreen';
import { HomeScreen } from '../../../modules/home/ui/screens/homeScreen';

const Stack = createStackNavigator();

export const MainStackNavigator: FC = () => {
    return (
            <Stack.Navigator initialRouteName="SignInScreen">
                <Stack.Screen name="SignInScreen" component={SignInScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="LogInScreen" component={LogInScreen} />
            </Stack.Navigator>
    );
}
