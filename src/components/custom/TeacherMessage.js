import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { styles } from '../../styles/styles';

export default function TeacherMessage () {
    return (
        <View style={styles.header}>
        <Text style={styles.headerText}>Sir Kamran</Text>
        <Text style={styles.headerText}>MAD</Text>
      </View>
    )
}
