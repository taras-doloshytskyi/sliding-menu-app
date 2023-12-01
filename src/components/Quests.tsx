import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Quest from './Quest';

import { useDrawerStatus } from '@react-navigation/drawer';
import { BlurView } from 'expo-blur';

export default function Quests() {
  const questsData = [
    { id: '1', name: 'Verify Email', isActive: true, reward: '500 XP', social: 'Claim' },
    { id: '2', name: 'Connect Tiktock', isActive: false, reward: '500 XP', social: 'TikTock' },
    { id: '3', name: 'Connect Instagram', isActive: false, reward: '500 XP', social: 'Instagram' },
    { id: '4', name: 'Connect Twitter', isActive: false, reward: '500 XP', social: 'Twitter' },
    { id: '5', name: 'Connect Discord', isActive: false, reward: '500 XP', social: 'Discord' },
  ];

  const renderItem = ({ item }) => (
    <Quest name={item.name} isActive={item.isActive} reward={item.reward} social={item.social}/>
  );

  return (
    <View style={styles.questsContainer}>
      <FlatList
        data={questsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  questsContainer: {
    flex: 1,
    width: '100%',
    paddingVertical: 10,
    alignItems: 'flex-start',
    marginBottom: 50
  },
});