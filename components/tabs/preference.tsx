import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Zoom } from "../zoom";

const preferencesList = [
  {
    id: "nature",
    title: "Nature and outdoors activities",
    hint: "Light, just a hint",
    rating: 2,
  },
  {
    id: "culture",
    title: "Museums, culture & arts",
    hint: "Medium, let me feel it",
    rating: 2,
  },
  {
    id: "entertainment",
    title: "Entertainment",
    hint: "Solid, definitely there",
    rating: 3,
  },
  {
    id: "shopping",
    title: "Shopping",
    hint: "Full-on, all in!!!",
    rating: 5,
  },
  {
    id: "eat-drink",
    title: "Eat and drink",
    hint: "Heavy, I can’t miss!",
    rating: 4,
  },
];

const Preferences = () => {
  return (
    <>
      {preferencesList.map((pref) => (
        <Zoom key={pref.id}>
          <div className="p-2 rounded-lg text-start">
            <div className="font-light text-sm mb-2">
              {pref.title}
            </div>
            <div className="flex flex-row gap-6 items-center">
              <div className="flex flex-row space-x-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`h-6 w-6 ${
                      index < (pref.rating || 0)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="text-xs text-blue-300">{pref.hint}</div>
            </div>
          </div>
        </Zoom>
      ))}
    </>
  );
};

export default Preferences;
