import {StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import CartScreen from '../screen/CartScreen';
import FavouritesScreen from '../screen/FavouritesScreen';
import CustomIcon from '../components/CustomIcon';
import OrderHistoryScreen from '../screen/OrderHistoryScreen';
import React from 'react';
import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.BlurViewStyles}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <>
              <CustomIcon
                name="home"
                size={25}
                color={
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
              />
              <Text>Home</Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <>
              <CustomIcon
                name="cart"
                size={25}
                color={
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
              />
              <Text>Cart</Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <>
              <CustomIcon
                name="like"
                size={25}
                color={
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
              />
              <Text>Like</Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <>
              <CustomIcon
                name="bell"
                size={25}
                color={
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
              />
              <Text>Bell</Text>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
