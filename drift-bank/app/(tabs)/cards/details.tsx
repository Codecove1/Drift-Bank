import { StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';
import { Text, View } from '@/components/Themed';

export default function CardDetailsScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Card Details</Text>
      <Text style={styles.subtitle}>Card ID</Text>
      <Text style={styles.value}>{id ?? 'card-1'}</Text>

      <View style={styles.actions}>
        <Pressable style={styles.action}><Text>Freeze</Text></Pressable>
        <Pressable style={styles.action}><Text>Replace</Text></Pressable>
        <Link href="/cards/controls" style={styles.action}><Text>Controls</Text></Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 6 },
  subtitle: { opacity: 0.7, marginTop: 8 },
  value: { fontSize: 18, fontWeight: '600', marginBottom: 12 },
  actions: { flexDirection: 'row', gap: 12, marginTop: 12 },
  action: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 8, backgroundColor: 'rgba(0,0,0,0.06)' },
});