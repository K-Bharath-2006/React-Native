import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import styles from './style';

const subjects = [
  {
    name: 'Mathematics',
    chapters: 3,
    topics: 10,
    iconBg: '#377DFF',
    icon: '≡',
  },
  {
    name: 'English',
    chapters: 3,
    topics: 10,
    iconBg: '#3AD29F',
    icon: '◉',
  },
  {
    name: 'Science',
    chapters: 3,
    topics: 10,
    iconBg: '#A259FF',
    icon: '▣',
  },
  {
    name: 'Social Science',
    chapters: 3,
    topics: 10,
    iconBg: '#FFC542',
    icon: '⬟',
  },
];

const SubjectCard = ({name, chapters, topics, iconBg, icon}: any) => (
  <TouchableOpacity style={styles.card}>
    <View style={[styles.cardIcon, {backgroundColor: iconBg}]}>
      {/* Use an actual icon in production; these are text placeholders */}
      <Text style={styles.iconText}>{icon}</Text>
    </View>
    <View style={styles.cardContent}>
      <Text style={styles.subjectTitle}>{name}</Text>
      <Text
        style={
          styles.subjectInfo
        }>{`${chapters} chapters • ${topics} Topics`}</Text>
    </View>
    <Text style={styles.arrow}>&rarr;</Text>
  </TouchableOpacity>
);

const ChooseSubjectPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Back</Text>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Choose Your Subject</Text>
        <Text style={styles.subtitle}>
          Select a subject to begin your learning journey
        </Text>

        <View style={styles.cardsList}>
          {subjects.map((subject, idx) => (
            <SubjectCard key={idx} {...subject} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default ChooseSubjectPage;
