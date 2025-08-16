import { StyleSheet, FlatList, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Text, View } from '@/components/Themed';

const cards = [
  { id: 'card-1', last4: '1234', label: 'Everyday Debit', status: 'Active' },
  { id: 'card-2', last4: '9876', label: 'Virtual Card', status: 'Locked' },
];

export default function CardsIndexScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={{ pathname: '/cards/details', params: { id: item.id } }} asChild>
            <Pressable style={styles.row}>
              <View>
                <Text style={styles.rowTitle}>{item.label}</Text>
                <Text style={styles.rowSubtitle}>•••• {item.last4} · {item.status}</Text>
              </View>
              <Text style={styles.manage}>Manage</Text>
            </Pressable>
          </Link>
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
  manage: { color: '#0A84FF' },
  separator: { height: 1, opacity: 0.08, backgroundColor: '#000' },
});