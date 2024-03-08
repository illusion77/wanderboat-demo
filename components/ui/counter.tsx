import React from "react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function Counter({
  title,
  desc,
  onlyOne,
  defaultNumber,
}: {
  title: string;
  desc: string;
  onlyOne: boolean;
  defaultNumber: number;
}) {
  const [count, setCount] = useState(defaultNumber);
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    const orignalIsOn = isOn;
    setIsOn(!orignalIsOn);
    setCount(Number(!orignalIsOn));
  };

  const increment = () => {
    if (onlyOne && count >= 1) return;
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="flex flex-col gap-y-2 text-start">
      <div
        className={`flex ${
          onlyOne ? "flex-row justify-between" : "flex-col gap-y-2"
        }`}
      >
        <div>{title}</div>
        {onlyOne ? (
          <div className="flex items-center gap-x-2">
            <Switch
              id="pet-number"
              checked={isOn}
              onCheckedChange={toggleSwitch}
              className="data-[state=checked]:bg-blue-500"
            />
            {/* <Label htmlFor="pet-number">{count}</Label> */}
          </div>
        ) : (
          <div>
            <div className="flex items-center">
              <button onClick={decrement} aria-label="Decrease count">
                <AiOutlineMinus size={16} className="text-blue-500" />
              </button>
              <span className="mx-8 text-xs">{count}</span>
              <button onClick={increment} aria-label="Increase count">
                <AiOutlinePlus size={16} className="text-blue-500" />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="text-sm font-light text-gray-700">{desc}</div>
    </div>
  );
}
