import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

interface TabButton {
  name: string,
  isActive: boolean;
}

export default function TabButton({ name, isActive }: TabButton) {

  return (
    <TouchableOpacity style={[styles.button, {borderRadius: isActive ? 46 : 6, backgroundColor: isActive ? '#6D43C0' : null}]}>
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 103,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20
  },
  title: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: '500',
    lineHeight: 20,
    color: '#ffffff'
  },
});