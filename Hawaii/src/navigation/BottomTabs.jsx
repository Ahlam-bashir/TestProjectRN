import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Hula from '../Screens/Hula';
import Surfing from '../Screens/Surfing';
import Vulcano from '../Screens/Vulcano';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { navigationStrings } from '../utils/strings';
import HomeIcon from "../assets/icons/Home.svg";
import HulaIcon from "../assets/icons/hula.svg";
import SurfingIcon from "../assets/icons/surfing.svg";
import VulcanoIcon from "../assets/icons/vulcano.svg";
import textStyles from '../utils/textStyles';
import colors from '../utils/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export const BottomTabs = props => {
    return (
        <NavigationContainer ref={props?.navigationRef}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="main">
          <Stack.Screen name="main" component={BottomNavigation} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export const BottomNavigation = ({}) => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle:textStyles.smallText2,
          tabBarInactiveTintColor:
          'gray',
          tabBarActiveTintColor:
            '',
          tabBarStyle: {
            height: 70,
            backgroundColor: 'white',
            elevation: 20,
            shadowColor: 'green',
          },
        }}>
        <Tab.Screen
        name="Home"
        screenOptions={{headerShown: false}}
        component={Home}
        options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <View>
                <HomeIcon width={100} height={30} color={colors.primaryColor}/>
              <View
                style={{
                  position: 'absolute',
                  borderTopColor: colors.primaryColor,
                  borderTopWidth: 4,
                  width: 80,
                  alignSelf: 'center',
                   bottom:-31
                }}
              />
            </View>
            ) : (
              <HomeIcon width={100} height={30}/>
            ),
        }}></Tab.Screen>
        <Tab.Screen
        name={navigationStrings.HULA}
        screenOptions={{headerShown: false}}
        component={Hula}
        options={{
        tabBarLabel: 'Hula',

        tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <View>
              <HulaIcon width={100} height={30} color={colors.primaryColor}/>
            <View
              style={{
                position: 'absolute',
                borderTopColor: colors.primaryColor,
                borderTopWidth: 4,
                width: 80,
                alignSelf: 'center',
                bottom:-31
              }}
            />
          </View>
          ) : (
            <HulaIcon width={100} height={30}/>
          ),
        }}></Tab.Screen>
        <Tab.Screen
        name={navigationStrings.SURFING}
        screenOptions={{headerShown: false}}
        component={Surfing}
        options={{
        tabBarLabel: 'Surfing',

        tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <View>
              <SurfingIcon width={100} height={30} color={colors.primaryColor}/>
            <View
              style={{
                position: 'absolute',
                borderTopColor: colors.primaryColor,
                borderTopWidth: 4,
                width: 80,
                alignSelf: 'center',
                bottom:-31
              }}
            />
          </View>
          ) : (
            <SurfingIcon width={100} height={30}/>
          ),
        }}></Tab.Screen>
        <Tab.Screen
            name={navigationStrings.VULCANO}
            screenOptions={{headerShown: false}}
            component={Vulcano}
            options={{
            tabBarLabel: 'Vulcano',
            tabBarIcon: ({color, size, focused}) =>
              focused ? (
                <View>
                <VulcanoIcon width={100} height={30} color={colors.primaryColor}/>
              <View
                style={{
                  position: 'absolute',
                  borderTopColor: colors.primaryColor,
                  borderTopWidth: 4,
                  width: 80,
                  alignSelf: 'center',
                  bottom:-31
                }}
              />
            </View>
            ) : (
              <VulcanoIcon width={100} height={30}/>
            ),
          }}>

        </Tab.Screen>
       
      </Tab.Navigator>
    );
  };
