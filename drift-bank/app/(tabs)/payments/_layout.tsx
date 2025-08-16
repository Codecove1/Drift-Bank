import { Stack } from 'expo-router';

export default function PaymentsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Payments' }} />
      <Stack.Screen name="transfer" options={{ title: 'Transfer' }} />
      <Stack.Screen name="bill-pay" options={{ title: 'Bill Pay' }} />
      <Stack.Screen name="recipients" options={{ title: 'Recipients' }} />
    </Stack>
  );
}