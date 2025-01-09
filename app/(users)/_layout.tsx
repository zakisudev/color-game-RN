import {useState, useRef} from 'react'; 
import { Tabs, Redirect, Link } from 'expo-router';
import { icons } from '@/constants';
import EntypoIcon from "react-native-vector-icons/Entypo";
import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image, Text, View, TouchableOpacity, Animated, Dimensions, Easing, TouchableWithoutFeedback } from 'react-native';

const TabIcon = ({ icon, name, focused, fic }) => {
  return (
    <View style={{ alignItems: 'center', width: 40, height: 12 }}>
      {focused ? (
        <Image
        source={fic}
        resizeMode='contain'
        style={{ width: 32, height: 32}}
        />
      ) : (
        <Image
        source={icon}
        resizeMode='contain'
        style={{ width: 32, height: 32}}
        />
      )}
      <Text style={[styles.text]}>{name}</Text>
    </View>
  );
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const MENU_WIDTH = SCREEN_WIDTH * 0.7;

export default function TabsLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-MENU_WIDTH)).current;

  const toggleMenu = () => {
    const toValue = isMenuOpen ? -MENU_WIDTH : 0; 
    Animated.timing(slideAnim, {
      toValue,
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      useNativeDriver: false,
    }).start();

    setIsMenuOpen(!isMenuOpen);
    setIsProfileMenuOpen(false);
  };

  const showProfileMenu = () => {
    Animated.timing(slideAnim, {
      toValue: -MENU_WIDTH,
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      useNativeDriver: false,
    }).start();

    setIsMenuOpen(false);
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  const closeMenus = () => {
    if (isMenuOpen || isProfileMenuOpen) {
      setIsMenuOpen(false);
      setIsProfileMenuOpen(false);
      Animated.timing(slideAnim, {
        toValue: -MENU_WIDTH,
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={closeMenus}>
      <SafeAreaView style={styles.container}>
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#5d4364",
            tabBarInactiveTintColor: "#707084",
            tabBarStyle: {
              backgroundColor: "#fff",
              borderTopWidth: 1,
              borderTopColor: "#8795fd",
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              height: 58,
            },
            tabBarItemStyle: {
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            },
          }}
        >
          <Tabs.Screen
            name='shows'
            options={{
              title: "Shows",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.shows}
                  fic={icons.showsFocused}
                  name=""
                  focused={focused}
                />
              )
            }} />

          <Tabs.Screen
          name='games'
          options={{
            title: "Games",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.games}
                fic={icons.gamesFocused}
                name=""
                focused={focused}
              />
            )
          }} />

          <Tabs.Screen
          name='favorite'
          options={{
            title: "Favorite",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
              icon={icons.favorite}
              fic={icons.favoriteFocused}
              name=""
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
                icon={icons.ProfileColor}
                fic={icons.ProfileColorFocused}
                name=""
                focused={focused}
              />
            )
          }} />

        </Tabs>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    marginTop: 2,
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  triggerButton: {
    padding: 12,
    backgroundColor: '#0080FF',
    borderRadius: 8,
    marginBottom: 16,
  },
  triggerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  sideMenu: {
    position: 'absolute',
    top: 50,
    bottom: 0,
    left: 0,
    width: MENU_WIDTH,
    height: SCREEN_HEIGHT,
    zIndex: 100,
    color: '#000',
    backgroundColor: '#eef9ff',
    paddingTop: 60,
    paddingHorizontal: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowOffset: { width: 2, height: 2 },
  },
  menuHeaderText: {
    color: '#000',
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  menuItem: {
    paddingVertical: 12,
    borderBottomColor: '#555',
    borderBottomWidth: 1,
  },
  menuItemText: {
    color: '#000',
    fontSize: 16,
  },
  profileMenu: {
    position: 'absolute',
    top: 50,
    right: 0,
    width: 150,
    height: 100,
    zIndex: 200,
    backgroundColor: '#eef9ff',
    textAlign: 'center',
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowOffset: { width: 2, height: 2 },
  },
  profileMenuItem: {
    paddingVertical: 12,
    borderBottomColor: '#555',
    borderBottomWidth: 1,
  },
  profileMenuItemText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'right',
  },
});