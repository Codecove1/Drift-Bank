import { StyleSheet, TextInput, Button } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function BillPayScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Biller</Text>
      <TextInput placeholder="Company or person" style={styles.input} />

      <Text style={styles.label}>Amount</Text>
      <TextInput placeholder="$0.00" keyboardType="decimal-pad" style={styles.input} />

      <Text style={styles.label}>Date</Text>
      <TextInput placeholder="YYYY-MM-DD" style={styles.input} />

      <Button title="Schedule Payment" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  label: { fontWeight: '600' },
  input: { borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10 },
});