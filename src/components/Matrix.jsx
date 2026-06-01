import { useState } from "react";
import { matrix, LEVELS } from "../data/matrix.js";

export default function Matrix() {
  const [activeCategory, setActiveCategory] = useState("ts");
  const [activeLevel, setActiveLevel] = useState(null); // null = show all

  const category = matrix.find((c) => c.id === activeCategory);

  const levelColors = {
    junior: { ring: "ring-slate-300", dot: "bg-slate-400" },
    middle: { ring: "ring-blue-300", dot: "bg-blue-500" },
    senior: { ring: "ring-violet-300", dot: "bg-violet-600" },
    lead: { ring: "ring-indigo-400", dot: "bg-indigo-600" },
  };

  const visibleLevels = activeLevel
    ? LEVELS.filter((l) => l.id === activeLevel)
    : LEVELS;

  return (
    <div className="max-w-5xl">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Матрица компетенций
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Все уровни от Junior до Lead. Используй как карту: понимай где ты
          сейчас и что нужно освоить для следующего шага.
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {matrix.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={[
              "px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all",
              activeCategory === cat.id
                ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                : "bg-white text-slate-600 border-slate-200 hover:border-indigo-300",
            ].join(" ")}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Level filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveLevel(null)}
          className={[
            "px-3 py-1 rounded-full text-xs font-medium border transition-all",
            !activeLevel
              ? "bg-slate-700 text-white border-slate-700"
              : "text-slate-500 border-slate-200 hover:border-slate-300",
          ].join(" ")}
        >
          Все уровни
        </button>
        {LEVELS.map((l) => (
          <button
            key={l.id}
            onClick={() => setActiveLevel(activeLevel === l.id ? null : l.id)}
            className={[
              "px-3 py-1 rounded-full text-xs font-medium border transition-all",
              activeLevel === l.id
                ? `${l.header} ${l.text} border-current`
                : "text-slate-500 border-slate-200 hover:border-slate-300",
            ].join(" ")}
          >
            {l.label}
          </button>
        ))}
      </div>

      {/* Level cards */}
      <div
        className={`grid gap-4 ${visibleLevels.length === 4 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}
      >
        {visibleLevels.map((level) => {
          const skills = category?.levels[level.id] ?? [];
          return (
            <div
              key={level.id}
              className={`rounded-xl border-2 ${level.border} ${level.bg} overflow-hidden`}
            >
              <div
                className={`${level.header} px-4 py-3 flex items-center gap-2`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full ${levelColors[level.id].dot}`}
                />
                <span className={`font-bold text-sm ${level.text}`}>
                  {level.label}
                </span>
                {level.id === "lead" && (
                  <span className="ml-auto text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full font-semibold">
                    Цель
                  </span>
                )}
              </div>
              <ul className="p-4 space-y-2">
                {skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <span
                      className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${levelColors[level.id].dot}`}
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Gap analysis hint */}
      {!activeLevel && (
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
          <span className="font-semibold">Как использовать:</span> Выбери
          категорию → посмотри уровень Senior/Lead → сравни с тем что знаешь
          сейчас → найди конкретную тему в дорожной карте Q1-Q4 → изучи.
        </div>
      )}
    </div>
  );
}
