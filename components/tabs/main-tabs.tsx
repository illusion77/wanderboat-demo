// components/tabs/main-tabs.tsx
"use client";

import { Tabs } from "../ui/tabs";

const tabs: Tab[] = [
  { id: "preferences", label: "Preferences" },
  { id: "people", label: "People" },
  { id: "days", label: "Days" },
];

export function MainTabs() {
  return (
    <div className="w-[388px] py-2">
      <Tabs tabs={tabs} hasContent={true} uniqueId="main" />
    </div>
  );
}
