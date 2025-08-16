import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Text, View } from '@/components/Themed';

export default function PaymentsIndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payments</Text>
      <Link href="/payments/transfer" style={styles.link}><Text>Make a Transfer</Text></Link>
      <Link href="/payments/bill-pay" style={styles.link}><Text>Pay a Bill</Text></Link>
      <Link href="/payments/recipients" style={styles.link}><Text>Manage Recipients</Text></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 6 },
  link: { paddingVertical: 12 },
});