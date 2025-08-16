import { StyleSheet, FlatList, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Text, View } from '@/components/Themed';

const sampleAccounts = [
  { id: 'chk-001', name: 'Everyday Checking', type: 'Checking', balance: 2314.22 },
  { id: 'sav-002', name: 'High-Yield Savings', type: 'Savings', balance: 10234.88 },
  { id: 'cc-003', name: 'Drift Rewards', type: 'Credit', balance: -342.10 },
];

export default function AccountsIndexScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={sampleAccounts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/accounts/${item.id}` } asChild>
            <Pressable style={styles.row}>
              <View style={styles.rowLeft}>
                <Text style={styles.rowTitle}>{item.name}</Text>
                <Text style={styles.rowSubtitle}>{item.type}</Text>
              </View>
              <Text style={styles.rowAmount}>${Math.abs(item.balance).toFixed(2)}</Text>
            </Pressable>
          </Link>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <Link href="/accounts/transactions" style={styles.secondaryLink}>
        <Text>View All Transactions</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  rowLeft: { gap: 2 },
  rowTitle: { fontSize: 16, fontWeight: '600' },
  rowSubtitle: { fontSize: 12, opacity: 0.7 },
  rowAmount: { fontSize: 16, fontWeight: '600' },
  separator: { height: 1, opacity: 0.08, backgroundColor: '#000' },
  secondaryLink: { marginTop: 12, alignSelf: 'center' },
});