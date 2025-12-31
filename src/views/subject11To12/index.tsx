import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './style';

const subjects = [
  {
    name: 'Mathematics',
    chapters: '3 chapters',
    topics: '10 Topics',
    bg: '#377DFF',
    iconType: 'box',
    icon: '≡', // Placeholder icon character
  },
  {
    name: 'English',
    chapters: '3 chapters',
    topics: '10 Topics',
    bg: '#3AD29F',
    iconType: 'box',
    icon: '◉',
  },
  {
    name: 'Physics',
    chapters: '3 chapters',
    topics: '10 Topics',
    bg: '#E8F0FF',
    iconType: 'image',
    icon: require('../../assets/physics.png'), // Your image path here
  },
  {
    name: 'Chemistry',
    chapters: '3 chapters',
    topics: '10 Topics',
    bg: '#E8F0FF',
    iconType: 'image',
    icon: require('../../assets/chemistry.png'), // Your image path here
  },
  {
    name: 'Botany',
    chapters: '3 chapters',
    topics: '10 Topics',
    bg: '#E8F0FF',
    iconType: 'image',
    icon: require('../../assets/Botony.png'), // Your image path here
  },
  {
    name: 'Zooly',
    chapters: '3 chapters',
    topics: '10 Topics',
    bg: '#E8F0FF',
    iconType: 'image',
    icon: require('../../assets/Zoology.png'), // Your image path here
  },
];

const SubjectCard = ({
  name,
  chapters,
  topics,
  bg,
  iconType,
  icon,
}: {
  name: string;
  chapters: string;
  topics: string;
  bg: string;
  iconType: string;
  icon: any;
}) => (
  <TouchableOpacity style={styles.card}>
    {iconType === 'box' ? (
      <View style={[styles.iconBox, {backgroundColor: bg}]}>
        <Text style={styles.iconBoxText}>{icon}</Text>
      </View>
    ) : (
      <View style={styles.iconImageWrapper}>
        <Image source={icon} style={styles.iconImage} resizeMode="contain" />
      </View>
    )}
    <View style={styles.cardTextContainer}>
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardSubtitle}>{`${chapters} • ${topics}`}</Text>
    </View>
    <Text style={styles.arrow}>{'→'}</Text>
  </TouchableOpacity>
);

const ChooseSubjectPage = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Back</Text>
    <View style={styles.contentWrapper}>
      <Text style={styles.title}>Choose Your Subject</Text>
      <Text style={styles.subtitle}>
        Select a subject to begin your learning journey
      </Text>
      {subjects.map((subject, i) => (
        <SubjectCard key={i} {...subject} />
      ))}
    </View>
  </View>
);

export default ChooseSubjectPage;
