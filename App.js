import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { styles } from './src/styles/styles';
import AboutMe from './src/components/custom/AboutMe';
import TasbihList from './src/components/custom/TasbihList';
import TeacherMessage from './src/components/custom/TeacherMessage';
import SearchAndAdd from './src/components/custom/SearchAndAdd';
import { STUDENT_NAME, REG_NO } from './src/config/student';
import { initialAzkaar } from './src/data/azkaar';

export default function App() {
  const [azkaar, setAzkaar] = useState(initialAzkaar);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => setSearchText(text);

  const handleAddZikr = ({ phrase, count }) => {
    const exists = azkaar.some(
      (z) => z.phrase.toLowerCase() === phrase.toLowerCase()
    );

    if (exists) {
      alert('This Zikr already exists.');
      return;
    }

    const newZikr = { id: azkaar.length.toString(), phrase, count };
    setAzkaar([...azkaar, newZikr]);
  };

  const filteredAzkaar = azkaar.filter((z) =>
    z.phrase.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AboutMe name={STUDENT_NAME} regNo={REG_NO} />
      <TeacherMessage />
      <TasbihList initialAzkaar={filteredAzkaar} />
      <SearchAndAdd
        searchText={searchText}
        onSetSearch={handleSearch}
        onZikrAdd={handleAddZikr}
      />
    </ScrollView>
  );
}
