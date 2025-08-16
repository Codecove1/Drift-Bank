import { StyleSheet, Switch, Button } from 'react-native';
import { useState } from 'react';
import { Text, View } from '@/components/Themed';

export default function SecurityScreen() {
  const [twoFA, setTwoFA] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Reset Password" onPress={() => {}} />
      <View style={styles.row}>
        <Text>Enable Two-Factor Authentication</Text>
        <Switch value={twoFA} onValueChange={setTwoFA} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
});