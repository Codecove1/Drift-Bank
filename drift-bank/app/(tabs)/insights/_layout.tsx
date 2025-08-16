import { Stack } from 'expo-router';

export default function InsightsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Insights' }} />
      <Stack.Screen name="budgets" options={{ title: 'Budgets' }} />
      <Stack.Screen name="categories" options={{ title: 'Categories' }} />
    </Stack>
  );
}