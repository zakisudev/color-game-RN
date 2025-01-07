import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const SideMenu = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Game1')}>
          <Text style={styles.menuItem}>Game 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Game2')}>
          <Text style={styles.menuItem}>Game 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Game3')}>
          <Text style={styles.menuItem}>Game 3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Show')}>
          <Text style={styles.menuItem}>Show</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
          <Text style={styles.menuItem}>Profile</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default SideMenu;