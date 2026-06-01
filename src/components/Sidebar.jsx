export default function Sidebar({ active, onNavigate }) {
  const links = [
    { id: "roadmap", icon: "🗺️", label: "Дорожная карта" },
    { id: "matrix", icon: "📊", label: "Матрица компетенций" },
    { id: "routine", icon: "⏱", label: "Режим дня" },
    { id: "progress", icon: "📈", label: "Мой прогресс" },
  ];

  return (
    <aside className="w-full md:w-60 bg-white border-r border-slate-200 flex-shrink-0 flex flex-col">
      <div className="p-5 border-b border-slate-100">
        <h1 className="text-lg font-bold text-slate-800 leading-tight">
          Lead<span className="text-indigo-600">Track</span>
        </h1>
        <p className="text-xs text-slate-400 mt-0.5">
          PM → Frontend Lead · 12 месяцев
        </p>
      </div>

      <nav className="flex md:flex-col overflow-x-auto md:overflow-visible p-2 gap-1">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => onNavigate(link.id)}
            className={[
              "flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors text-left whitespace-nowrap md:whitespace-normal w-full",
              active === link.id
                ? "bg-indigo-50 text-indigo-700 font-semibold"
                : "text-slate-600 hover:bg-slate-50",
            ].join(" ")}
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto p-4 hidden md:block">
        <div className="text-xs text-slate-400 leading-relaxed">
          <p>Инструменты:</p>
          <p>Notion · Cursor · Gemini</p>
          <p>CodeSandbox · Playwright</p>
        </div>
      </div>
    </aside>
  );
}
