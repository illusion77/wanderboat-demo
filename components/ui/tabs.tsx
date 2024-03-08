// components/ui/tabs.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

import Preference from "../tabs/preference";
import People from "../tabs/people";
import Days from "../tabs/days";
import { Button } from "./button";
import Scroll, { Link, Element } from "react-scroll";
import ElementWrapper from "../element-wrapper";

export const Tabs = ({
  tabs,
  hasContent,
  uniqueId,
}: {
  tabs: Tab[];
  hasContent: boolean;
  uniqueId: string;
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // const renderContent = () => {
  //   switch (activeTab) {
  //     case "preferences":
  //       return <Preference />;
  //     case "people":
  //       return <People />;
  //     case "days":
  //       return <Days />;
  //   }
  // };

  return (
    <div
      className={`flex flex-col rounded-2xl justify-center
      ${hasContent ? "border-2 px-6 py-4" : ""}`}
    >
      <div
        className={`flex flex-row p-1 rounded-lg
        ${hasContent ? "bg-gray-200" : "bg-gray-900"}`}
      >
        {tabs.map((tab, index) => (
          <div key={tab.id} className="flex flex-1 items-center justify-center">
            {!hasContent && index !== 0 && (
              <div className="w-[1px] bg-white h-2.5 items-center" />
            )}
            <Link
              to={`${tab.id}`}
              smooth={true}
              duration={500}
              containerId="containerElement"
              className={`relative flex flex-row w-full justify-center py-1 text-xs font-medium transition
            ${activeTab === tab.id ? "text-black" : "text-gray-400"}`}
            >
              <button onClick={() => setActiveTab(tab.id)}>
                {activeTab === tab.id && (
                  <div>
                    <motion.span
                      layoutId={`${uniqueId}`}
                      className="absolute inset-0 bg-white rounded-md"
                      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                      style={{
                        margin: activeTab === tab.id ? "0 -1px" : "0",
                      }}
                    />
                  </div>
                )}
                <div className="relative p-1">{tab.label}</div>
              </button>
            </Link>
          </div>
        ))}
      </div>
      {hasContent && (
        <div className="mt-4 h-auto w-full flex flex-col gap-y-4 text-sm">
          {/* {renderContent()} */}
          <div
            id="containerElement"
            style={{
              position: "relative",
              height: "400px",
              overflow: "hidden",
            }}
            className="z-10 p-2"
          >
            <ElementWrapper tabId="preferences">
              <Preference />
            </ElementWrapper>
            <ElementWrapper tabId="people">
              <People />
            </ElementWrapper>
            <ElementWrapper tabId="days">
              <Days />
            </ElementWrapper>
          </div>
          <div className="flex flex-col items-center">
            <Button className="w-36">Apply</Button>
          </div>
        </div>
      )}
    </div>
  );
};
