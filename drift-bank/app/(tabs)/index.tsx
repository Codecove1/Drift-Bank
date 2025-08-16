import { StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';

import { Text, View } from '@/components/Themed';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Drift Bank</Text>
      <Text style={styles.subtitle}>Welcome back. What would you like to do?</Text>

      <View style={styles.grid}>
        <Link href="/accounts" style={styles.tile}>
          <Text style={styles.tileTitle}>Accounts</Text>
          <Text style={styles.tileDesc}>Balances and activity</Text>
        </Link>
        <Link href="/payments" style={styles.tile}>
          <Text style={styles.tileTitle}>Payments</Text>
          <Text style={styles.tileDesc}>Transfer & pay bills</Text>
        </Link>
        <Link href="/cards" style={styles.tile}>
          <Text style={styles.tileTitle}>Cards</Text>
          <Text style={styles.tileDesc}>Manage debit & virtual</Text>
        </Link>
        <Link href="/insights" style={styles.tile}>
          <Text style={styles.tileTitle}>Insights</Text>
          <Text style={styles.tileDesc}>Spending & budget</Text>
        </Link>
        <Link href="/support" style={styles.tile}>
          <Text style={styles.tileTitle}>Support</Text>
          <Text style={styles.tileDesc}>Help & FAQs</Text>
        </Link>
        <Link href="/settings" style={styles.tile}>
          <Text style={styles.tileTitle}>Settings</Text>
          <Text style={styles.tileDesc}>Profile & security</Text>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  tile: {
    width: '48%',
    borderRadius: 12,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.04)'
  },
  tileTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  tileDesc: {
    fontSize: 12,
    opacity: 0.7,
  },
});
