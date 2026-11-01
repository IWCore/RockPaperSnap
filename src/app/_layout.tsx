import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/*Hide the main header so the Tabs header shows instead*/}
      <Stack.Screen name = "(tabs)" options = {{headerShown: false}}/>
    </Stack>
  );
}
