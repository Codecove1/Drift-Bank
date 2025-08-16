import { StyleSheet, TextInput, Button } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TransferScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>From</Text>
      <TextInput placeholder="Select account" style={styles.input} />

      <Text style={styles.label}>To</Text>
      <TextInput placeholder="Recipient or account" style={styles.input} />

      <Text style={styles.label}>Amount</Text>
      <TextInput placeholder="$0.00" keyboardType="decimal-pad" style={styles.input} />

      <Button title="Review" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  label: { fontWeight: '600' },
  input: { borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10 },
});