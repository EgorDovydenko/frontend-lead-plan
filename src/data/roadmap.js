export const roadmap = [
  {
    id: "q1",
    theme: "q1",
    title: "Q1: Ядро и глубина",
    tagline:
      "Укрепить фундамент. Понять механизмы изнутри, а не только уметь использовать.",
    topics: [
      {
        id: "q1-fe-1",
        title: "TypeScript: Generics & Utility Types",
        detail:
          "Partial<T>, Required<T>, Pick<T,K>, Omit<T,K>, Record<K,V>, ReturnType<F>, Parameters<F>. Задача: написать 3 типа для реальных сценариев — типизация API-ответа, утилита для формы, кастомный хук. Цель — проектировать типизацию, которую другие смогут использовать.",
      },
      {
        id: "q1-fe-2",
        title: "TypeScript: Conditional & Mapped Types",
        detail:
          "infer, Exclude<T,U>, Extract<T,U>, NonNullable, template literal types (${string}). Практика: создать utility type, который вытаскивает все ключи объекта со строковыми значениями. Понять разницу между mapped type и conditional type.",
      },
      {
        id: "q1-fe-3",
        title: "JavaScript: Event Loop в деталях",
        detail:
          "Microtask queue (Promise, queueMicrotask) vs Macrotask queue (setTimeout, setInterval, requestAnimationFrame). Написать 5 примеров кода и ПРЕДСКАЗАТЬ порядок вывода ДО запуска. Проверить в браузере. Объяснить почему Promise выполняется раньше setTimeout.",
      },
      {
        id: "q1-fe-4",
        title: "Design Patterns на TypeScript",
        detail:
          "Observer (EventEmitter), Factory (конфигурируемые сущности), Strategy (разные алгоритмы/реализации), Singleton (глобальный Store). Найти где эти паттерны уже живут в React-экосистеме: Context = Observer, createElement = Factory и т.д.",
      },
      {
        id: "q1-fe-5",
        title: "React Fiber & Reconciliation",
        detail:
          "Fiber-дерево, work loop, lanes, priority. Как React решает что перерендерить. React DevTools Profiler: найти компонент с реальной проблемой производительности. Задача: написать компонент который рендерится лишние 100 раз и оптимизировать до минимума.",
      },
      {
        id: "q1-fe-6",
        title: "React Мемоизация: когда нужна, когда мешает",
        detail:
          "useMemo — стоимость вычислений должна превышать стоимость мемоизации. useCallback — нужен только при передаче функций как пропсов в оптимизированные (React.memo) дочерние компоненты. Написать тест: компонент БЕЗ мемоизации vs С мемоизацией в Profiler.",
      },
      {
        id: "q1-fe-7",
        title: "Custom Hooks: библиотека для проекта",
        detail:
          "Написать и задокументировать: useDebounce (поиск), useLocalStorage (персистентность), useOnClickOutside (закрытие модалки), useFetch (loading/error/data), useWindowSize (адаптивность). Каждый хук — с примером использования.",
      },
      {
        id: "q1-fe-8",
        title: "State Management: Zustand vs Redux Toolkit",
        detail:
          "Создать одинаковый store на обоих: пользователь + настройки + уведомления. Сравнить: объём кода, читаемость, расширяемость, DevTools. Выработать критерии выбора для команды. Записать решение как Architecture Decision Record (ADR).",
      },
      {
        id: "q1-fe-9",
        title: "Frontend Security: XSS, CSP и sanitization",
        detail:
          "XSS: reflected, stored, DOM-based — как возникает в React (dangerouslySetInnerHTML, небезопасные URL). CSP: default-src, script-src, зачем nonce/hash. Sanitization: DOMPurify для HTML из API. Задача: найти в проекте 2 потенциально опасных места и задокументировать митигацию.",
      },
      {
        id: "q1-fe-10",
        title: "ESLint: кастомная конфигурация для команды",
        detail:
          "Плагины: @typescript-eslint, eslint-plugin-react, eslint-plugin-import. Написать eslint.config.js с 10+ правилами и обоснованием каждого. Добавить Prettier интеграцию. Цель: конфиг, готовый для использования в команде.",
      },
      {
        id: "q1-fe-11",
        title: "Сборка: Vite vs Webpack — что происходит под капотом",
        detail:
          "ESM, HMR, tree-shaking, dependency pre-bundling. Прочитать vite.config и объяснить каждый значимый плагин. Задача: добавить alias, env variables, и splitChunks для vendor — измерить влияние на bundle.",
      },
    ],
  },
  {
    id: "q2",
    theme: "q2",
    title: "Q2: Next.js и производительность",
    tagline:
      "Экспертиза в App Router. Измерять и улучшать производительность системно.",
    topics: [
      {
        id: "q2-fe-1",
        title: "Next.js App Router: полная архитектура",
        detail:
          "layouts, templates, loading.tsx, error.tsx, not-found.tsx. Разница между Nested Layouts и Parallel Routes. Задача: перенести одну страницу из Pages Router в App Router в тестовом проекте. Понять зачем нужен каждый специальный файл.",
      },
      {
        id: "q2-fe-2",
        title: "Server Components vs Client Components",
        detail:
          '"use client" — когда нужно и когда избыточно. Граница сервера/клиента: как данные передаются от SC к CC. Правило: SC по умолчанию, CC только для интерактивности (хуки, события). Написать страницу только с SC и добавить CC туда где нужен useState.',
      },
      {
        id: "q2-fe-3",
        title: "Caching стратегии в Next.js",
        detail:
          "Data Cache (fetch + revalidate), Full Route Cache, Router Cache, Request Memoization. Создать схему: какой cache где работает. Задача: найти в проекте где добавить revalidation и где cache может сломать свежесть данных.",
      },
      {
        id: "q2-fe-4",
        title: "Streaming и Suspense",
        detail:
          "<Suspense> + loading.tsx для Progressive Rendering. Как Suspense позволяет отправить HTML пользователю по частям. Написать страницу с несколькими Suspense boundaries разного приоритета. Проверить в Network вкладке как данные приходят.",
      },
      {
        id: "q2-fe-5",
        title: "TanStack Query и SWR: продвинутые паттерны",
        detail:
          "useInfiniteQuery, optimistic updates, prefetching, staleTime vs gcTime. SWR: mutate, fallback data, middleware. Задача: paginated список с prefetch следующей страницы. Критерии выбора между библиотеками для команды.",
      },
      {
        id: "q2-fe-6",
        title: "Core Web Vitals: измерение и улучшение",
        detail:
          "LCP (Largest Contentful Paint < 2.5s), CLS (Cumulative Layout Shift < 0.1), INP (Interaction to Next Paint < 200ms). Инструменты: Lighthouse, Chrome DevTools Performance, WebPageTest. Запустить на реальном проекте. Составить топ-5 улучшений с приоритетами.",
      },
      {
        id: "q2-fe-7",
        title: "Оптимизация бандла",
        detail:
          "Code splitting (dynamic import()), Tree shaking (sideEffects в package.json), Bundle Analyzer (vite-bundle-visualizer). Задача: уменьшить Initial Bundle на 20% в тестовом проекте. Показать до/после.",
      },
      {
        id: "q2-fe-8",
        title: "next/image и next/font оптимизация",
        detail:
          "Автоматическая оптимизация: srcset, WebP/AVIF, lazy loading, blur placeholder, priority. Font optimization: исключение FOUT, subsetting. Пройтись по всем img тегам в проекте и заменить на <Image>. Измерить изменение LCP.",
      },
      {
        id: "q2-fe-9",
        title: "API Routes и Middleware в Next.js",
        detail:
          "Route Handlers (route.ts): обработка CORS, базовая аутентификация. Middleware: matcher для маршрутов, редиректы, защита приватных страниц. Написать middleware, который проверяет наличие токена и редиректит на /login.",
      },
      {
        id: "q2-fe-10",
        title: "OpenAPI: генерация TypeScript типов",
        detail:
          'Swagger/OpenAPI 3.0 структура. Инструмент openapi-typescript: генерация типов из спецификации бэкенда автоматически. Цель: не писать типы для API вручную. Настроить npm script: "npm run api:types" → генерирует src/types/api.ts.',
      },
      {
        id: "q2-fe-11",
        title: "Web Accessibility: WCAG 2.2 на практике",
        detail:
          "Семантика HTML, landmarks, focus management, skip links. ARIA только когда нативного элемента нет. Инструменты: axe DevTools, Lighthouse Accessibility, клавиатурная навигация без мыши. Задача: пройти 1 ключевой user flow и исправить 5 нарушений. Записать a11y-чеклист для PR.",
      },
      {
        id: "q2-fe-12",
        title: "React 19: Actions, use() и формы",
        detail:
          "useActionState, useFormStatus, Server Actions с progressive enhancement. Hook use() для промисов и контекста в render. Задача: форма с серверной валидацией без лишнего client JS. Сравнить с классическим подходом на Client Components.",
      },
    ],
  },
  {
    id: "q3",
    theme: "q3",
    title: "Q3: Инфраструктура и качество",
    tagline:
      "Культура качества: CI/CD, тестирование и Design System — основа масштабируемой команды.",
    topics: [
      {
        id: "q3-fe-1",
        title: "GitHub Actions: полный пайплайн фронтенда",
        detail:
          "Написать workflow: Lint → TypeScript check → Unit tests → Build → Deploy (Vercel/GitHub Pages). Добавить: кэширование node_modules (cache action), параллельные шаги (jobs), уведомление при падении. Задача: пайплайн завершается < 3 минут.",
      },
      {
        id: "q3-fe-2",
        title: "React Testing Library: продвинутые паттерны",
        detail:
          "Тестирование async компонентов (waitFor, findBy*), кастомных хуков (renderHook), user-event vs fireEvent (всегда user-event). Написать тесты для 3 компонентов разной сложности: форма, список с загрузкой, модальное окно.",
      },
      {
        id: "q3-fe-3",
        title: "E2E тестирование с Playwright",
        detail:
          "Page Object Model: изоляция логики страницы. Fixtures для авторизации. Параллельный запуск в CI. Написать 3 user journey теста: регистрация, основной сценарий, edge case. Запускать только на main ветке, не на каждом PR.",
      },
      {
        id: "q3-fe-4",
        title: "Стратегия тестового покрытия",
        detail:
          'Тестовая пирамида: ~70% unit/integration + ~20% component + ~10% e2e. Coverage отчёт Vitest (--coverage). Выработать правило: "Что тестируем обязательно, что можно пропустить". Это Team Standard документ.',
      },
      {
        id: "q3-fe-5",
        title: "Storybook: живая документация компонентов",
        detail:
          "Написать stories для 5 компонентов: все состояния (default, loading, error, empty, disabled), Controls addon для интерактивного тестирования, interaction tests. Storybook становится основой Design System и онбординга.",
      },
      {
        id: "q3-fe-6",
        title: "Design System: от токенов до организмов",
        detail:
          "Design tokens (цвета, типографика, отступы, радиусы) → Atoms (Button, Input, Badge, Text) → Molecules (Form, Card, Alert) → Organisms (Header, Sidebar, Table). Принципы: одна ответственность, composition over inheritance.",
      },
      {
        id: "q3-fe-7",
        title: "CSS Architecture: SASS Modules и BEM",
        detail:
          "Colocated index.module.scss, BEM-селекторы через camelCase в modules. Shared variables/mixins, слои tokens → components. Задача: Button с 5 вариантами и 3 размерами без utility-классов. Запрет inline-стилей для layout в PR guidelines.",
      },
      {
        id: "q3-fe-8",
        title: "Docker для фронтенд сборки",
        detail:
          "Multi-stage Dockerfile: build stage (Node 20) + serve stage (Nginx alpine). .dockerignore. docker-compose для локальной разработки. Цель: уметь объяснить DevOps как упаковать приложение и самостоятельно проверить что сборка работает.",
      },
      {
        id: "q3-fe-9",
        title: "Lighthouse CI: автоматический контроль качества",
        detail:
          "Настройка lighthouserc.js с порогами: LCP < 2.5s, CLS < 0.1, Performance > 80. Добавить в GitHub Actions workflow. Запускать при каждом PR. Блокировать merge при падении порогов.",
      },
      {
        id: "q3-fe-10",
        title: "Bundle Analysis: регулярный аудит",
        detail:
          "vite-bundle-visualizer: найти дубликаты, large dependencies, неоптимальные chunks. Установить bundle budget в CI: initial JS < 200kb gzipped. Настроить bundlesize или size-limit как GitHub check.",
      },
      {
        id: "q3-fe-11",
        title: "Supply chain security и секреты",
        detail:
          "npm audit, Dependabot/Snyk, lockfile policy. OWASP Top 10 для фронта: утечки в client bundle, небезопасное хранение токенов. .env и NEXT_PUBLIC_: что нельзя класть в клиент. Задача: добавить npm audit в CI и задокументировать политику обновления зависимостей.",
      },
      {
        id: "q3-fe-12",
        title: "MSW и contract testing",
        detail:
          "Mock Service Worker для dev и тестов без живого API. Consumer-driven contracts: фронт описывает ожидания, бэкенд сверяет. Задача: покрыть 3 эндпоинта MSW handlers + один integration тест на расхождение контракта.",
      },
      {
        id: "q3-fe-13",
        title: "Git: merge, rebase и linear history",
        detail:
          "Разница merge commit vs fast-forward vs squash merge. Interactive rebase (-i): squash, fixup, reorder. Когда rebase на feature-ветке, когда merge в main. Задача: привести «грязную» ветку из 8 коммитов к 2 осмысленным через rebase -i. Правило команды: documented branching strategy.",
      },
      {
        id: "q3-fe-14",
        title: "Git: конфликты, cherry-pick, bisect, reflog",
        detail:
          "Разрешение конфликтов в сложных файлах (CSS/JSON/lockfile). cherry-pick для hotfix с другой ветки. git bisect для поиска регрессии. reflog и восстановление «потерянного» коммита. Задача: симулировать регрессию, найти коммит bisect'ом за < 10 шагов.",
      },
      {
        id: "q3-fe-15",
        title: "Git в команде: hooks, Conventional Commits, PR hygiene",
        detail:
          "husky + lint-staged: pre-commit/pre-push. Conventional Commits и автогенерация changelog (optional). .gitattributes для merge стратегий. PR: atomic changes, описание «что/зачем/как проверить». Задача: настроить pre-commit с lint + format на pet-проекте.",
      },
      {
        id: "q3-fe-16",
        title: "Продвинутый CSS: Grid, Flexbox, container queries",
        detail:
          "Grid: auto-fit/minmax, named areas, subgrid (где поддерживается). Flex: min-width: 0, flex-shrink traps. Container queries (@container) vs media queries. Задача: адаптивный dashboard без JS — карточки перестраиваются по ширине контейнера, не только viewport.",
      },
      {
        id: "q3-fe-17",
        title: "Продвинутый CSS: @layer, :has(), cascade, specificity",
        detail:
          "@layer base/components/utilities — контроль каскада в большом проекте. :has() для родительских селекторов без JS. :is(), :where() для читаемости. Понимать specificity и почему !important — симптом проблемы архитектуры. Задача: переписать одну «войну специфичности» через layers или BEM.",
      },
      {
        id: "q3-fe-18",
        title: "Продвинутый CSS: custom properties, theming, logical properties",
        detail:
          "Design tokens через CSS variables: light/dark, scoped theme на subtree. logical properties (margin-inline, inset). color-mix(), oklch() для палитры. prefers-color-scheme + ручной toggle. Задача: две темы на SASS Modules + variables без дублирования компонентов.",
      },
    ],
  },
  {
    id: "q4",
    theme: "q4",
    title: "Q4: Архитектура и масштабирование",
    tagline:
      "Monorepo, границы модулей, микрофронтенды — осознанные решения, а не мода.",
    topics: [
      {
        id: "q4-fe-1",
        title: "Monorepo с Turborepo",
        detail:
          "Packages: @company/ui (Design System), @company/config (ESLint, TS), @company/web (приложение). Pipeline с кэшированием: build, test, lint. Задача: перенести проект в monorepo структуру в тестовой ветке. Понять когда monorepo полезен, а когда избыточен.",
      },
      {
        id: "q4-fe-2",
        title: "Микрофронтенды: когда нужны (и не нужны)",
        detail:
          'Module Federation (Vite plugin). Критерии применения: 3+ независимых команды, разные release циклы, изоляция legacy. Написать ADR: "Микрофронтенды в нашем контексте — решение и обоснование". Большинству проектов это не нужно.',
      },
      {
        id: "q4-fe-3",
        title: "Architecture Decision Records (ADR)",
        detail:
          "Формат ADR: контекст → принятое решение → рассмотренные альтернативы → последствия (плюсы/минусы). Написать 3 ADR на решения Q1–Q3 (State management, тест-стратегия, CI pipeline). Создать раздел «Архитектурные решения».",
      },
      {
        id: "q4-fe-4",
        title: "Tech Radar для фронтенд стека",
        detail:
          "Quadrants: Languages/Frameworks, Tools, Techniques, Platforms. Rings: Adopt, Trial, Assess, Hold. Составить Tech Radar из 15–20 позиций. Использовать как инструмент обсуждения с командой.",
      },
      {
        id: "q4-fe-5",
        title: "Модульная архитектура фронтенда",
        detail:
          "Feature-based folders, public API модулей (index.ts), правила импортов (eslint-plugin-boundaries или ручной lint). Colocation: компонент + styles + tests + stories. Задача: рефактор одного «god module» в изолированный feature.",
      },
      {
        id: "q4-fe-6",
        title: "Developer Experience (DX): стандарты команды",
        detail:
          "Измерить: Time to First Commit для нового разработчика. Улучшить: документация setup (README), scaffold CLI (plop.js), шаблоны PR, автоматизация рутины. Написать DX Manual — 2 страницы.",
      },
      {
        id: "q4-fe-7",
        title: "Code Review культура",
        detail:
          'Чеклист ревьюера: correctness, performance (нет лишних ре-рендеров), security (XSS, секреты, auth), readability, tests, accessibility. Правило: не «это неправильно», а «предлагаю X, потому что Y». Написать Code Review Guidelines — секции Security и A11y.',
      },
      {
        id: "q4-fe-8",
        title: "Performance SLO и мониторинг",
        detail:
          "SLO для фронтенда: LCP < 2.5s в 90% сессий, Error Rate < 0.1%, JS Exception Rate. Инструменты: Sentry (ошибки + performance), Vercel Analytics. Настроить алёрты при выходе за пороги.",
      },
      {
        id: "q4-fe-9",
        title: "Virtualization и тяжёлые списки",
        detail:
          "react-window / TanStack Virtual: когда DOM-узлов слишком много. Измерить до/после в Profiler. Паттерны: infinite scroll + virtual list, sticky headers, dynamic row height.",
      },
      {
        id: "q4-fe-10",
        title: "Edge Runtime и CDN",
        detail:
          "Ограничения Edge (нет Node APIs), geo-routing, edge middleware. Что кэшировать на CDN, cache tags, инвалидация. Задача: вынести read-heavy endpoint на edge handler и замерить TTFB.",
      },
    ],
  },
  {
    id: "q5",
    theme: "q5",
    title: "Q5: Интеграции и продуктовый фронтенд",
    tagline:
      "Auth, формы, real-time, i18n — то, что отличает production-приложение от учебного.",
    topics: [
      {
        id: "q5-fe-1",
        title: "Auth на фронте: OAuth2, PKCE, сессии",
        detail:
          "SPA vs SSR auth flows, httpOnly cookies vs localStorage (риски XSS). PKCE для public clients. Refresh token rotation. Задача: схема auth для Next.js App Router с middleware и защищёнными routes.",
      },
      {
        id: "q5-fe-2",
        title: "react-hook-form + Zod",
        detail:
          "Controlled vs uncontrolled, resolver, server-side validation mirror. Multi-step формы, field arrays. Задача: сложная форма с async validation (email unique) и accessible error messages.",
      },
      {
        id: "q5-fe-3",
        title: "Internationalization (i18n)",
        detail:
          "next-intl или i18next: namespaces, pluralization, ICU messages. RTL layout basics. Lazy-load переводов. Задача: добавить второй язык в pet-проект без дублирования компонентов.",
      },
      {
        id: "q5-fe-4",
        title: "WebSocket и Server-Sent Events",
        detail:
          "Когда WS vs SSE vs polling. Reconnect, backoff, heartbeat. Интеграция с React state (не утечки подписок). Задача: live notifications или progress bar с SSE.",
      },
      {
        id: "q5-fe-5",
        title: "GraphQL и типобезопасные API",
        detail:
          "Apollo Client / urql: cache policies, fragments. Когда GraphQL vs REST vs tRPC. Codegen из schema. Задача: одна feature с typed queries и optimistic update.",
      },
      {
        id: "q5-fe-6",
        title: "Error boundaries и resilient UI",
        detail:
          "Granular error boundaries, fallback UI, reset keys. Retry patterns для fetch. Offline / slow network UX. Интеграция с мониторингом (Sentry boundary).",
      },
      {
        id: "q5-fe-7",
        title: "Feature flags",
        detail:
          "Env-based vs LaunchDarkly/Unleash. Flag на уровне компонента vs route. Kill switch для релиза. Задача: обернуть experimental feature в flag с безопасным default off.",
      },
      {
        id: "q5-fe-8",
        title: "PWA и Service Workers",
        detail:
          "Workbox basics, precache vs runtime cache, update strategy. Install prompt, offline fallback page. Оценить ROI PWA для вашего продукта — не внедрять ради галочки.",
      },
      {
        id: "q5-fe-9",
        title: "Web Workers и тяжёлые вычисления",
        detail:
          "Offload parsing, crypto, large CSV в worker. Comlink для ergonomics. Не блокировать main thread — измерить INP до/после.",
      },
      {
        id: "q5-fe-10",
        title: "Animation и motion performance",
        detail:
          "CSS vs JS animation, transform/opacity only, compositor-friendly свойства. Framer Motion / View Transitions API — когда что. Задача: анимация без layout thrashing — проверить в Performance panel.",
      },
      {
        id: "q5-fe-11",
        title: "CSS-анимации: transitions, keyframes, easing",
        detail:
          "transition-property vs animating layout (избегать width/height/top). @keyframes, animation-fill-mode, delay и stagger через nth-child/custom properties. cubic-bezier vs linear vs steps. Задача: micro-interaction (hover/focus/active) только на transform/opacity; записать timing в design tokens.",
      },
      {
        id: "q5-fe-12",
        title: "Scroll-driven анимации и параллакс",
        detail:
          "animation-timeline: scroll() / view(), Scroll-driven Animations (где поддерживается). Intersection Observer как fallback. parallax без jank — не трогать scroll handler без throttle/passive. Задача: progress bar или header shrink при скролле с fallback для старых браузеров.",
      },
      {
        id: "q5-fe-13",
        title: "View Transitions API и shared element transitions",
        detail:
          "document.startViewTransition для SPA route change. Именованные view-transition-name, cross-document transitions (experimental). Связка с React Router / Next.js navigation. Задача: плавный переход между списком и детальной карточкой без «мигания» layout.",
      },
      {
        id: "q5-fe-14",
        title: "Motion в React: Framer Motion, FLIP, exit-анимации",
        detail:
          "AnimatePresence для mount/unmount. layout / layoutId для shared layout. FLIP technique (First, Last, Invert, Play) вручную vs библиотека. Не анимировать тысячи DOM-узлов — делегировать на CSS где возможно. Задача: модалка + список с reorder animation; Profiler до/после.",
      },
      {
        id: "q5-fe-15",
        title: "Доступные анимации: prefers-reduced-motion",
        detail:
          "media (prefers-reduced-motion: reduce): отключать или упрощать motion. Не блокировать функциональность — только декоративное. Системная настройка ОС + уважение в CSS и JS (matchMedia). Задача: один компонент с полной и reduced версией анимации; проверить в DevTools rendering emulation.",
      },
    ],
  },
  {
    id: "q6",
    theme: "q6",
    title: "Q6: Lead frontend — процессы и видение",
    tagline:
      "От senior к lead: люди, стейкхолдеры, roadmap команды, техническое влияние.",
    topics: [
      {
        id: "q6-fe-1",
        title: "Technical Roadmap: создание и презентация",
        detail:
          "Горизонт 6–12 месяцев. Инициативы: Infrastructure, DX, Performance, Features. Зависимости между инициативами. Задача: презентовать коллеге на 10 минут и получить обратную связь.",
      },
      {
        id: "q6-fe-2",
        title: "Frontend system design",
        detail:
          "Проектирование SPA под рост: routing, data layer, caching, auth, feature flags. Trade-offs: SSR vs CSR vs hybrid. Практика: 45-минутный mock design session (дашборд, marketplace, editor).",
      },
      {
        id: "q6-fe-3",
        title: "Процесс онбординга разработчика",
        detail:
          "Day 1 → Week 1 → Month 1 план для нового фронтендера. Что должен знать к концу испытательного срока. Написать онбординг-документ на основе матрицы компетенций (Junior уровень).",
      },
      {
        id: "q6-fe-4",
        title: "Technical interview loop для фронтенда",
        detail:
          "Структура: live coding (RTL, a11y), system design lite, code review exercise, values. Rubric с уровнями. Провести mock interview с коллегой. Избегать leetcode-задач, не релевантных работе.",
      },
      {
        id: "q6-fe-5",
        title: "Менторинг и индивидуальный план развития",
        detail:
          "ИПР для junior/middle: цели на 3/6/12 месяцев, ресурсы, метрики. Mock 1-on-1: feedback без оценочных ярлыков. Связь тем roadmap с ростом конкретного человека.",
      },
      {
        id: "q6-fe-6",
        title: "Коммуникация со стейкхолдерами",
        detail:
          "Структура: бизнес-проблема → техническое решение (без жаргона) → риски → сроки → результат. Tech debt на языке ROI. Практика: one-pager для нетехнического PM.",
      },
      {
        id: "q6-fe-7",
        title: "OKR и метрики фронтенд-команды",
        detail:
          "3 OKR: lead time, bug rate, Core Web Vitals. DORA metrics на уровне понимания. Связь инженерных метрик с продуктовыми. Не OKR ради OKR — измеримость и прозрачность.",
      },
      {
        id: "q6-fe-8",
        title: "Миграции и legacy",
        detail:
          "Strangler fig pattern, incremental rewrite, dual running. Оценка рисков и rollback. ADR для «большого» рефакторинга. Когда переписывать vs жить с legacy.",
      },
      {
        id: "q6-fe-9",
        title: "Incident response на фронте",
        detail:
          "Rollback через deploy, hotfix branch, feature flag off. Blameless postmortem шаблон. Runbook: кто on-call, как эскалировать. Связь с Sentry release tracking.",
      },
      {
        id: "q6-fe-10",
        title: "Техническое видение и публичное знание",
        detail:
          "Vision Document: ценности → принципы → цели → инициативы (2 страницы). Написать 1 статью на Habr/dev.to по теме из roadmap — проверка глубины понимания и профессиональный бренд.",
      },
      {
        id: "q6-fe-11",
        title: "API-first и кросс-командные контракты",
        detail:
          "Шаблон API contract: endpoint, schema, errors, SLA. Практика: описать 3 эндпоинта, согласовать с backend. Связь с OpenAPI и MSW из Q2–Q3.",
      },
      {
        id: "q6-fe-12",
        title: "Release strategy и управление рисками",
        detail:
          "Canary, blue-green (на уровне платформы), staged rollout. Rollback критерии. Документ «Стандарт релизов команды» — конкретные шаги и owners.",
      },
    ],
  },
];
