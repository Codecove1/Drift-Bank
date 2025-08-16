import { StyleSheet, Switch } from 'react-native';
import { useState } from 'react';
import { Text, View } from '@/components/Themed';

export default function CardControlsScreen() {
  const [online, setOnline] = useState(true);
  const [contactless, setContactless] = useState(true);
  const [international, setInternational] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Online Payments</Text>
        <Switch value={online} onValueChange={setOnline} />
      </View>
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Contactless</Text>
        <Switch value={contactless} onValueChange={setContactless} />
      </View>
      <View style={styles.row}>
        <Text style={styles.rowTitle}>International Usage</Text>
        <Switch value={international} onValueChange={setInternational} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  rowTitle: { fontSize: 16 },
});