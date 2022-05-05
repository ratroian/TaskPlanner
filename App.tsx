import React from "react";
import { MainStackNavigator } from "./src/navigation/mainStackNavigator/mainStackNavigator";

export const App = () => {
    return (
        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen name="Home" component={HomeScreen} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <MainStackNavigator/>
    );
}
