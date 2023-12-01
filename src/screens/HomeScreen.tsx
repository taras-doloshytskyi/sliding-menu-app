import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import TabButtons from '../components/TabButtons';
import Quests from '../components/Quests';
import BottomTabs from '../components/BottomTabs';
import Tags from '../components/Tags';
import { useDrawerStatus } from '@react-navigation/drawer';
import { BlurView } from 'expo-blur';


export default function Home() {

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const isDrawerOpen = useDrawerStatus() === 'open';

  const handleTabPress = (index) => {
    setActiveTabIndex(index);
  };
  
  return (
    <BlurView intensity={isDrawerOpen ? 70 : 0} style={styles.container}>
      <Header />
      <TabButtons/>
      <Tags/>
      <Quests/>
      <BottomTabs onTabPress={handleTabPress} />
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A3141',
    alignItems: 'center',
    justifyContent: 'center',
  },
});