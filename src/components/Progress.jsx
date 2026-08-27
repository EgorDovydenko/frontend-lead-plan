import { roadmap } from "../data/roadmap.js";
import styles from "./Progress.module.scss";

function ProgressBar({ value, variant = "accent" }) {
  return (
    <div className={styles.bar}>
      <div
        className={[styles.bar__fill, styles[`bar__fill--${variant}`]]
          .filter(Boolean)
          .join(" ")}
        style={{ width: `${Math.min(100, value)}%` }}
      />
    </div>
  );
}

export default function Progress({ stats, isCompleted }) {
  const { total, done, byQuarter } = stats;
  const overallPct = total ? Math.round((done / total) * 100) : 0;

  const recentlyCompleted = roadmap
    .flatMap((q) => q.topics)
    .filter((t) => isCompleted(t.id))
    .slice(-8)
    .reverse();

  return (
    <div className={styles.progress}>
      <header className={styles.progress__header}>
        <h2 className={styles.progress__title}>
          Мой прогресс{" "}
          {import.meta.env.VITE_MY_NAME
            ? import.meta.env.VITE_MY_NAME
            : "Аноним"}
        </h2>
        <p className={styles.progress__desc}>
          Отмечай темы в дорожной карте — здесь отображается общая картина по
          кварталам.
        </p>
      </header>

      <section className={styles.card}>
        <div className={styles.card__row}>
          <div>
            <p className={styles.card__label}>Общий прогресс</p>
            <p className={styles.card__value}>
              {overallPct}
              <span className={styles.card__valueSuffix}>%</span>
            </p>
          </div>
          <p className={styles.card__sub}>
            {done} из {total} тем
          </p>
        </div>
        <ProgressBar value={overallPct} variant="accent" />
      </section>

      <section className={styles.card}>
        <h3 className={styles.card__heading}>По кварталам</h3>
        {byQuarter.map((q) => {
          const pct = q.total ? Math.round((q.done / q.total) * 100) : 0;
          return (
            <div key={q.id} className={styles.quarterRow}>
              <div className={styles.quarterRow__meta}>
                <span className={styles.quarterRow__title}>{q.title}</span>
                <span>
                  {q.done}/{q.total} · {pct}%
                </span>
              </div>
              <ProgressBar value={pct} variant={q.theme} />
            </div>
          );
        })}
      </section>

      {recentlyCompleted.length > 0 && (
        <section className={styles.card}>
          <h3 className={styles.card__heading}>Последние изученные темы</h3>
          <ul className={styles.recentList}>
            {recentlyCompleted.map((topic) => (
              <li key={topic.id} className={styles.recentList__item}>
                <svg
                  className={styles.recentList__icon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{topic.title}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {done === 0 && (
        <div className={styles.empty}>
          <p className={styles.empty__text}>Ни одной темы ещё не отмечено.</p>
          <p className={styles.empty__hint}>
            Открой «Дорожную карту» и начни отмечать изученное.
          </p>
        </div>
      )}
    </div>
  );
}
