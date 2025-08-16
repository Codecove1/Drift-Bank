import { StyleSheet, Button } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function ContactSupportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Support</Text>
      <Text style={styles.subtitle}>We are here to help 24/7.</Text>
      <Button title="Chat with us" onPress={() => {}} />
      <Button title="Email support" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  title: { fontSize: 22, fontWeight: '700' },
  subtitle: { opacity: 0.7 },
});