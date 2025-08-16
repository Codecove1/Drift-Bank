import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Text, View } from '@/components/Themed';

export default function SettingsIndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Link href="/settings/profile" style={styles.link}><Text>Profile</Text></Link>
      <Link href="/settings/security" style={styles.link}><Text>Security</Text></Link>
      <Link href="/settings/notifications" style={styles.link}><Text>Notifications</Text></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 6 },
  link: { paddingVertical: 12 },
});