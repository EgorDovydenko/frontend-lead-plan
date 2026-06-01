import { useState, useCallback } from "react";
import { roadmap } from "../data/roadmap.js";

const STORAGE_KEY = "flp-progress-v1";

function loadCompleted() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
}

function saveCompleted(set) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  } catch {
    // storage not available
  }
}

export function useProgress() {
  const [completed, setCompleted] = useState(loadCompleted);

  const toggle = useCallback((topicId) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(topicId)) {
        next.delete(topicId);
      } else {
        next.add(topicId);
      }
      saveCompleted(next);
      return next;
    });
  }, []);

  const isCompleted = useCallback(
    (topicId) => completed.has(topicId),
    [completed],
  );

  const stats = (() => {
    const allTopics = roadmap.flatMap((q) => q.topics);
    const total = allTopics.length;
    const done = allTopics.filter((t) => completed.has(t.id)).length;

    const byQuarter = roadmap.map((q) => {
      const qTotal = q.topics.length;
      const qDone = q.topics.filter((t) => completed.has(t.id)).length;
      return { id: q.id, title: q.title, total: qTotal, done: qDone };
    });

    const trackIds = ["frontend", "ai", "pm"];
    const byTrack = trackIds.map((track) => {
      const tTopics = allTopics.filter((t) => t.track === track);
      const tDone = tTopics.filter((t) => completed.has(t.id)).length;
      return { track, total: tTopics.length, done: tDone };
    });

    return { total, done, byQuarter, byTrack };
  })();

  return { completed, toggle, isCompleted, stats };
}
