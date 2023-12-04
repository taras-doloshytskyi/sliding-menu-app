import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, View, Platform } from 'react-native';
import { useDrawerStatus } from '@react-navigation/drawer';
import { BlurView } from 'expo-blur';
import Header from '../components/Header';
import TabButtons from '../components/TabButtons';
import Tags from '../components/Tags';
import Quests from '../components/Quests';
import BottomTabs from '../components/BottomTabs';

export default function Home() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const isDrawerOpen = useDrawerStatus() === 'open';
  const [modalVisible, setModalVisible] = useState(isDrawerOpen);

  const handleTabPress = (index) => {
    setActiveTabIndex(index);
  };

  useEffect(() => {
    if (isDrawerOpen) {
      setModalVisible(!modalVisible);
    }
  }, []);

  return (
    <>
      <Modal visible={modalVisible} animationType='fade' transparent={true} style={styles.modalOverlay}/>
      <View style={styles.container}>
        <Header />
        <TabButtons />
        <Tags />
        <Quests />
        <BottomTabs onTabPress={handleTabPress} />
      </View>
      {isDrawerOpen ? (
        <BlurView intensity={Platform.OS === 'ios' ? 20 : 5} style={[StyleSheet.absoluteFill, { zIndex: 1 }]} />
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A3141',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalOverlay: {
    flex: 1,
  },
});