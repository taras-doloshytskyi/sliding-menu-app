import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const icon = require('../assets/tabler-icon-bolt.png');

interface Quest {
  name: string,
  isActive: boolean;
  reward: string;
  social: string;
}

export default function Quest({name, isActive, reward, social}: Quest) {

  return (
    <TouchableOpacity style={styles.quest}>
      <View style={styles.reward}>
        <Text style={styles.rewardXP}>{reward}</Text>
      </View>
      <View style={styles.questDetails}>
        <Text style={styles.title}>{name}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 12}}>
            <Text style={styles.number}>2</Text>
            <Image source={icon}/>
          </View>
          <Text style={styles.number}>1/3</Text>
        </View>
      </View>
      <View style={[styles.social, {borderTopLeftRadius: isActive ? 12 : 0, borderBottomRightRadius: isActive ? 12 : 0, backgroundColor: isActive ? '#2CE5A7' : '#262C3A'}]}>
        <Text style={[styles.socialTitle, {color: isActive ? '#000' : '#fff'}]}>
          {social}
        </Text>
      </View>
      <View style={[styles.status, {backgroundColor: isActive ? '#2CE5A7' : '#fff'}]}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  quest: {
    width: 350,
    paddingTop: 0,
    paddingBottom: 8,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderRadius: 4,
    backgroundColor: '#2A3141',
    marginTop: 16,
  },
  reward: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12
  },
  rewardXP: {
    color: '#2CE5A7',
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 23,
    letterSpacing: 0.15,
  },
  title: {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: '500',
    lineHeight: 23,
    letterSpacing: 0.15,
    color: '#ffffff',
    marginBottom: 8
  },
  questDetails: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 21
  },
  number: {
    color: '#fff',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 21,
    letterSpacing: 0.1,
  },
  social: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 10,
    gap: 2,
    position: 'absolute',
    right: 0,
    top: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(99, 115, 129, 0.05)',
    
  },
  socialTitle: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 19,
    letterSpacing: 0.5,
  },
  status: {
    width: '100%',
    height: 4,
    position: 'absolute',
    bottom: 0,
    left: 12,
  }
});