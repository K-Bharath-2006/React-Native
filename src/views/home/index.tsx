import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Back</Text>
      <View style={styles.contentWrapper}>
        <View style={styles.card}>
          <View style={styles.gamePreview}>
            <Text style={styles.previewText}>Interactive Game Preview</Text>
          </View>
          <Text style={styles.title}>Learn Stem Through Interactive Games</Text>
          <Text style={styles.description}>
            Engaging rural students with gamified learning, offline access and
            multilingual content for grades 6-12
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continue Learning &rarr;</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
