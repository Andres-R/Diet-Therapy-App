import { StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { Component } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const BORDER_WIDTH = 1.5;

export default function SleepTightScreen(route) {
    return (
        <View style={styles.defualtContainer}>

            <View style={{ flex: 0.3, backgroundColor: 'white' }}>
                <View style={styles.bgImageContainer}>
                    <Image source={require("../../assets/sleeping2.png")} style={styles.bgImage} />
                </View>
            </View>

            <View style={{ flex: 0.2, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.title}>
                    Sleep tight
                </Text>
                <Text style={styles.description}>
                    Keep track and monitor your daily {"\n"} sleep schedule here
                </Text>
            </View>

            <View style={{ flex: 0.4, backgroundColor: 'white' }}>

            </View>

            <View style={{ flex: 0.1, backgroundColor: 'white', justifyContent: 'center' }}>
                <TouchableOpacity style={styles.appButtonContainer}
                    onPress={() => {
                        route.navigation.goBack();
                    }}>
                    <Text style={styles.appButtonText}>
                        go back
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    defualtContainer: {
        flex: 1,
    },
    defaultText: {
        fontSize: 50,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#1ecbe1",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 30,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
    },
    bgImage: {
        flex: 1,
        resizeMode: "stretch",
    },
    bgImageContainer: {
        //flex: 1,
        position: "absolute",
        top: 0, bottom: 0, left: 0, right: 0,
    },
    title: {
        fontSize: 45,
        color: 'black',
        textAlign: 'center'
    },
    description: {
        fontSize: 21,
        color: 'darkgray',
        textAlign: 'center'
    },
});