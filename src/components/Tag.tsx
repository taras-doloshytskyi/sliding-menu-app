import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Tag {
  name: string,
}

export default function Tag({ name }: Tag) {

  return (
    <TouchableOpacity style={styles.tag}>
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tag: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#EFF1F2',
    marginRight: 10
  },
  title: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: '500',
    lineHeight: 21,
    color: '#ffffff',
    letterSpacing: 0.1
  },
});