import { roadmap, TRACKS } from "../data/roadmap.js";

function ProgressBar({ value, color = "bg-indigo-500" }) {
  return (
    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
      <div
        className={`h-full ${color} rounded-full transition-all duration-500`}
        style={{ width: `${Math.min(100, value)}%` }}
      />
    </div>
  );
}

export default function Progress({ stats, isCompleted }) {
  const { total, done, byQuarter, byTrack } = stats;
  const overallPct = total ? Math.round((done / total) * 100) : 0;

  const quarterColors = [
    "bg-indigo-500",
    "bg-emerald-500",
    "bg-amber-500",
    "bg-rose-500",
  ];
  const trackColorMap = {
    frontend: "bg-indigo-500",
    ai: "bg-violet-500",
    pm: "bg-emerald-500",
  };

  const recentlyCompleted = roadmap
    .flatMap((q) => q.topics)
    .filter((t) => isCompleted(t.id))
    .slice(-5)
    .reverse();

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">Мой прогресс</h2>
        <p className="text-sm text-slate-500 mt-1">
          Отмечай темы как изученные в дорожной карте — здесь они отображаются.
        </p>
      </div>

      {/* Overall */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-4 shadow-sm">
        <div className="flex items-end justify-between mb-3">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-1">
              Общий прогресс
            </p>
            <p className="text-3xl font-bold text-slate-800">
              {overallPct}
              <span className="text-lg text-slate-400">%</span>
            </p>
          </div>
          <p className="text-sm text-slate-500">
            {done} из {total} тем
          </p>
        </div>
        <ProgressBar value={overallPct} color="bg-indigo-500" />
      </div>

      {/* By quarter */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-4 shadow-sm">
        <h3 className="text-sm font-bold text-slate-700 mb-4">По кварталам</h3>
        <div className="space-y-3">
          {byQuarter.map((q, i) => {
            const pct = q.total ? Math.round((q.done / q.total) * 100) : 0;
            return (
              <div key={q.id}>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span className="font-medium">{q.title}</span>
                  <span>
                    {q.done}/{q.total} · {pct}%
                  </span>
                </div>
                <ProgressBar value={pct} color={quarterColors[i]} />
              </div>
            );
          })}
        </div>
      </div>

      {/* By track */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-4 shadow-sm">
        <h3 className="text-sm font-bold text-slate-700 mb-4">По трекам</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {byTrack.map(({ track, total: t, done: d }) => {
            const pct = t ? Math.round((d / t) * 100) : 0;
            const info = TRACKS[track];
            return (
              <div
                key={track}
                className={`rounded-lg p-4 ${info.bg} border ${info.border}`}
              >
                <p
                  className={`text-xs font-bold uppercase tracking-wide ${info.text} mb-2`}
                >
                  {info.label}
                </p>
                <p className={`text-2xl font-bold ${info.text}`}>
                  {pct}
                  <span className="text-base">%</span>
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {d} из {t} тем
                </p>
                <div className="mt-2 h-1.5 bg-white/60 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${trackColorMap[track]}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recently completed */}
      {recentlyCompleted.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h3 className="text-sm font-bold text-slate-700 mb-3">
            Последние изученные темы
          </h3>
          <ul className="space-y-2">
            {recentlyCompleted.map((topic) => (
              <li
                key={topic.id}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <span className="flex-shrink-0 text-emerald-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>{topic.title}</span>
                <span
                  className={`ml-auto text-xs px-2 py-0.5 rounded-full ${TRACKS[topic.track].bg} ${TRACKS[topic.track].text}`}
                >
                  {TRACKS[topic.track].label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {done === 0 && (
        <div className="mt-4 p-6 bg-slate-50 border border-dashed border-slate-300 rounded-xl text-center">
          <p className="text-slate-500 text-sm">
            Ни одной темы ещё не отмечено.
          </p>
          <p className="text-slate-400 text-xs mt-1">
            Иди в «Дорожную карту» и начни отмечать изученное.
          </p>
        </div>
      )}
    </div>
  );
}
