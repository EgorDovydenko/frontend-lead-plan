export const TRACKS = {
  frontend: {
    label: "Frontend",
    color: "indigo",
    bg: "bg-indigo-100",
    text: "text-indigo-700",
    border: "border-indigo-200",
  },
  ai: {
    label: "AI",
    color: "violet",
    bg: "bg-violet-100",
    text: "text-violet-700",
    border: "border-violet-200",
  },
  pm: {
    label: "PM",
    color: "emerald",
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    border: "border-emerald-200",
  },
};

export const roadmap = [
  {
    id: "q1",
    title: "Q1: Ядро и Глубина",
    period: "Месяцы 1–3",
    tagline:
      "Укрепить фундамент. Понять механизмы изнутри, а не только уметь использовать.",
    colorClass: "border-indigo-400",
    headerBg: "bg-indigo-50",
    headerText: "text-indigo-800",
    badgeBg: "bg-indigo-100",
    badgeText: "text-indigo-700",
    topics: [
      // --- FRONTEND ---
      {
        id: "q1-fe-1",
        track: "frontend",
        title: "TypeScript: Generics & Utility Types",
        detail:
          "Partial<T>, Required<T>, Pick<T,K>, Omit<T,K>, Record<K,V>, ReturnType<F>, Parameters<F>. Задача: написать 3 типа для реальных сценариев — типизация API-ответа, утилита для формы, кастомный хук. Цель — проектировать типизацию, которую другие смогут использовать.",
      },
      {
        id: "q1-fe-2",
        track: "frontend",
        title: "TypeScript: Conditional & Mapped Types",
        detail:
          "infer, Exclude<T,U>, Extract<T,U>, NonNullable, template literal types (${string}). Практика: создать utility type, который вытаскивает все ключи объекта со строковыми значениями. Понять разницу между mapped type и conditional type.",
      },
      {
        id: "q1-fe-3",
        track: "frontend",
        title: "JavaScript: Event Loop в деталях",
        detail:
          "Microtask queue (Promise, queueMicrotask) vs Macrotask queue (setTimeout, setInterval, requestAnimationFrame). Написать 5 примеров кода и ПРЕДСКАЗАТЬ порядок вывода ДО запуска. Проверить в браузере. Объяснить почему Promise выполняется раньше setTimeout.",
      },
      {
        id: "q1-fe-4",
        track: "frontend",
        title: "Design Patterns на TypeScript",
        detail:
          "Observer (EventEmitter), Factory (конфигурируемые сущности), Strategy (разные алгоритмы/реализации), Singleton (глобальный Store). Найти где эти паттерны уже живут в React-экосистеме: Context = Observer, createElement = Factory и т.д.",
      },
      {
        id: "q1-fe-5",
        track: "frontend",
        title: "React Fiber & Reconciliation",
        detail:
          "Fiber-дерево, work loop, lanes, priority. Как React решает что перерендерить. React DevTools Profiler: найти компонент с реальной проблемой производительности. Задача: написать компонент который рендерится лишние 100 раз и оптимизировать до минимума.",
      },
      {
        id: "q1-fe-6",
        track: "frontend",
        title: "React Мемоизация: когда нужна, когда мешает",
        detail:
          "useMemo — стоимость вычислений должна превышать стоимость мемоизации. useCallback — нужен только при передаче функций как пропсов в оптимизированные (React.memo) дочерние компоненты. Написать тест: компонент БЕЗ мемоизации vs С мемоизацией в Profiler.",
      },
      {
        id: "q1-fe-7",
        track: "frontend",
        title: "Custom Hooks: библиотека для проекта",
        detail:
          "Написать и задокументировать в Notion: useDebounce (поиск), useLocalStorage (персистентность), useOnClickOutside (закрытие модалки), useFetch (loading/error/data), useWindowSize (адаптивность). Каждый хук — с примером использования.",
      },
      {
        id: "q1-fe-8",
        track: "frontend",
        title: "State Management: Zustand vs Redux Toolkit",
        detail:
          "Создать одинаковый store на обоих: пользователь + настройки + уведомления. Сравнить: объём кода, читаемость, расширяемость, DevTools. Выработать критерии выбора для команды. Записать решение в Notion как Architecture Decision Record (ADR).",
      },
      {
        id: "q1-fe-9",
        track: "frontend",
        title: "Feature Sliced Design (FSD)",
        detail:
          "Слои: app → pages → widgets → features → entities → shared. Правила импортов: вышележащий слой импортирует из нижележащего, не наоборот. Нарисовать в Notion структуру текущего рабочего проекта по FSD — хотя бы концептуально.",
      },
      {
        id: "q1-fe-10",
        track: "frontend",
        title: "ESLint: кастомная конфигурация для команды",
        detail:
          "Плагины: @typescript-eslint, eslint-plugin-react, eslint-plugin-import. Написать eslint.config.js с 10+ правилами и обоснованием каждого. Добавить Prettier интеграцию. Цель: конфиг, готовый для использования в команде.",
      },
      // --- AI ---
      {
        id: "q1-ai-1",
        track: "ai",
        title: "GitHub Copilot: эффективное автодополнение",
        detail:
          'Комментарии как подсказки: "// функция принимает массив users и возвращает...". Цикл: написал комментарий → принял предложение Copilot → ПРОЧИТАЛ и ПОНЯЛ что принял → улучшил. Золотое правило: никогда не принимать код Copilot не читая его.',
      },
      {
        id: "q1-ai-2",
        track: "ai",
        title: "Copilot Chat: шаблоны запросов",
        detail:
          'Создать раздел "AI промпты" в Notion. Добавить: "объясни этот код пошагово", "найди потенциальные баги", "как рефакторить с паттерном X", "какие edge cases я упустил". Использовать каждую среду как ментора.',
      },
      {
        id: "q1-ai-3",
        track: "ai",
        title: "AI как TypeScript-ментор",
        detail:
          'ChatGPT/Claude: "объясни conditional types на 3 примерах разной сложности", "придумай задачу на infer, дай мне решить самому, потом проверь". Использовать AI как Сократа — пусть задаёт вопросы и ведёт к пониманию, а не просто объясняет.',
      },
      // --- PM ---
      {
        id: "q1-pm-1",
        track: "pm",
        title: "Технический долг: документирование и бизнес-кейс",
        detail:
          'Создать tech debt backlog в Notion с колонками: проблема, риск (High/Med/Low), усилия (story points), бизнес-импакт. Написать 1 RFC: "Предлагаю перейти с X на Y, потому что...". Обосновать на языке бизнеса: снижение рисков, скорость доставки.',
      },
      {
        id: "q1-pm-2",
        track: "pm",
        title: "Декомпозиция задач уровня Lead",
        detail:
          "Взять реальную техническую задачу (например, переход на FSD архитектуру). Разбить: эпики (месяц) → пользовательские истории (спринт) → технические задачи (день). Оценить в story points. Это упражнение на Lead-мышление.",
      },
      {
        id: "q1-pm-3",
        track: "pm",
        title: "Notion: структура базы знаний",
        detail:
          'Создать в Notion: раздел "Q1: Ядро" → подстраницы по каждой теме → шаблон конспекта (тема, дата, ключевые выводы, примеры кода, вопросы для повторения). Систематизация знаний — это уже работа над собой.',
      },
    ],
  },

  {
    id: "q2",
    title: "Q2: Next.js & Производительность",
    period: "Месяцы 4–6",
    tagline:
      "Стать экспертом в Next.js App Router. Измерять и улучшать производительность системно.",
    colorClass: "border-emerald-400",
    headerBg: "bg-emerald-50",
    headerText: "text-emerald-800",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-700",
    topics: [
      // --- FRONTEND ---
      {
        id: "q2-fe-1",
        track: "frontend",
        title: "Next.js App Router: полная архитектура",
        detail:
          "layouts, templates, loading.tsx, error.tsx, not-found.tsx. Разница между Nested Layouts и Parallel Routes. Задача: перенести одну страницу из Pages Router в App Router в тестовом проекте. Понять зачем нужен каждый специальный файл.",
      },
      {
        id: "q2-fe-2",
        track: "frontend",
        title: "Server Components vs Client Components",
        detail:
          '"use client" — когда нужно и когда избыточно. Граница сервера/клиента: как данные передаются от SC к CC. Правило: SC по умолчанию, CC только для интерактивности (хуки, события). Написать страницу только с SC и добавить CC туда где нужен useState.',
      },
      {
        id: "q2-fe-3",
        track: "frontend",
        title: "Caching стратегии в Next.js",
        detail:
          "Data Cache (fetch + revalidate), Full Route Cache, Router Cache, Request Memoization. Создать схему в Notion: какой cache где работает. Задача: найти в проекте где добавить revalidation и где cache может сломать свежесть данных.",
      },
      {
        id: "q2-fe-4",
        track: "frontend",
        title: "Streaming и Suspense",
        detail:
          "<Suspense> + loading.tsx для Progressive Rendering. Как Suspense позволяет отправить HTML пользователю по частям. Написать страницу с несколькими Suspense boundaries разного приоритета. Проверить в Network вкладке как данные приходят.",
      },
      {
        id: "q2-fe-5",
        track: "frontend",
        title: "TanStack Query: продвинутые паттерны",
        detail:
          "useInfiniteQuery (бесконечный список), optimistic updates (мгновенный UI до ответа сервера), prefetching (загрузить следующую страницу заранее), staleTime vs gcTime. Задача: реализовать paginated список с prefetch следующей страницы.",
      },
      {
        id: "q2-fe-6",
        track: "frontend",
        title: "Core Web Vitals: измерение и улучшение",
        detail:
          "LCP (Largest Contentful Paint < 2.5s), CLS (Cumulative Layout Shift < 0.1), INP (Interaction to Next Paint < 200ms). Инструменты: Lighthouse, Chrome DevTools Performance, WebPageTest. Запустить на реальном проекте. Составить топ-5 улучшений с приоритетами.",
      },
      {
        id: "q2-fe-7",
        track: "frontend",
        title: "Оптимизация бандла",
        detail:
          "Code splitting (dynamic import()), Tree shaking (sideEffects в package.json), Bundle Analyzer (vite-bundle-visualizer). Задача: уменьшить Initial Bundle на 20% в тестовом проекте. Показать до/после в скриншотах в Notion.",
      },
      {
        id: "q2-fe-8",
        track: "frontend",
        title: "next/image и next/font оптимизация",
        detail:
          "Автоматическая оптимизация: srcset, WebP/AVIF, lazy loading, blur placeholder, priority. Font optimization: исключение FOUT, subsetting. Пройтись по всем img тегам в проекте и заменить на <Image>. Измерить изменение LCP.",
      },
      {
        id: "q2-fe-9",
        track: "frontend",
        title: "API Routes и Middleware в Next.js",
        detail:
          "Route Handlers (route.ts): обработка CORS, базовая аутентификация. Middleware: matcher для маршрутов, редиректы, защита приватных страниц. Написать middleware, который проверяет наличие токена и редиректит на /login.",
      },
      {
        id: "q2-fe-10",
        track: "frontend",
        title: "OpenAPI: генерация TypeScript типов",
        detail:
          'Swagger/OpenAPI 3.0 структура. Инструмент openapi-typescript: генерация типов из спецификации бэкенда автоматически. Цель: не писать типы для API вручную. Настроить npm script: "npm run api:types" → генерирует src/types/api.ts.',
      },
      // --- AI ---
      {
        id: "q2-ai-1",
        track: "ai",
        title: "Copilot Chat для архитектурных решений",
        detail:
          'Промпт: "Проектирую страницу с этими требованиями [описание]. Предложи разбивку на Server/Client компоненты с обоснованием." Критически оценивать: AI не знает контекст бизнеса. Его ответ — отправная точка, не готовое решение.',
      },
      {
        id: "q2-ai-2",
        track: "ai",
        title: "AI-генерация тестов с ревью",
        detail:
          "Сгенерировать через Copilot тест для компонента. Проверить: покрывает ли edge cases, проверяет ли accessibility, нет ли хрупких селекторов. Добавить вручную 2-3 теста, которые AI упустил. Цель: понять как думать о покрытии.",
      },
      {
        id: "q2-ai-3",
        track: "ai",
        title: "AI для анализа Web Vitals",
        detail:
          'Скинуть в ChatGPT/Claude результаты Lighthouse. Запрос: "Вот мои показатели [данные]. Предложи конкретные шаги улучшения в порядке ROI (эффект / усилия)." Проверить советы на практике. Записать что сработало.',
      },
      // --- PM ---
      {
        id: "q2-pm-1",
        track: "pm",
        title: "API контракты и cross-team коммуникация",
        detail:
          "Шаблон API contract: endpoint, method, request body, response schema, error codes, SLA. Практика: описать 3 реальных API эндпоинта по этому шаблону. Обсудить с бэкенд-разработчиком. Это основа для OpenAPI спецификации.",
      },
      {
        id: "q2-pm-2",
        track: "pm",
        title: "Написание технических спецификаций (Tech Spec)",
        detail:
          "Структура: бизнес-проблема → техническое решение → альтернативы которые рассматривались → риски и митигация → план реализации → метрики успеха. Написать 1 Tech Spec на реальную или гипотетическую задачу из Q2.",
      },
      {
        id: "q2-pm-3",
        track: "pm",
        title: "Протоколы взаимодействия между командами",
        detail:
          'Как лид фронтенда работает с: Backend (API first, контракты), DevOps (пайплайны, деплой стратегия), Design (Design System handoff, Figma tokens). Написать в Notion: "Протоколы взаимодействия" — 1 страница с конкретными правилами.',
      },
    ],
  },

  {
    id: "q3",
    title: "Q3: Инфраструктура & Качество",
    period: "Месяцы 7–9",
    tagline:
      "Выстроить культуру качества. CI/CD, тестирование и Design System — основа масштабируемой команды.",
    colorClass: "border-amber-400",
    headerBg: "bg-amber-50",
    headerText: "text-amber-800",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-700",
    topics: [
      // --- FRONTEND ---
      {
        id: "q3-fe-1",
        track: "frontend",
        title: "GitHub Actions: полный пайплайн фронтенда",
        detail:
          "Написать workflow: Lint → TypeScript check → Unit tests → Build → Deploy (Vercel/GitHub Pages). Добавить: кэширование node_modules (cache action), параллельные шаги (jobs), уведомление при падении. Задача: пайплайн завершается < 3 минут.",
      },
      {
        id: "q3-fe-2",
        track: "frontend",
        title: "React Testing Library: продвинутые паттерны",
        detail:
          "Тестирование async компонентов (waitFor, findBy*), кастомных хуков (renderHook), user-event vs fireEvent (всегда user-event). Написать тесты для 3 компонентов разной сложности: форма, список с загрузкой, модальное окно.",
      },
      {
        id: "q3-fe-3",
        track: "frontend",
        title: "E2E тестирование с Playwright",
        detail:
          "Page Object Model: изоляция логики страницы. Fixtures для авторизации. Параллельный запуск в CI. Написать 3 user journey теста: регистрация, основной сценарий, edge case. Запускать только на main ветке, не на каждом PR.",
      },
      {
        id: "q3-fe-4",
        track: "frontend",
        title: "Стратегия тестового покрытия",
        detail:
          'Тестовая пирамида: ~70% unit/integration + ~20% component + ~10% e2e. Coverage отчёт Jest (--coverage). Выработать правило для Notion: "Что тестируем обязательно, что можно пропустить". Это Team Standard документ.',
      },
      {
        id: "q3-fe-5",
        track: "frontend",
        title: "Storybook: живая документация компонентов",
        detail:
          "Написать stories для 5 компонентов: все состояния (default, loading, error, empty, disabled), Controls addon для интерактивного тестирования, interaction tests. Storybook становится основой Design System и онбординга.",
      },
      {
        id: "q3-fe-6",
        track: "frontend",
        title: "Design System: от токенов до организмов",
        detail:
          "Design tokens (цвета, типографика, отступы, радиусы) → Atoms (Button, Input, Badge, Text) → Molecules (Form, Card, Alert) → Organisms (Header, Sidebar, Table). Принципы: одна ответственность, composition over inheritance.",
      },
      {
        id: "q3-fe-7",
        track: "frontend",
        title: "CSS Architecture: масштабируемый Tailwind",
        detail:
          "@layer components для повторяемых паттернов. Кастомная тема в tailwind.config.js (colors, spacing, fonts). Class Variance Authority (CVA) для вариантов компонентов. Задача: Button с 5 вариантами (variant) и 3 размерами (size) через CVA.",
      },
      {
        id: "q3-fe-8",
        track: "frontend",
        title: "Docker для фронтенд сборки",
        detail:
          "Multi-stage Dockerfile: build stage (Node 20) + serve stage (Nginx alpine). .dockerignore. docker-compose для локальной разработки. Цель: уметь объяснить DevOps как упаковать приложение и самостоятельно проверить что сборка работает.",
      },
      {
        id: "q3-fe-9",
        track: "frontend",
        title: "Lighthouse CI: автоматический контроль качества",
        detail:
          "Настройка lighthouserc.js с порогами: LCP < 2.5s, CLS < 0.1, Performance > 80. Добавить в GitHub Actions workflow. Запускать при каждом PR. Блокировать merge при падении порогов.",
      },
      {
        id: "q3-fe-10",
        track: "frontend",
        title: "Bundle Analysis: регулярный аудит",
        detail:
          "vite-bundle-visualizer: найти дубликаты, large dependencies, неоптимальные chunks. Установить bundle budget в CI: initial JS < 200kb gzipped. Настроить bundlesize или size-limit как GitHub check.",
      },
      // --- AI ---
      {
        id: "q3-ai-1",
        track: "ai",
        title: "AI для аудита тестового покрытия",
        detail:
          'Промпт: "Вот мой компонент [код] и тест [код]. Какие edge cases и сценарии ошибок я упустил?" Использовать AI как чеклист, а не как автора тестов. Всегда добавлять минимум 2 теста вручную, которые AI не предложил.',
      },
      {
        id: "q3-ai-2",
        track: "ai",
        title: "AI для оптимизации CI/CD",
        detail:
          'Промпт: "Вот мой GitHub Actions workflow [yaml]. Как ускорить? Что можно распараллелить? Где избыточные шаги?" Проверить советы, замерить время до/после. Записать в Notion.',
      },
      {
        id: "q3-ai-3",
        track: "ai",
        title: "AI для генерации документации компонентов",
        detail:
          'Copilot: генерация JSDoc из кода. Промпт: "Сгенерируй README для этого компонента [код]: props table, usage examples, accessibility notes, known limitations." Всегда проверять и дополнять вручную.',
      },
      // --- PM ---
      {
        id: "q3-pm-1",
        track: "pm",
        title: "OKR/KPI для фронтенд команды",
        detail:
          "Написать 3 OKR для гипотетической фронтенд команды. Формат: Objective (вдохновляющая цель) + 3 Key Results (измеримые). Метрики: lead time (скорость), bug rate (качество), Core Web Vitals (производительность).",
      },
      {
        id: "q3-pm-2",
        track: "pm",
        title: "Планирование инфраструктуры и бюджет",
        detail:
          "Научиться считать TCO: Vercel Pro vs Netlify vs собственный сервер (EC2 + Nginx). Составить в Notion сравнительную таблицу с учётом масштаба (trафик, команда). Навык: обосновать инфраструктурные расходы перед бизнесом.",
      },
      {
        id: "q3-pm-3",
        track: "pm",
        title: "Политика релизов и управление рисками",
        detail:
          'Определить Release Strategy: feature flags (самописный через env или LaunchDarkly), canary deploys через Vercel, rollback план. Написать в Notion: "Стандарт релизов команды" — 1 страница с конкретными шагами и критериями rollback.',
      },
    ],
  },

  {
    id: "q4",
    title: "Q4: Стратегия Lead",
    period: "Месяцы 10–12",
    tagline:
      "От разработчика к лидеру. Архитектура, менторинг, технологическое видение.",
    colorClass: "border-rose-400",
    headerBg: "bg-rose-50",
    headerText: "text-rose-800",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-700",
    topics: [
      // --- FRONTEND ---
      {
        id: "q4-fe-1",
        track: "frontend",
        title: "Monorepo с Turborepo",
        detail:
          "Packages: @company/ui (Design System), @company/config (ESLint, TS), @company/web (приложение). Pipeline с кэшированием: build, test, lint. Задача: перенести проект в monorepo структуру в тестовой ветке. Понять когда monorepo полезен, а когда избыточен.",
      },
      {
        id: "q4-fe-2",
        track: "frontend",
        title: "Микрофронтенды: когда нужны (и не нужны)",
        detail:
          'Module Federation (Vite plugin). Критерии применения: 3+ независимых команды, разные release циклы, изоляция legacy. Написать ADR: "Микрофронтенды в нашем контексте — решение и обоснование". Большинству проектов это не нужно.',
      },
      {
        id: "q4-fe-3",
        track: "frontend",
        title: "Architecture Decision Records (ADR)",
        detail:
          'Формат ADR: контекст → принятое решение → рассмотренные альтернативы → последствия (плюсы/минусы). Написать 3 ADR на решения Q1-Q3 (State management, тест-стратегия, CI pipeline). Создать в Notion раздел "Архитектурные решения".',
      },
      {
        id: "q4-fe-4",
        track: "frontend",
        title: "Tech Radar для фронтенд стека",
        detail:
          "Quadrants: Languages/Frameworks, Tools, Techniques, Platforms. Rings: Adopt (используем), Trial (изучаем), Assess (оцениваем), Hold (отказываемся). Составить Tech Radar из 15-20 позиций. Использовать как инструмент обсуждения с командой.",
      },
      {
        id: "q4-fe-5",
        track: "frontend",
        title: "Technical Roadmap: создание и презентация",
        detail:
          "Горизонт 6-12 месяцев. Инициативы по категориям: Infrastructure, DX, Performance, New Features. Зависимости между инициативами. Формат: Notion таблица + временная шкала. Задача: презентовать коллеге на 10 минут и получить обратную связь.",
      },
      {
        id: "q4-fe-6",
        track: "frontend",
        title: "Developer Experience (DX): стандарты команды",
        detail:
          "Измерить: Time to First Commit для нового разработчика. Улучшить: документация setup (README), scaffold CLI (plop.js), шаблоны PR (что обязательно указывать), автоматизация рутины. Написать DX Manual — 2 страницы в Notion.",
      },
      {
        id: "q4-fe-7",
        track: "frontend",
        title: "Code Review культура",
        detail:
          'Чеклист ревьюера: correctness, performance, security, readability, tests, accessibility. Правило конструктивной критики: не "это неправильно", а "предлагаю X, потому что Y, вот пример". Написать "Code Review Guidelines" для команды.',
      },
      {
        id: "q4-fe-8",
        track: "frontend",
        title: "Процесс онбординга разработчика",
        detail:
          "Day 1 → Week 1 → Month 1 план для нового фронтендера. Что должен знать/сделать к концу испытательного срока. Написать онбординг-документ на основе матрицы компетенций (Junior уровень). Это сэкономит времяа для всей команды.",
      },
      {
        id: "q4-fe-9",
        track: "frontend",
        title: "Performance SLO и мониторинг",
        detail:
          "SLO для фронтенда: LCP < 2.5s в 90% сессий, Error Rate < 0.1%, JS Exception Rate. Инструменты: Sentry (ошибки + performance), Vercel Analytics (реальные пользователи). Настроить алёрты при выходе за пороги.",
      },
      {
        id: "q4-fe-10",
        track: "frontend",
        title: "Публичное знание: написать техническую статью",
        detail:
          "Написать 1 статью по теме из Q1-Q4 на Habr или dev.to. Объяснить сложное просто — лучший способ проверить глубину понимания. Это также формирует профессиональный бренд как эксперта. Выбрать тему, которую объяснял коллегам.",
      },
      // --- AI ---
      {
        id: "q4-ai-1",
        track: "ai",
        title: "AI для технического менторинга",
        detail:
          'Создать систему промптов для обучения: "Объясни [концепцию] как будто тебе 22 года и год опыта". Использовать для создания материалов онбординга. Проверить: понятно ли это реальному джуниору (попросить кого-то прочитать).',
      },
      {
        id: "q4-ai-2",
        track: "ai",
        title: "AI для документации архитектуры",
        detail:
          'Промпт: "Вот структура проекта [файловое дерево + описание ключевых решений]. Сгенерируй Architecture Overview документ." Редактировать, дополнять, исправлять. Цель: не тратить 4 часа на то, что AI делает за 20 минут.',
      },
      {
        id: "q4-ai-3",
        track: "ai",
        title: "AI Usage Policy для команды",
        detail:
          "Написать политику (1 страница в Notion): что разрешено с Copilot (boilerplate, тесты), что требует ревью (архитектура, бизнес-логика), что под запретом без проверки (security, auth, payment). Это часть DX Manual.",
      },
      // --- PM ---
      {
        id: "q4-pm-1",
        track: "pm",
        title: "Презентация технических решений стейкхолдерам",
        detail:
          "Структура: бизнес-проблема → техническое решение (без жаргона) → риски → временные рамки → инвестиции → ожидаемый результат. Подготовить 1-2 страницы Notion для любого решения Q4. Представить нетехническому коллеге.",
      },
      {
        id: "q4-pm-2",
        track: "pm",
        title: "Менторинг план для разработчика",
        detail:
          "Написать ИПР (индивидуальный план развития) для гипотетического junior: цели на 3/6/12 месяцев, ресурсы, временные рамки, метрики. Провести mock 1-on-1 с коллегой. Записать выводы. Менторинг — ключевой навык лида.",
      },
      {
        id: "q4-pm-3",
        track: "pm",
        title: "Техническое видение: документ",
        detail:
          '"Где мы хотим быть как фронтенд команда через 2 года." Написать Vision Document: ценности → принципы → цели → ключевые инициативы. Максимум 2 страницы. Это будущий материал для собеседований и переговоров о Lead позиции.',
      },
    ],
  },
];
