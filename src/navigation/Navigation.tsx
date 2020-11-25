//Library Imports
import React, { Component } from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Screen Imports
import HomeScreen from '../screens/HomeScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import TestPage from '../screens/TestPage';
import ExploreScreen from '../screens/ExploreScreen';
//Visual Imports
import { AntDesign, Entypo } from '@expo/vector-icons';
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

//Screen Definitions
function Home({ navigation }) { return (<HomeScreen nav={navigation} />) };
function Workout({ navigation }) { return (<WorkoutScreen nav={navigation} />) };
function Explore({ navigation }) { return (<ExploreScreen nav={navigation} />) };

function Blank({ navigation }) { return (<TestPage nav={navigation} />) };

//Constants
const themeColor = '#841584';

//Tabs Definitions
function HomeTab() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'AppTitle',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 28,
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        height: 90,
                    }
                }}
            />
            <Stack.Screen
                name="Workout"
                component={Workout}
                options={({ route }) => ({ title: route.params.name })} //Title should adapt based on the name of the workout.
            />
        </Stack.Navigator>
    );
}
function ProfileTab() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Blank} options={{ title: 'What are you doing here?' }} />
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
            // <NavigationContainer>
            //     <Stack.Navigator initialRouteName="Home">
            //         <Stack.Screen
            //             name="Home"
            //             component={Home}
            //             options={{ title: 'Fair Home' }}
            //         />
            //         <Stack.Screen
            //             name="Workout"
            //             component={Workout}
            //             options={({ route }) => ({ title: route.params.name })} //Title should adapt based on the name of the workout.
            //         />
            //     </Stack.Navigator>
            // </NavigationContainer>
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
                                    : 'black'
                            }
                            else if (route.name === 'Explore') {
                                iconName = 'direction'
                                color = focused ? themeColor : 'black'
                            }
                            else if (route.name === 'ProfileTab') {
                                iconName = 'user'
                                color = focused
                                    ? themeColor
                                    : 'black'
                            }
                            return <Entypo name={iconName} size={size} color={color} />
                        }
                    })}
                    tabBarOptions={{
                        activeTintColor: 'black',
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
        );
    }
}

export default Navigation;