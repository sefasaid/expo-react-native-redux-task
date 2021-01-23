import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './pages/Login';
const Stack = createStackNavigator();
import { RootSiblingParent } from 'react-native-root-siblings';
import { AppState } from './store/store';
import Loader from 'react-native-modal-loader';
import Home from './pages/Home';
import { loadApp, logoutApp } from './store/auth/effects';

export default function App() {

    const dispatch = useDispatch();
    const { loading, user } = useSelector(
        (state: AppState) => state.auth
    )
    dispatch(loadApp());
    const logout = () => {
        dispatch(logoutApp());
    }
    return (
        <RootSiblingParent>
            <NavigationContainer>
                <Stack.Navigator >
                    { user.token.trim() == '' ? (
                        <Stack.Screen
                            name="Login"
                            component={ Login }
                            options={ { headerShown: false } }
                        />
                    ) : (
                            <Stack.Screen
                                name="Home"
                                component={ Home }
                                options={ {
                                    headerShown: true,
                                    headerRight: () => (
                                        <Button
                                            onPress={ logout }
                                            title="Logout"
                                            color="#000"
                                        />
                                    )
                                } }
                            />
                        )
                    }
                </Stack.Navigator>
            </NavigationContainer>
            <Loader loading={ loading.show } color="#ff66be" />

        </RootSiblingParent>

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
