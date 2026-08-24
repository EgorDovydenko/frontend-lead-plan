import { useState } from "react";
import { roadmap } from "../data/roadmap.js";
import styles from "./Roadmap.module.scss";

function TopicItem({ topic, isCompleted, onToggle }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className={[
        styles.topic,
        isCompleted ? styles["topic--done"] : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.topic__row}>
        <button
          type="button"
          onClick={() => onToggle(topic.id)}
          className={[
            styles.topic__check,
            isCompleted ? styles["topic__check--done"] : "",
          ]
            .filter(Boolean)
            .join(" ")}
          title={
            isCompleted ? "Отметить как не изученное" : "Отметить как изученное"
          }
          aria-label={
            isCompleted ? "Снять отметку «изучено»" : "Отметить как изученное"
          }
        >
          {isCompleted && (
            <svg
              className={styles.topic__checkIcon}
              fill="none"
              viewBox="0 0 12 12"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 6l3 3 5-5"
              />
            </svg>
          )}
        </button>

        <div className={styles.topic__main}>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className={styles.topic__toggle}
            aria-expanded={expanded}
          >
            <span
              className={[
                styles.topic__title,
                isCompleted ? styles["topic__title--done"] : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {topic.title}
            </span>
            <svg
              className={[
                styles.topic__chevron,
                expanded ? styles["topic__chevron--open"] : "",
              ]
                .filter(Boolean)
                .join(" ")}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
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

      {expanded && (
        <p className={styles.topic__detail}>{topic.detail}</p>
      )}
    </article>
  );
}

export default function Roadmap({ isCompleted, onToggle }) {
  const [expandedQ, setExpandedQ] = useState("q1");
  const totalTopics = roadmap.flatMap((q) => q.topics).length;

  return (
    <div className={styles.roadmap}>
      <header className={styles.roadmap__header}>
        <h2 className={styles.roadmap__title}>Дорожная карта Frontend Lead</h2>
        <p className={styles.roadmap__desc}>
          {totalTopics} тем без жёстких дедлайнов. Отмечай изученное — прогресс
          сохраняется в браузере. Раскрой тему для деталей; текст задания можно
          выделять и копировать.
        </p>
      </header>

      <div className={styles.roadmap__list}>
        {roadmap.map((quarter) => {
          const doneCount = quarter.topics.filter((t) =>
            isCompleted(t.id),
          ).length;
          const total = quarter.topics.length;
          const pct = total ? Math.round((doneCount / total) * 100) : 0;
          const isOpen = expandedQ === quarter.id;

          return (
            <section
              key={quarter.id}
              className={[styles.quarter, styles[`quarter--${quarter.theme}`]]
                .filter(Boolean)
                .join(" ")}
            >
              <button
                type="button"
                onClick={() => setExpandedQ(isOpen ? null : quarter.id)}
                className={styles.quarter__header}
              >
                <div className={styles.quarter__headerMain}>
                  <div className={styles.quarter__title}>{quarter.title}</div>
                  <p className={styles.quarter__tagline}>{quarter.tagline}</p>
                </div>
                <div className={styles.quarter__meta}>
                  <div className={styles.quarter__stats}>
                    <div className={styles.quarter__count}>
                      {doneCount}/{total}
                    </div>
                    <div className={styles.quarter__pct}>{pct}%</div>
                  </div>
                  <div className={styles.quarter__bar}>
                    <div
                      className={styles.quarter__barFill}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <svg
                    className={[
                      styles.quarter__chevron,
                      isOpen ? styles["quarter__chevron--open"] : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {isOpen && (
                <div className={styles.quarter__body}>
                  {quarter.topics.map((topic) => (
                    <TopicItem
                      key={topic.id}
                      topic={topic}
                      isCompleted={isCompleted(topic.id)}
                      onToggle={onToggle}
                    />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
