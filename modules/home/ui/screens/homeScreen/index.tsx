import * as React from 'react';
import { View, Text, Button } from 'react-native';

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>homeScreen345355434</Text>
            <Button
                title="LogOut"
                onPress={() => navigation.navigate('LogInScreen')}
            />
        </View>
    );
}