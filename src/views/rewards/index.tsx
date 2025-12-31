import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';

const BadgeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>You’ve just earned a new badge!</Text>
      <View style={styles.card}>
        <View style={styles.iconWrapper}>
          <Image
            source={require('../../assets/congrats.png')}
            style={styles.badgeImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.levelCompleted}>Level completed !</Text>
        <Text style={styles.badgeTitle}>bubble book</Text>
        <Text style={styles.exp}>{'+126 exp'}</Text>
        <TouchableOpacity style={styles.claimButton}>
          <Text style={styles.claimButtonText}>Claim reward</Text>
        </TouchableOpacity>
        <View style={styles.shareRow}>
          <Text style={styles.shareIcon}>📤</Text>
          <Text style={styles.shareText}>share</Text>
        </View>
      </View>
    </View>
  );
};

export default BadgeScreen;
