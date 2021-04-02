import { FlatList, StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


const BORDER_WIDTH = 2;

let viewheight = 250;

let marginv = 10;


var enduranceEx = [
    { fruit: 'Running', id: '1' },
    { fruit: 'Jogging', id: '2' },
    { fruit: 'Biking', id: '3' },
    { fruit: 'Swimming', id: '4' },
];

export default function PhysicalActivityScreen({ navigation }) {

    const [views, setViews] = useState([
        { number: '1.', id: '1' },
        { number: '2.', id: '2' },
        { number: '3.', id: '3' },
        { number: '4.', id: '4' },
        { number: '5.', id: '5' },
        { number: '6.', id: '6' },
    ]);

    return (
        <View style={styles.defualtContainer}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={views}
                renderItem={({ item }) => (
                    <View>
                        {filterViews(item, { navigation })}
                    </View>
                )}
            />
        </View>
    );
}

function filterViews(item, { navigation }) {
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
        <View style={styles.headerView}>
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
        <View style={styles.viewContainer}>
            <View style={styles.cardContainer}>

                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>
                        Endurance
                    </Text>
                </View>

                <View style={styles.listViewArea}>
                    <View style={{ flex: 1 }}>

                        <FlatList
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                            data={enduranceEx}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.cardContainerh}>
                                        <View style={styles.itemTextConatiner}>
                                            <Text style={styles.itemText}>
                                                {item.fruit}
                                            </Text>
                                        </View>
                                    </View>
                                </View>


                            )}
                        />

                    </View>
                </View>
                <View style={styles.buttonTabArea}>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {

                            }}>
                            <Text style={styles.removeText}>
                                remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {

                            }}>
                            <Text style={styles.addText}>
                                add
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    );
}

function view3() {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.cardContainer}>

                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>
                        Strength
                    </Text>
                </View>

                <View style={styles.listViewArea}>
                    <View style={{ flex: 1 }}>

                        {/* <FlatList
                            keyExtractor={(item) => item.id}
                            data={fruits}
                            renderItem={({ item }) => (
                                <View style={styles.itemView}>
                                    <Text>
                                        {item.fruit}
                                    </Text>
                                </View>
                            )}
                        /> */}

                    </View>
                </View>
                <View style={styles.buttonTabArea}>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {

                            }}>
                            <Text style={styles.removeText}>
                                remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {

                            }}>
                            <Text style={styles.addText}>
                                add
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    );
}

function view4() {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.cardContainer}>

                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>
                        Balance
                    </Text>
                </View>

                <View style={styles.listViewArea}>
                    <View style={{ flex: 1 }}>

                        {/* <FlatList
                            keyExtractor={(item) => item.id}
                            data={fruits}
                            renderItem={({ item }) => (
                                <View style={styles.itemView}>
                                    <Text>
                                        {item.fruit}
                                    </Text>
                                </View>
                            )}
                        /> */}

                    </View>
                </View>
                <View style={styles.buttonTabArea}>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {

                            }}>
                            <Text style={styles.removeText}>
                                remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {

                            }}>
                            <Text style={styles.addText}>
                                add
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    );
}

function view5() {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.cardContainer}>

                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>
                        Flexibility
                    </Text>
                </View>

                <View style={styles.listViewArea}>
                    <View style={{ flex: 1 }}>

                        {/* <FlatList
                            keyExtractor={(item) => item.id}
                            data={fruits}
                            renderItem={({ item }) => (
                                <View style={styles.itemView}>
                                    <Text>
                                        {item.fruit}
                                    </Text>
                                </View>
                            )}
                        /> */}

                    </View>
                </View>
                <View style={styles.buttonTabArea}>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {

                            }}>
                            <Text style={styles.removeText}>
                                remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {

                            }}>
                            <Text style={styles.addText}>
                                add
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    );
}

function view6({ navigation }) {
    return (
        <View style={styles.footerView}>
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
        borderBottomWidth: BORDER_WIDTH,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
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
    headerView: {
        flex: 1,
        backgroundColor: 'white',
        height: 200,
        justifyContent: 'center'
    },
    viewContainer: {
        flex: 1,
        backgroundColor: 'white',
        height: 250,
    },
    footerView: {
        flex: 1,
        backgroundColor: 'white',
        height: 150,
        justifyContent: 'center'
    },
    cardContainer: {
        flex: 1,
        height: 230,
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
        flex: 0.25,
        //height: 60,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center'
    },
    bottomCardArea: {
        height: 165,
        backgroundColor: 'white'
    },
    topCardText: {
        color: "#1ecbe1",
        fontSize: 30,
        textAlign: 'center'
    },
    listViewArea: {
        flex: 0.65,
        //flexDirection: 'row',
        //height: 141,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTabArea: {
        flex: 0.1,
        flexDirection: 'row',
        //height: 25,
        backgroundColor: '#F5F5F5'
    },
    addText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    removeText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    optionArea: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemView: {
        justifyContent: 'center',
        height: 40,
        backgroundColor: 'lightgray',
        marginHorizontal: 20,
        marginVertical: 10
    },
    itemText: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20
    },
    cardContainerh: {
        backgroundColor: "white",
        flex: 1,
        //height: 50,
        width: 200,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemTextConatiner: {
        backgroundColor: 'white',
        borderRadius: 50,
        elevation: 10
    }
});