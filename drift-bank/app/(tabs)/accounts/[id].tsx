import { StyleSheet } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';
import { Text, View } from '@/components/Themed';

export default function AccountDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account {id}</Text>
      <Text style={styles.subtitle}>Current Balance</Text>
      <Text style={styles.balance}>$2,314.22</Text>

      <View style={styles.actions}>
        <Link href="/payments/transfer" style={styles.actionBtn}><Text>Transfer</Text></Link>
        <Link href="/payments/bill-pay" style={styles.actionBtn}><Text>Pay Bill</Text></Link>
      </View>

      <Link href="/accounts/transactions" style={styles.link}><Text>See recent transactions</Text></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  subtitle: { opacity: 0.6 },
  balance: { fontSize: 28, fontWeight: '800', marginVertical: 12 },
  actions: { flexDirection: 'row', gap: 12, marginVertical: 16 },
  actionBtn: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 8, backgroundColor: 'rgba(0,0,0,0.06)' },
  link: { marginTop: 8 },
});