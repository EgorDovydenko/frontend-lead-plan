import { routine, books } from "../data/routine.js";

export default function Routine() {
  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Режим дня (ПН – ПТ)
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          1–1.5 часа в будни. Выходные — полный отдых. Мозг консолидирует знания
          во сне.
        </p>
      </div>

      {/* Week grid */}
      <div className="space-y-3 mb-8">
        {routine.map((day) => (
          <div
            key={day.day}
            className={`flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 border-l-4 ${day.color} shadow-sm`}
          >
            <div className="text-2xl flex-shrink-0">{day.emoji}</div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-bold text-slate-800">{day.day}</span>
                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-mono">
                  {day.time}
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  {day.title}
                </span>
              </div>
              <ul className="space-y-1">
                {day.steps.map((step, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              {day.note && (
                <p className="mt-2 text-xs text-slate-400 italic">{day.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Weekend */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center text-sm text-slate-500 mb-8">
        <span className="text-lg">🌿</span>
        <span className="ml-2 font-medium">
          Суббота / Воскресенье — полный отдых.
        </span>
        <span className="block mt-0.5 text-xs">
          Допускается случайное чтение по интересу, но без обязанностей.
        </span>
      </div>

      {/* Recommended books */}
      <div>
        <h3 className="text-base font-bold text-slate-800 mb-3">
          Книги для четвергов
        </h3>
        <div className="space-y-2">
          {books.map((book) => (
            <div
              key={book.title}
              className="flex items-start gap-3 p-3 bg-white border border-slate-200 rounded-lg"
            >
              <div className="flex-shrink-0 mt-0.5">
                {book.priority === "high" ? (
                  <span className="text-xs bg-rose-100 text-rose-600 font-semibold px-1.5 py-0.5 rounded">
                    Must
                  </span>
                ) : (
                  <span className="text-xs bg-slate-100 text-slate-500 font-semibold px-1.5 py-0.5 rounded">
                    +
                  </span>
                )}
              </div>
              <div>
                <span className="text-sm font-semibold text-slate-800">
                  {book.title}
                </span>
                <span className="text-xs text-slate-400 ml-2">
                  — {book.author}
                </span>
                <p className="text-xs text-slate-500 mt-0.5">{book.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips block */}
      <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-xl">
        <h4 className="text-sm font-bold text-indigo-800 mb-2">
          Принципы запоминания для мозга 30+
        </h4>
        <ul className="space-y-1">
          {[
            'Никогда не просто "посмотрел видео" — всегда конспект своими словами в Notion.',
            "Интервал повторения: пятница → через 3-5 дней → через 2 недели. Без приложений — просто расписание.",
            "Практика важнее теории: 40% читать, 60% писать руками.",
            "Ошибки при написании кода — не провал, а нейронные связи.",
            "1 час с концентрацией > 3 часа с телефоном рядом.",
          ].map((tip, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-indigo-700"
            >
              <span className="flex-shrink-0 font-bold mt-0.5">{i + 1}.</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
