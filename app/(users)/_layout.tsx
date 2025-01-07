import { Tabs, Redirect } from 'expo-router';
import { icons } from '@/constants'
import { StyleSheet, Image, Text, View } from 'react-native';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 2, width: 60}}>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6"
        style={{ width: name === "Shows" ? 60 : 40, height: name === "Shows" ? 60 : 40, tintColor: color}}
        />
      <Text style={[styles.text, { color: color, fontWeight: focused ? '600' : '400' }]} numberOfLines={1}>{name}</Text>
    </View>
  );
}

export default function TabsLayout() {

  return (
    <>
      <Tabs screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#707084",
          tabBarStyle: {
          backgroundColor: "#232533",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 64,
        },
        headerShown: false, // Ensure header is not shown for all tab screens
      }}>
        <Tabs.Screen
          name='home'
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Menu"
                focused={focused}
              />
            )
          }} />

        <Tabs.Screen
        name='choice'
        options={{
          title: "Choice",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.play}
              color={color}
              name="Shows"
              focused={focused}
            />
          )
        }} />

        <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          )
        }} />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    marginTop: 2,
    textAlign: 'center',
  },
});