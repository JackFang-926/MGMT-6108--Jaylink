/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import ConsentScreen from "./screens/ConsentScreen.jsx";
import PlansScreen from "./screens/PlansScreen.jsx";
import DebriefScreen from "./screens/DebriefScreen.jsx";
import { VARIANT } from "./data.js";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<"consent" | "plans" | "debrief">("consent");

  return (
    <div className="w-full min-h-screen text-[#222]">
      {currentScreen === "consent" && (
        <ConsentScreen
          variant={VARIANT}
          onContinue={() => setCurrentScreen("plans")}
        />
      )}

      {currentScreen === "plans" && (
        <PlansScreen
          variant={VARIANT}
          onSignUp={() => setCurrentScreen("debrief")}
        />
      )}

      {currentScreen === "debrief" && (
        <DebriefScreen
          variant={VARIANT}
          onBackToStart={() => setCurrentScreen("consent")}
        />
      )}
    </div>
  );
}
