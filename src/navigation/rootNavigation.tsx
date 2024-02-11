import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import COLORS from '../constants/colors';
import {FONTS} from '../constants/common';
import {BookingIcon, HomeIcon} from '../constants/icons';
import BookedFlightScreen from '../screens/bookedFlight/BookedFlightScreen';
import BookingHistoryScreen from '../screens/bookingHistory/BookingHistoryScreen.view';
import HomeScreen from '../screens/home/HomeScreen.view';
import SearchResultsScreen from '../screens/searchResults/SearchResultsScreen.view';
import {
  BookingNavigationStackType,
  HomeNavigationStackType,
  TabNavigationStackType,
} from './rootNavigation.types';

const BookingStack = createNativeStackNavigator<BookingNavigationStackType>();
const HomeStack = createNativeStackNavigator<HomeNavigationStackType>();
const Tab = createBottomTabNavigator<TabNavigationStackType>();

const renderHomeIcon = () => {
  return <HomeIcon height={25} width={25} />;
};

const renderBookingIcon = () => {
  return <BookingIcon height={32} width={32} />;
};

const TabNavigationStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveBackgroundColor: COLORS.lightBlue,
        tabBarActiveTintColor: COLORS.black,
        tabBarLabelStyle: {fontFamily: FONTS.Medium, fontSize: 18},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigationStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: renderHomeIcon,
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={BookingsNavigationStack}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: renderBookingIcon,
        }}
      />
    </Tab.Navigator>
  );
};

const HomeNavigationStack = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: true}}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="SearchResults" component={SearchResultsScreen} />
    </HomeStack.Navigator>
  );
};

const BookingsNavigationStack = () => {
  return (
    <BookingStack.Navigator screenOptions={{headerShown: false}}>
      <BookingStack.Screen
        name="BookingHistory"
        component={BookingHistoryScreen}
      />
      <BookingStack.Screen name="BookedFlight" component={BookedFlightScreen} />
    </BookingStack.Navigator>
  );
};

export default TabNavigationStack;
