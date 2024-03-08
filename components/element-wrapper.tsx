import React, { Children } from "react";
import Scroll, { Link, Element } from "react-scroll";

export default function ElementWrapper({
  tabId,
  children,
}: {
  tabId: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-2 h-auto w-full flex flex-col gap-y-4 text-sm">
      <Element name={tabId} style={{ marginBottom: "200px" }}>
        {children}
      </Element>
    </div>
  );
}
