import { StyleSheet, FlatList, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';

const recipients = [
  { id: 'r1', name: 'Alice Johnson', account: '**** 4321' },
  { id: 'r2', name: 'City Utilities', account: 'Acct 99812' },
];

export default function RecipientsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable style={styles.row}>
            <View>
              <Text style={styles.rowTitle}>{item.name}</Text>
              <Text style={styles.rowSubtitle}>{item.account}</Text>
            </View>
            <Text style={styles.edit}>Edit</Text>
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <Pressable style={styles.addBtn}>
        <Text style={styles.addBtnText}>Add Recipient</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 14 },
  rowTitle: { fontSize: 16, fontWeight: '600' },
  rowSubtitle: { fontSize: 12, opacity: 0.7 },
  edit: { color: '#0A84FF' },
  separator: { height: 1, opacity: 0.08, backgroundColor: '#000' },
  addBtn: { marginTop: 12, alignSelf: 'center', paddingVertical: 10, paddingHorizontal: 14, borderRadius: 8, backgroundColor: '#0A84FF' },
  addBtnText: { color: '#fff', fontWeight: '600' },
});