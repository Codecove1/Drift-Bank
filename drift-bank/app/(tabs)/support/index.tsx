import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Text, View } from '@/components/Themed';

export default function SupportIndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Support</Text>
      <Link href="/support/faq" style={styles.link}><Text>Frequently Asked Questions</Text></Link>
      <Link href="/support/contact" style={styles.link}><Text>Contact Support</Text></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 6 },
  link: { paddingVertical: 12 },
});