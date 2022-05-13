
import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from '../mainStackNavigator';
import { View } from 'react-native';

export const ContainerNavigator: FC = () => {
    return (
        <NavigationContainer>
            <MainStackNavigator />
        </NavigationContainer>
    );
};