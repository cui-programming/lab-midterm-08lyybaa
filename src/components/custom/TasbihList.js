import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from '../../styles/styles';
import Text from '../ui/Text';
import Button from '../ui/Button';

export default function TasbihList({ initialAzkaar }) {
  const [items, setItems] = useState(initialAzkaar);

  // Update list when props change
  useEffect(() => {
    setItems(initialAzkaar);
  }, [initialAzkaar]);

  const handleIncrement = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  const handleDecrement = (id) => {
    setItems(items.map(item =>
      item.id === id && item.count > 0
        ? { ...item, count: item.count - 1 }
        : item
    ));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <Text style={styles.counter}>{item.count}</Text>
      <Button onPress={() => handleIncrement(item.id)} children="+" />
      <Button onPress={() => handleDecrement(item.id)} children="-" />
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
