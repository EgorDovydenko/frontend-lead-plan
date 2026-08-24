import styles from "./Sidebar.module.scss";

export default function Sidebar({ active, onNavigate }) {
  const links = [
    { id: "roadmap", icon: "🗺️", label: "Дорожная карта" },
    { id: "matrix", icon: "📊", label: "Матрица компетенций" },
    { id: "progress", icon: "📈", label: "Мой прогресс" },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__brand}>
        <h1 className={styles.sidebar__title}>
          Lead<span className={styles.sidebar__titleAccent}>Track</span>
        </h1>
        <p className={styles.sidebar__subtitle}>Frontend Lead · дорожная карта</p>
      </div>

      <nav className={styles.sidebar__nav}>
        {links.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => onNavigate(link.id)}
            className={[
              styles.sidebar__link,
              active === link.id ? styles["sidebar__link--active"] : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span aria-hidden>{link.icon}</span>
            <span>{link.label}</span>
          </button>
        ))}
      </nav>

      <div className={styles.sidebar__footer}>
        <p>Фокус:</p>
        <p>React · Next.js · TypeScript</p>
        <p>Качество · Perf · A11y</p>
      </div>
    </aside>
  );
}
