import { StyleSheet, Switch } from 'react-native';
import { useState } from 'react';
import { Text, View } from '@/components/Themed';

export default function NotificationsScreen() {
  const [push, setPush] = useState(true);
  const [email, setEmail] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Push Notifications</Text>
        <Switch value={push} onValueChange={setPush} />
      </View>
      <View style={styles.row}>
        <Text>Email Notifications</Text>
        <Switch value={email} onValueChange={setEmail} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
});