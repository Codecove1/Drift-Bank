import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';

const budgets = [
  { id: 'b1', label: 'Groceries', limit: 400, used: 280 },
  { id: 'b2', label: 'Dining', limit: 200, used: 120 },
  { id: 'b3', label: 'Transport', limit: 150, used: 60 },
];

export default function BudgetsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={budgets}
        keyExtractor={(b) => b.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View>
              <Text style={styles.rowTitle}>{item.label}</Text>
              <Text style={styles.rowSubtitle}>${item.used} / ${item.limit}</Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  row: { paddingVertical: 14 },
  rowTitle: { fontSize: 16, fontWeight: '600' },
  rowSubtitle: { fontSize: 12, opacity: 0.7 },
  separator: { height: 1, opacity: 0.08, backgroundColor: '#000' },
});