import { RestrictedRoute } from "@/components/RestrictedRoute";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <RestrictedRoute>
      <Stack screenOptions={{ headerShown: false }} />
    </RestrictedRoute>
  );
}
