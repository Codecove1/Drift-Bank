import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function FAQScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.q}>How do I reset my password?</Text>
      <Text style={styles.a}>Go to Settings → Security → Reset Password.</Text>

      <Text style={styles.q}>How do I report a lost card?</Text>
      <Text style={styles.a}>Go to Cards → Select Card → Freeze and then contact support.</Text>

      <Text style={styles.q}>How do I set up direct deposit?</Text>
      <Text style={styles.a}>Find your account and routing numbers under Accounts → Everyday Checking.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  q: { fontWeight: '700' },
  a: { opacity: 0.8 },
});