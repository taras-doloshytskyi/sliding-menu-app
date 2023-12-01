import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

const profile = require('../assets/Frame.png');
const license = require('../assets/tabler-icon-license.png');
const map = require('../assets/tabler-icon-map.png');
const award = require('../assets/tabler-icon-military-award.png');
const bag = require('../assets/tabler-icon-shopping-bag.png');

const BottomTabs = ({ onTabPress }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {icon: license, name: 'Quests'}, 
    {icon: map, name: 'Adventures'}, 
    {icon: award, name: 'Club'}, 
    {icon: bag, name: 'Shop'}, 
    {icon: profile, name: 'Profile'}
  ];

  const handleTabPress = (index) => {
    setActiveTab(index);
    onTabPress(index);
  };

  return (
    <View style={styles.bottomTabsContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.tab, activeTab === index && styles.activeTab]}
          onPress={() => handleTabPress(index)}
        >
          <Image source={tab.icon}/>
          <Text style={styles.tabName}>{tab.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    backgroundColor: '#161616',
  },
  tab: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 13,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  activeTab: {

  },
  tabName: {
    color: '#587481',
    textAlign: 'center',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: -0.24,
  }
});

export default BottomTabs;