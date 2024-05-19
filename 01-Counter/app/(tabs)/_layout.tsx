import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "home" : "home-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "code-slash" : "code-slash-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="BoxModel"
        options={{
          title: "Box Model Object",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "build" : "build-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="DimensionScreen"
        options={{
          title: "Dimension Screen",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "build" : "build-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="PositionScreen"
        options={{
          title: "Position Screen",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "build" : "build-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="FlexScreen"
        options={{
          title: "Flex Screen",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "build" : "build-outline"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
