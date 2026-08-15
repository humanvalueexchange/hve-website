"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "hve-dyslexia-friendly";

export function AccessibilityToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const savedPreference = window.localStorage.getItem(STORAGE_KEY) === "true";
    document.documentElement.classList.toggle("dyslexia-friendly", savedPreference);
    setEnabled(savedPreference);
  }, []);

  function toggleReadingMode() {
    const nextEnabled = !enabled;
    document.documentElement.classList.toggle("dyslexia-friendly", nextEnabled);
    window.localStorage.setItem(STORAGE_KEY, String(nextEnabled));
    setEnabled(nextEnabled);
  }

  return (
    <button
      aria-pressed={enabled}
      className="rounded-full border border-[#5b7668] px-4 py-2 text-left text-sm font-semibold text-[#d7ded8] hover:border-[#d7a85b] hover:text-white"
      onClick={toggleReadingMode}
      type="button"
    >
      Dyslexia-Friendly Reading Mode: {enabled ? "On" : "Off"}
    </button>
  );
}
