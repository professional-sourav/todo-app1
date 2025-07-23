"use client";

import { useTheme } from "@/components/theme-provider";

export default function DashboardPage() {
    console.log("DashboardPage component rendered");

    const theme = useTheme();
    
  return (
    <div>
      <h1 style={{ color: theme.colors.secondary }}>Dashboard</h1>
    </div>
  );
}