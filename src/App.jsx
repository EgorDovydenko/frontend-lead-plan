import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Matrix from "./components/Matrix.jsx";
import Progress from "./components/Progress.jsx";
import { useProgress } from "./hooks/useProgress.js";
import styles from "./App.module.scss";

export default function App() {
  const [page, setPage] = useState("roadmap");
  const { toggle, isCompleted, stats } = useProgress();

  const pages = {
    roadmap: <Roadmap isCompleted={isCompleted} onToggle={toggle} />,
    matrix: <Matrix />,
    progress: <Progress stats={stats} isCompleted={isCompleted} />,
  };

  return (
    <div className={styles.app}>
      <Sidebar active={page} onNavigate={setPage} />
      <main className={styles.app__main}>{pages[page]}</main>
    </div>
  );
}
