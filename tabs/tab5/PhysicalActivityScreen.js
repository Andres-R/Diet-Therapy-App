import { FlatList, StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


const BORDER_WIDTH = 1.5;

let view2height = 250;
let view3height = 250;
let view4height = 250;
let view5height = 250;

let marginv = 10;
let heightDifference = 20;

export default function PhysicalActivityScreen({ navigation }) {

    const [views, setViews] = useState([
        { number: '1.', id: '1' },
        { number: '2.', id: '2' },
        { number: '3.', id: '3' },
        { number: '4.', id: '4' },
        { number: '5.', id: '5' },
        { number: '6.', id: '6' },
    ]);

    const [exercises, setExercises] = useState([
        { exercise: 'Aerobic', id: '1' },
        { exercise: 'Anaerobic', id: '2' },
        { exercise: 'Stretching', id: '3' },
        { exercise: 'Balancing', id: '4' },
    ]);

    return (
        <View style={styles.defualtContainer}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={views}
                renderItem={({ item }) => (
                    <View>
                        {filterViews(item, exercises, { navigation })}
                    </View>
                )}
            />
        </View>
    );
}

function filterViews(item, exercises, { navigation }) {
    if (item.id === '1') {
        return view1();
    }
    else if (item.id === '2') {
        return view2();
    }
    else if (item.id === '3') {
        return view3();
    }
    else if (item.id === '4') {
        return view4();
    }
    else if (item.id === '5') {
        return view5();
    }
    else {
        return view6({ navigation });
    }
}

function view1() {
    return (
        <View style={styles.viewContainer1}>
            <Text style={styles.title}>
                Physical Activity
            </Text>
            <Text style={styles.description}>
                Keep track and monitor your current physical activites here
            </Text>
        </View>
    );
}

function view2() {
    return (
        <View style={styles.viewContainer2}>
            <View style={styles.cardContainer2}>
                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>

                    </Text>
                </View>
                <View style={{ flex: 0.8, backgroundColor: 'white', justifyContent: 'center' }}>
                    <Text>
                        yo
                    </Text>
                </View>
            </View>
        </View>
    );
}

function view3() {
    return (
        <View style={styles.viewContainer3}>
            <View style={styles.cardContainer3}>
                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>

                    </Text>
                </View>
                <View style={{ }}>
                    <Text>
                        yo
                    </Text>
                </View>
            </View>
        </View>
    );
}

function view4() {
    return (
        <View style={styles.viewContainer4}>
            <View style={styles.cardContainer4}>
                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>

                    </Text>
                </View>
                <View style={{  }}>
                    <Text>
                        yo
                    </Text>
                </View>
            </View>
        </View>
    );
}

function view5() {
    return (
        <View style={styles.viewContainer5}>
            <View style={styles.cardContainer5}>
                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>

                    </Text>
                </View>
                <View style={{ }}>
                    <Text>
                        yo
                    </Text>
                </View>
            </View>
        </View>
    );
}

function view6({ navigation }) {
    return (
        <View style={styles.viewContainer6}>
            <TouchableOpacity style={styles.appButtonContainer}
                onPress={() => {
                    navigation.navigate("Exercise");
                }}>
                <Text style={styles.appButtonText}>
                    Need help with types of exercises?
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer}
                onPress={() => {
                    navigation.navigate("Profile");
                }}>
                <Text style={styles.appButtonText}>
                    Go back
                </Text>
            </TouchableOpacity>
        </View>
    );
}





const styles = StyleSheet.create({
    defualtContainer: {
        flex: 1,
    },
    defaultText: {
        fontSize: 50
    },
    appButtonText: {
        fontSize: 18,
        color: "black",
        alignSelf: "center",
        fontWeight: "bold",
        textAlign: 'center'
    },
    appButtonContainer: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal: 10,
        marginVertical: 5,
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: BORDER_WIDTH + 0.5,
        borderTopWidth: BORDER_WIDTH + 0.5,
        borderRightWidth: BORDER_WIDTH + 0.5,
        borderLeftWidth: BORDER_WIDTH + 0.5,
        borderRadius: 50
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
    viewContainer1: {
        flex: 1,
        backgroundColor: 'white',
        height: 200,
        justifyContent: 'center'
    },
    viewContainer2: {
        flex: 1,
        backgroundColor: 'white',
        height: view2height,
    },
    viewContainer3: {
        flex: 1,
        backgroundColor: 'white',
        height: view2height,
    },
    viewContainer4: {
        flex: 1,
        backgroundColor: 'white',
        height: view4height,
    },
    viewContainer5: {
        flex: 1,
        backgroundColor: 'white',
        height: view5height,
    },
    viewContainer6: {
        flex: 1,
        backgroundColor: 'white',
        height: 150,
        justifyContent: 'center'
    },
    cardContainer2: {
        //flex: 1,
        height: view2height - heightDifference,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: marginv,
        borderTopColor: 'black',
        borderBottomColor: 'black',
        borderRightColor: 'black',
        borderLeftColor: 'black',
        borderBottomWidth: BORDER_WIDTH,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
    },
    cardContainer3: {
        //flex: 1,
        height: view3height - heightDifference,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: marginv,
        borderTopColor: 'black',
        borderBottomColor: 'black',
        borderRightColor: 'black',
        borderLeftColor: 'black',
        borderBottomWidth: BORDER_WIDTH,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
    },
    cardContainer4: {
        //flex: 1,
        height: view4height - heightDifference,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: marginv,
        borderTopColor: 'black',
        borderBottomColor: 'black',
        borderRightColor: 'black',
        borderLeftColor: 'black',
        borderBottomWidth: BORDER_WIDTH,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
    },
    cardContainer5: {
        //flex: 1,
        height: view5height - heightDifference,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: marginv,
        borderTopColor: 'black',
        borderBottomColor: 'black',
        borderRightColor: 'black',
        borderLeftColor: 'black',
        borderBottomWidth: BORDER_WIDTH,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
    },
    topCardArea: {
        height: 60,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center'
    },
    topCardText: {
        color: "#1ecbe1",
        fontSize: 30,
        textAlign: 'center'
    }
});