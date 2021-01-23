import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getWallets } from '../store/auth/effects';
import { AppState } from '../store/store';


export default function Home() {
    const dispatch = useDispatch();
    const { accountWallets, user } = useSelector(
        (state: AppState) => state.auth
    )
    useEffect(() => {
        if (user.token.trim() !== '') {
            dispatch(getWallets(user.id))
        }
    }, [user.token]);
    return (
        <SafeAreaView style={ { flex: 1 } }>
            <View style={ styles.container } >
                <FlatList
                    style={ styles.listView }
                    data={ accountWallets }
                    renderItem={
                        ({ item }) =>
                            <View style={ styles.walletView } >
                                <Text style={ styles.walletName }>{ item.name }</Text>
                                <Text style={ styles.trust }>{ item.symbol } { item.trust }</Text>
                            </View>
                    }
                    keyExtractor={ (item, index) => item.id.toString() }
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    walletView: {
        width: '100%',
        backgroundColor: '#465881',
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20
    },
    listView: {
        padding: '10%',
        width: '100%',
    },
    walletName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    trust: {
        color: 'white',
        fontSize: 18
    }
});
