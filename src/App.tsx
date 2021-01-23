import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './pages/Login';
const Stack = createStackNavigator();

export default function App() {

    const state = useSelector(state => {
        console.log(state);
        return state;
    });
    console.log(state);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen
                    name="Login"
                    component={ Login }
                    options={ { headerShown: false } }
                />

            </Stack.Navigator>

        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
