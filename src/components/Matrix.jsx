import { useState } from "react";
import { matrix, LEVELS } from "../data/matrix.js";
import styles from "./Matrix.module.scss";

export default function Matrix() {
  const [activeCategory, setActiveCategory] = useState("ts");
  const [activeLevel, setActiveLevel] = useState(null);

  const category = matrix.find((c) => c.id === activeCategory);

  const visibleLevels = activeLevel
    ? LEVELS.filter((l) => l.id === activeLevel)
    : LEVELS;

  const gridClass =
    visibleLevels.length === 4
      ? styles.matrix__grid
      : [styles.matrix__grid, styles["matrix__grid--single"]].join(" ");

  return (
    <div className={styles.matrix}>
      <header className={styles.matrix__header}>
        <h2 className={styles.matrix__title}>Матрица компетенций</h2>
        <p className={styles.matrix__desc}>
          Уровни от Junior до Lead. Сопоставляй с дорожной картой Q1–Q6 и
          отмечай пробелы.
        </p>
      </header>

      <div className={styles.matrix__tabs}>
        {matrix.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={[
              styles.matrix__tab,
              activeCategory === cat.id ? styles["matrix__tab--active"] : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div className={styles.matrix__levels}>
        <button
          type="button"
          onClick={() => setActiveLevel(null)}
          className={[
            styles.matrix__levelBtn,
            !activeLevel ? styles["matrix__levelBtn--filter"] : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          Все уровни
        </button>
        {LEVELS.map((l) => (
          <button
            key={l.id}
            type="button"
            onClick={() => setActiveLevel(activeLevel === l.id ? null : l.id)}
            className={[
              styles.matrix__levelBtn,
              activeLevel === l.id ? styles["matrix__levelBtn--active"] : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {l.label}
          </button>
        ))}
      </div>

      <div className={gridClass}>
        {visibleLevels.map((level) => {
          const skills = category?.levels[level.id] ?? [];
          return (
            <div
              key={level.id}
              className={[styles.levelCard, styles[`levelCard--${level.id}`]]
                .filter(Boolean)
                .join(" ")}
            >
              <div className={styles.levelCard__head}>
                <span className={styles.levelCard__dot} aria-hidden />
                <span className={styles.levelCard__name}>{level.label}</span>
                {level.id === "lead" && (
                  <span className={styles.levelCard__badge}>Цель</span>
                )}
              </div>
              <ul className={styles.levelCard__list}>
                {skills.map((skill) => (
                  <li key={skill} className={styles.levelCard__item}>
                    <span className={styles.levelCard__bullet} aria-hidden />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {!activeLevel && (
        <p className={styles.matrix__hint}>
          <span className={styles.matrix__hintStrong}>Как использовать:</span>{" "}
          выбери категорию → сравни Senior/Lead с тем, что знаешь → найди тему в
          дорожной карте → изучи и отметь прогресс.
        </p>
      )}
    </div>
  );
}
