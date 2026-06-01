import { useState } from "react";
import { roadmap, TRACKS } from "../data/roadmap.js";

function TrackBadge({ track }) {
  const t = TRACKS[track];
  return (
    <span
      className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${t.bg} ${t.text}`}
    >
      {t.label}
    </span>
  );
}

function TopicItem({ topic, isCompleted, onToggle }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={[
        "rounded-lg border transition-colors",
        isCompleted
          ? "bg-slate-50 border-slate-200 opacity-70"
          : "bg-white border-slate-200",
      ].join(" ")}
    >
      <div className="flex items-start gap-3 p-3">
        <button
          onClick={() => onToggle(topic.id)}
          className={[
            "mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
            isCompleted
              ? "bg-emerald-500 border-emerald-500 text-white"
              : "border-slate-300 hover:border-indigo-400",
          ].join(" ")}
          title={
            isCompleted ? "Отметить как не изученное" : "Отметить как изученное"
          }
        >
          {isCompleted && (
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 12 12"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 6l3 3 5-5"
              />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <TrackBadge track={topic.track} />
            <span
              className={`text-sm font-medium ${isCompleted ? "line-through text-slate-400" : "text-slate-800"}`}
            >
              {topic.title}
            </span>
          </div>

          {expanded && (
            <p className="text-xs text-slate-600 leading-relaxed mt-2 pr-2">
              {topic.detail}
            </p>
          )}
        </div>

        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors"
          title="Подробнее"
        >
          <svg
            className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Roadmap({ isCompleted, onToggle }) {
  const [activeTrack, setActiveTrack] = useState("all");
  const [expandedQ, setExpandedQ] = useState("q1");

  const trackFilters = [
    { id: "all", label: "Все", style: "bg-slate-100 text-slate-700" },
    {
      id: "frontend",
      label: "Frontend",
      style: "bg-indigo-100 text-indigo-700",
    },
    { id: "ai", label: "AI", style: "bg-violet-100 text-violet-700" },
    { id: "pm", label: "PM", style: "bg-emerald-100 text-emerald-700" },
  ];

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Дорожная карта на год
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          40 тем по 3 трекам. Отмечай изученные — прогресс сохраняется.
          Разворачивай тему чтобы увидеть детали.
        </p>
      </div>

      {/* Track filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {trackFilters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveTrack(f.id)}
            className={[
              "px-3 py-1.5 rounded-full text-xs font-semibold border transition-all",
              activeTrack === f.id
                ? `${f.style} border-current shadow-sm`
                : "bg-white text-slate-500 border-slate-200 hover:border-slate-300",
            ].join(" ")}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Quarters */}
      <div className="space-y-4">
        {roadmap.map((quarter) => {
          const filteredTopics =
            activeTrack === "all"
              ? quarter.topics
              : quarter.topics.filter((t) => t.track === activeTrack);

          const doneCount = filteredTopics.filter((t) =>
            isCompleted(t.id),
          ).length;
          const pct = filteredTopics.length
            ? Math.round((doneCount / filteredTopics.length) * 100)
            : 0;
          const isOpen = expandedQ === quarter.id;

          return (
            <div
              key={quarter.id}
              className={`rounded-xl border-2 overflow-hidden ${quarter.colorClass}`}
            >
              {/* Quarter header */}
              <button
                onClick={() => setExpandedQ(isOpen ? null : quarter.id)}
                className={`w-full flex items-center justify-between p-4 ${quarter.headerBg} hover:brightness-95 transition-all text-left`}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`font-bold text-base ${quarter.headerText}`}
                      >
                        {quarter.title}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded font-mono ${quarter.badgeBg} ${quarter.badgeText}`}
                      >
                        {quarter.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 hidden sm:block">
                      {quarter.tagline}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                  <div className="text-right hidden sm:block">
                    <span className={`text-sm font-bold ${quarter.headerText}`}>
                      {doneCount}/{filteredTopics.length}
                    </span>
                    <div className="text-xs text-slate-500">{pct}%</div>
                  </div>
                  <div className="w-20 hidden sm:block">
                    <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-current rounded-full transition-all"
                        style={{
                          width: `${pct}%`,
                          color: quarter.headerText
                            .replace("text-", "")
                            .includes("indigo")
                            ? "#6366f1"
                            : quarter.headerText
                                  .replace("text-", "")
                                  .includes("emerald")
                              ? "#10b981"
                              : quarter.headerText
                                    .replace("text-", "")
                                    .includes("amber")
                                ? "#f59e0b"
                                : "#f43f5e",
                        }}
                      />
                    </div>
                  </div>
                  <svg
                    className={`w-4 h-4 ${quarter.headerText} transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Topics */}
              {isOpen && (
                <div className="p-4 space-y-2 bg-white">
                  {filteredTopics.length === 0 && (
                    <p className="text-sm text-slate-400 text-center py-4">
                      Нет тем по выбранному фильтру
                    </p>
                  )}
                  {filteredTopics.map((topic) => (
                    <TopicItem
                      key={topic.id}
                      topic={topic}
                      isCompleted={isCompleted(topic.id)}
                      onToggle={onToggle}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
