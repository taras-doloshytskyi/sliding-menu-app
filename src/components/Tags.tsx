import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Tag from './Tag';

export default function Tags() {
  const tagsData = [
    { id: '1', name: 'Social',},
    { id: '2', name: 'New',},
    { id: '3', name: 'InGame',},
  ];

  const renderItem = ({ item }) => (
    <Tag name={item.name} />
  );

  return (
    <View style={styles.tagsContainer}>
      <FlatList
        data={tagsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tagsContainer: {
    width: '100%',
    paddingTop: 16,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
});