import React, { useEffect, useRef } from "react";
import Scroll from "react-scroll";
import Preference from "./tabs/preference";
import People from "./tabs/people";
import Days from "./tabs/days";

var Link = Scroll.Link;
var Element = Scroll.Element;

export const ScrollList = ({ activeTab }: { activeTab: string }) => {
  return (
    <div>
      <Link
        to="preferences"
        smooth={true}
        duration={250}
        containerId="containerElement"
        style={{ display: "inline-block", margin: "20px" }}
      >
        preferences
      </Link>

      <Link
        to="people"
        smooth={true}
        duration={250}
        containerId="containerElement"
        style={{ display: "inline-block", margin: "20px" }}
      >
        people
      </Link>
      <Link
        to="days"
        smooth={true}
        duration={250}
        containerId="containerElement"
        style={{ display: "inline-block", margin: "20px" }}
      >
        days
      </Link>
      <Element
        name="tabs"
        className="element"
        id="containerElement"
        style={{
          position: "relative",
          height: "200px",
          overflow: "scroll",
          marginBottom: "100px",
        }}
      >
        <Element name="preferences" style={{ marginBottom: "200px" }}>
          <Preference />
        </Element>
        <Element name="people" style={{ marginBottom: "200px" }}>
          <People />
        </Element>
        <Element name="days" style={{ marginBottom: "200px" }}>
          <Days />
        </Element>
      </Element>
    </div>
  );
};
