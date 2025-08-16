import { StyleSheet, TextInput, Button } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full Name</Text>
      <TextInput placeholder="Your name" style={styles.input} />

      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="you@example.com" keyboardType="email-address" style={styles.input} />

      <Button title="Save" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  label: { fontWeight: '600' },
  input: { borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10 },
});