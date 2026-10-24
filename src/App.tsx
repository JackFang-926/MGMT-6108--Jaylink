/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import ConsentScreen from "./screens/ConsentScreen.jsx";
import PlansScreen from "./screens/PlansScreen.jsx";
import DebriefScreen from "./screens/DebriefScreen.jsx";

function getInitialVariant(): "A" | "B" {
  if (typeof window !== "undefined") {
    // 1. On every page load, read the URL parameter first:
    const params = new URLSearchParams(window.location.search);
    let urlVariant = params.get("v")?.toUpperCase();

    // Fallback if ?v= is attached inside/after hash:
    if (!urlVariant && window.location.hash.includes("?")) {
      const hashQuery = window.location.hash.slice(window.location.hash.indexOf("?"));
      urlVariant = new URLSearchParams(hashQuery).get("v")?.toUpperCase();
    }

    // 2. If urlVariant is "A" or "B", use it directly and also write it to sessionStorage under key "jaylink_variant"
    if (urlVariant === "A" || urlVariant === "B") {
      try {
        sessionStorage.setItem("jaylink_variant", urlVariant);
      } catch {
        // ignore
      }
      return urlVariant;
    }

    // 3. If urlVariant is missing or invalid, read sessionStorage:
    try {
      const stored = sessionStorage.getItem("jaylink_variant");
      if (stored === "A" || stored === "B") {
        return stored;
      }
    } catch {
      // ignore
    }

    // 4. If sessionStorage is also empty, randomly assign "A" or "B", write it to sessionStorage, and use it
    const assigned: "A" | "B" = Math.random() < 0.5 ? "A" : "B";
    try {
      sessionStorage.setItem("jaylink_variant", assigned);
    } catch {
      // ignore
    }
    return assigned;
  }
  return "A";
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<"consent" | "plans" | "debrief">("consent");
  const [variant, setVariant] = useState<"A" | "B">(getInitialVariant);

  useEffect(() => {
    // Keep variant synchronized on mount and on browser history navigation
    setVariant(getInitialVariant());
    const handleUrlChange = () => {
      setVariant(getInitialVariant());
    };
    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  return (
    <div className="w-full min-h-screen text-[#222]">
      {currentScreen === "consent" && (
        <ConsentScreen
          variant={variant}
          onContinue={() => setCurrentScreen("plans")}
        />
      )}

      {currentScreen === "plans" && (
        <PlansScreen
          variant={variant}
          onSignUp={() => setCurrentScreen("debrief")}
        />
      )}

      {currentScreen === "debrief" && (
        <DebriefScreen
          variant={variant}
          onBackToStart={() => setCurrentScreen("consent")}
        />
      )}
    </div>
  );
}
