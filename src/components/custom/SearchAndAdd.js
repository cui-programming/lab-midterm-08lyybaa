import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from '../../styles/styles';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

export default function SearchAndAdd({ onZikrAdd, onSetSearch, searchText }) {
  const [newZikr, setNewZikr] = useState('');

  function handleAdd() {
    if (newZikr !== '') {
      onZikrAdd({ phrase: newZikr, count: 0 });
      setNewZikr('');
    }
  }

  return (
    <View style={styles.section}>
      {/* Search Box */}
      <TextInput
        placeholder="Search Zikr"
        value={searchText}
        onChangeText={onSetSearch}
        style={styles.textInput}
      />

      {/* Add New Zikr */}
      <TextInput
        placeholder="Add New Zikr"
        value={newZikr}
        onChangeText={setNewZikr}
        style={styles.textInput}
      />

      <Button onPress={handleAdd} children="Add Zikr" />
    </View>
  );
}
