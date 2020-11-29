//Library Imports
import React, { Component } from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
//Screen Imports
import Home from '../screens/HomeScreen'
import Workout from '../screens/WorkoutScreen';
import Blank from '../screens/TestPage';
import ExploreScreen from '../screens/ExploreScreen';
import { themeColor, darkBackground } from '../styles/Styles'
//Visual Imports
import { AntDesign, Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
//Params type definition
type StackParams = {
    Home: undefined;
    Workout: { name: string };
    // Feed: { sort: 'latest' | 'top' } | undefined;
};
type TabParams = {
}

//Navigation Definitions
const Stack = createStackNavigator<StackParams>();
const Tab = createBottomTabNavigator();

//Constants
const darkHeader = {
    height: 60,
    backgroundColor: 'black',
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
}

//Screen Definitions: might want to move this to the Screen's respective .tsx components. Might have moved some already. {Home, Test, Workout}

function Explore({ navigation }) { return (<ExploreScreen nav={navigation} />) };

//Stacks in Tab Definitions
function HomeTab() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'ADEPT',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 34,
                        fontWeight: 'bold',
                        color: 'white',
                    },
                    headerStyle: darkHeader
                }}
            />
            <Stack.Screen
                name="Workout"
                component={Workout}
                options={({ route, navigation }) =>
                    ({
                        title: route.params.name, //Title should adapt based on the name of the workout.
                        headerTitleStyle: {
                            color: 'white',
                            fontSize: 24,
                        },
                        headerStyle: darkHeader,
                        headerTintColor: 'white',
                        headerBackTitleVisible: false,
                    })}
            />
        </Stack.Navigator>
    );
}
function ProfileTab() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Blank} options={{
                title: 'What are you doing here?',
            }} />
        </Stack.Navigator>
    );
}
function ExploreTab() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Explore} options={{ title: "Explore workouts", headerTitleAlign: 'center' }} />
        </Stack.Navigator>
    );
}

class Navigation extends Component {
    state = {}
    render() {
        return (
            // <SafeAreaProvider>
                <SafeAreaView style={{flex:1, backgroundColor: 'black'}}>
                    <NavigationContainer>
                        <Tab.Navigator
                            screenOptions={({ route }) => ({
                                tabBarIcon: ({ focused, color, size }) => {
                                    size = 28;
                                    let iconName;
                                    if (route.name === 'Dashboard') {
                                        iconName = 'pencil'
                                        color = focused
                                            ? themeColor
                                            : 'gray'
                                    }
                                    else if (route.name === 'Explore') {
                                        iconName = 'direction'
                                        color = focused ? themeColor : 'gray'
                                    }
                                    else if (route.name === 'ProfileTab') {
                                        iconName = 'user'
                                        color = focused
                                            ? themeColor
                                            : 'gray'
                                    }
                                    return <Entypo name={iconName} size={size} color={color} />
                                }
                            })}
                            tabBarOptions={{
                                inactiveBackgroundColor: 'black',
                                activeBackgroundColor: 'black',
                                activeTintColor: 'white',
                                style: { borderTopWidth: 0 }
                            }}
                        >
                            <Tab.Screen
                                name="Dashboard"
                                component={HomeTab}
                            />
                            <Tab.Screen
                                name="Explore"
                                component={ExploreTab}
                            />
                            <Tab.Screen
                                name="ProfileTab"
                                component={ProfileTab}
                            />
                        </Tab.Navigator>
                    </NavigationContainer>
                </SafeAreaView>
            // </SafeAreaProvider>
        );
    }
}

export default Navigation;