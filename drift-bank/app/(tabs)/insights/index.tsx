import { StyleSheet, View } from 'react-native';
import { Text } from '@/components/Themed';
import { Link } from 'expo-router';

export default function InsightsIndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insights</Text>
      <View style={styles.kpis}>
        <View style={styles.kpiCard}>
          <Text style={styles.kpiLabel}>This Month Spend</Text>
          <Text style={styles.kpiValue}>$1,235</Text>
        </View>
        <View style={styles.kpiCard}>
          <Text style={styles.kpiLabel}>Top Category</Text>
          <Text style={styles.kpiValue}>Groceries</Text>
        </View>
      </View>
      <Link href="/insights/budgets" style={styles.link}><Text>Budgets</Text></Link>
      <Link href="/insights/categories" style={styles.link}><Text>Categories</Text></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  kpis: { flexDirection: 'row', gap: 12, marginBottom: 12 },
  kpiCard: { flex: 1, borderRadius: 12, padding: 16, backgroundColor: 'rgba(0,0,0,0.04)' },
  kpiLabel: { fontSize: 12, opacity: 0.7 },
  kpiValue: { fontSize: 18, fontWeight: '700', marginTop: 6 },
  link: { paddingVertical: 10 },
});