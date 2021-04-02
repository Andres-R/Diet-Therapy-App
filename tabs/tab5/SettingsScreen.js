import { StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { Component } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


export default function SettingsScreen(route) {
    return (
        <View style={styles.defualtContainer}>
            <Text style={styles.defaultText}>
                Settings
            </Text>
            <TouchableOpacity style={styles.defaultAppButtonContainer}
                onPress={() => {
                    route.navigation.goBack();
                }}>
                <Text style={styles.defaultAppButtonText}>
                    go back
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    defualtContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    defaultText: {
        fontSize: 50
    },
    defaultAppButtonContainer: {
        elevation: 8,
        backgroundColor: "#1ecbe1",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 30,
    },
    defaultAppButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
    },
});