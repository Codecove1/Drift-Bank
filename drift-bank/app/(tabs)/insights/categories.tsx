import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';

const categories = [
  { id: 'c1', label: 'Groceries', amount: 320 },
  { id: 'c2', label: 'Dining', amount: 145 },
  { id: 'c3', label: 'Transport', amount: 60 },
  { id: 'c4', label: 'Shopping', amount: 210 },
];

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(c) => c.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.rowTitle}>{item.label}</Text>
            <Text style={styles.amount}>${item.amount}</Text>
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
  rowTitle: { fontSize: 16 },
  amount: { fontSize: 16, fontWeight: '600' },
  separator: { height: 1, opacity: 0.08, backgroundColor: '#000' },
});