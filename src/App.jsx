import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Matrix from "./components/Matrix.jsx";
import Routine from "./components/Routine.jsx";
import Progress from "./components/Progress.jsx";
import { useProgress } from "./hooks/useProgress.js";

export default function App() {
  const [page, setPage] = useState("roadmap");
  const { toggle, isCompleted, stats } = useProgress();

  const pages = {
    roadmap: <Roadmap isCompleted={isCompleted} onToggle={toggle} />,
    matrix: <Matrix />,
    routine: <Routine />,
    progress: <Progress stats={stats} isCompleted={isCompleted} />,
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-slate-900">
      <Sidebar active={page} onNavigate={setPage} />
      <main className="flex-1 p-5 md:p-8 overflow-y-auto">{pages[page]}</main>
    </div>
  );
}
