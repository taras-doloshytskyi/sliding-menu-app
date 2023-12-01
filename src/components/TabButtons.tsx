import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TabButton from './TabButton';

export default function TabButtons() {
  const buttonData = [
    { id: '1', name: 'Quests', isActive: true },
    { id: '2', name: 'In Progress', isActive: false },
    { id: '3', name: 'Completed', isActive: false },
  ];

  const renderItem = ({ item }) => (
    <TabButton name={item.name} isActive={item.isActive} />
  );

  return (
    <View style={styles.tabContainer}>
      <FlatList
        data={buttonData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    width: '100%',
    paddingTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});