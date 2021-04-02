import { StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { Component } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


export default function Tab1() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                tab 1
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 50
    }
});




// import { StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
// import React, { Component } from 'react';

// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler';


// const RootStack = createStackNavigator();
// const MainStack = createStackNavigator();

// export default class Tab1 extends Component {
//     render() {
//         return (
//             <RootStack.Navigator
//                 mode="modal"
//                 screenOptions={{
//                     headerShown: false,
//                     headerStyle: {
//                         backgroundColor: "#5ab8f2"
//                     }
//                 }}>
//                 <RootStack.Screen name="Tab1Pages" component={PageManager} />
//                 <RootStack.Screen name="Tab1PopUpPage" component={Tab1PopUpPage}
//                     options={{
//                         headerShown: false,
//                         headerStyle: {
//                             backgroundColor: "#1ee189"
//                         }
//                     }} />
//             </RootStack.Navigator>
//         );
//     }
// }

// function PageManager() {
//     return (
//         <MainStack.Navigator>
//             <MainStack.Screen name="Tab1Page1" component={Tab1Page1}/>
//             <MainStack.Screen name="Tab1Page2" component={Tab1Page2}
//                 options={{
//                     headerRight: () => (
//                         <Button title={"Done"} onPress={() => alert("testing 123!")} />
//                     ),
//                     headerBackTitle: "Back"
//                 }}
//             />
//         </MainStack.Navigator>
//     );
// }

// function Tab1Page1({ navigation }) {
//     const [name, setName] = React.useState("");
//     return (
//         <View style={{ flex: 1 }}>
//             <View style={styles.bgImageWrapper}>
//                 <Image source={require('../assets/green_gradient_backgound.png')} style={styles.bgImage} />
//             </View>
//             <Text style={styles.headline}>
//                 This is tab 1
//               </Text>
//             <TextInput
//                 style={{
//                     margin: 30,
//                     fontSize: 21,
//                     backgroundColor: 'white',
//                     borderRadius: 50,
//                     padding: 8
//                 }}
//                 placeholder="Please enter your name"
//                 value={name}
//                 onChangeText={(text) => setName(text)} />
//             <TouchableOpacity
//                 style={styles.appButtonContainer}
//                 onPress={() => {
//                     navigation.navigate("Tab1Page2", { name });
//                 }}>
//                 <Text style={styles.appButtonText}>
//                     Go to page 2
//           </Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// function Tab1Page2({ route, navigation }) {
//     const { name } = route.params;
//     return (
//         <View style={{ flex: 1 }}>
//             <View style={styles.bgImageWrapper}>
//                 <Image source={require('../assets/green_gradient_backgound.png')} style={styles.bgImage} />
//             </View>
//             <Text style={{ fontSize: 24 }}>Welcome {name}, this is page 2</Text>
//             <TouchableOpacity
//                 style={styles.appButtonContainer}
//                 onPress={() => {
//                     navigation.navigate("Tab1Page1");
//                 }}>
//                 <Text style={styles.appButtonText}>
//                     Go to page 1
//                 </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={styles.appButtonContainer}
//                 onPress={() => {
//                     navigation.navigate("Tab1PopUpPage");
//                 }}>
//                 <Text style={styles.appButtonText}>
//                     Open pop-up
//                 </Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// function Tab1PopUpPage(route) {
//     return (
//         <View style={{ margin: 60 }}>
//             <Text style={{ fontSize: 24 }}>Hey, I'm a Pop-Up page!</Text>
//             <Button
//                 title="Close this page"
//                 onPress={() => {
//                     route.navigation.goBack();
//                 }}>
//             </Button>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     headline: {
//         textAlign: 'center',
//         fontWeight: 'bold',
//         fontSize: 18,
//         marginTop: 0,
//         alignSelf: 'stretch',
//         //height: 80,
//         //backgroundColor: 'white',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     bgImageWrapper: {
//         position: 'absolute',
//         top: 0, bottom: 0, left: 0, right: 0
//     },
//     bgImage: {
//         flex: 1,
//         resizeMode: 'stretch'
//     },
//     appButtonContainer: {
//         elevation: 8,
//         backgroundColor: "#009688",
//         borderRadius: 50,
//         paddingVertical: 10,
//         paddingHorizontal: 12,
//         margin: 30,
//     },
//     appButtonText: {
//         fontSize: 18,
//         color: "#fff",
//         fontWeight: "bold",
//         alignSelf: "center",
//         textTransform: "uppercase"
//     },
// });

