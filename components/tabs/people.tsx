// components/tabs/people.tsx
import React from "react";
import { Tabs } from "../ui/tabs";
import Counter from "../ui/counter";
import { Zoom } from "../zoom";

const tabs: Tab[] = [
  { id: "customize", label: "Customize" },
  { id: "solo", label: "Solo" },
  { id: "partner", label: "Partner" },
  { id: "family", label: "Family" },
  { id: "group", label: "Group" },
];

const CounterInfo: Counterinfo[] = [
  {
    id: "adult",
    title: "Adult",
    desc: "How many adults are on this trip",
    onlyOne: false,
    defaultNumber: 2,
  },
  {
    id: "child",
    title: "Child",
    desc: "AI will customize kid-friendly attractions",
    onlyOne: false,
    defaultNumber: 1,
  },
  {
    id: "pet",
    title: "Pet",
    desc: "Consider travel convenience for your pet",
    onlyOne: true,
    defaultNumber: 0,
  },
];

export default function people() {
  return (
    <div className="p-2 flex flex-col gap-y-4">
      <Zoom>
        <div className="flex flex-col text-start gap-y-2">
          <div>Travel with</div>
          <Tabs tabs={tabs} hasContent={false} uniqueId="people"/>
        </div>
      </Zoom>
      {CounterInfo.map((info) => (
        <Zoom key={info.id}>
          <Counter
            title={info.title}
            desc={info.desc}
            onlyOne={info.onlyOne}
            defaultNumber={info.defaultNumber}
          />
        </Zoom>
      ))}
    </div>
  );
}
