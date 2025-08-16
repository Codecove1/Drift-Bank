import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';

const transactions = [
  { id: 't1', merchant: 'Coffee Shop', amount: -4.50, date: '2025-08-12' },
  { id: 't2', merchant: 'Payroll', amount: 2400, date: '2025-08-12' },
  { id: 't3', merchant: 'Groceries', amount: -78.12, date: '2025-08-10' },
  { id: 't4', merchant: 'Utilities', amount: -120.00, date: '2025-08-08' },
];

export default function TransactionsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View>
              <Text style={styles.rowTitle}>{item.merchant}</Text>
              <Text style={styles.rowSubtitle}>{item.date}</Text>
            </View>
            <Text style={[styles.rowAmount, { color: item.amount < 0 ? '#D00' : '#0A0' }]}>${Math.abs(item.amount).toFixed(2)}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 14 },
  rowTitle: { fontSize: 16, fontWeight: '600' },
  rowSubtitle: { fontSize: 12, opacity: 0.7 },
  rowAmount: { fontSize: 16, fontWeight: '700' },
  separator: { height: 1, opacity: 0.08, backgroundColor: '#000' },
});