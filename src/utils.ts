import type { MainThread } from "@lynx-js/types";

export const handleTapStart = (e: MainThread.TouchEvent) => {
  "main thread";
  if (e.currentTarget?.setStyleProperty) {
    e.currentTarget.setStyleProperty("background-color", "#04978a");
  }
};

export const handleTapEnd = (e: MainThread.TouchEvent) => {
  "main thread";
  if (e.currentTarget?.setStyleProperty) {
    e.currentTarget.setStyleProperty("background-color", "#fff");
  }
};
