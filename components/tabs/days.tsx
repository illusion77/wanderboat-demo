"use client";

import React, { useEffect, useState } from "react";
import Counter from "../ui/counter";
import { Switch } from "../ui/switch";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { Zoom } from "../zoom";

export default function Days() {
  // const [mounted, setMounted] = useState(false);
  
  // useEffect(() => {
  //   setMounted(true);
  // }, []);
  
  const [isOn, setIsOn] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days
  });

  // if (!mounted) {
  //   return null;
  // }

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <Zoom>
        <div className="flex flex-row justify-between items-end">
          <Counter
            title="Travel for"
            desc="Specific date"
            onlyOne={false}
            defaultNumber={3}
          />
          <Switch
            id="travel-calender"
            className="data-[state=checked]:bg-blue-500"
            checked={isOn}
            onCheckedChange={toggleSwitch}
          />
        </div>
      </Zoom>
      {isOn && (
        <Calendar
          mode="range"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      )}
    </>
  );
}
