# Crono Dashboard

Dashboard CRM completa realizzata con React 19, TypeScript e Material UI.  
Permette di monitorare KPI, segnali di vendita, attività giornaliere e molto altro tramite un'interfaccia moderna e multilingua.

---

## Indice

- [Avvio rapido](#avvio-rapido)
- [Script disponibili](#script-disponibili)
- [Stack tecnico](#stack-tecnico)
- [Architettura del progetto](#architettura-del-progetto)
- [Routing](#routing)
- [Internazionalizzazione (i18n)](#internazionalizzazione-i18n)
- [Testing E2E](#testing-e2e)
- [Configurazione TypeScript](#configurazione-typescript)
- [Linting](#linting)

---

## Avvio rapido

```bash
npm install
npm run dev
```

Il server di sviluppo parte su `http://localhost:5173`.

### Build di produzione

```bash
npm run build
npm run preview
```

---

## Script disponibili

| Comando | Descrizione |
|---|---|
| `npm run dev` | Avvia il server di sviluppo Vite con HMR |
| `npm run build` | Compila TypeScript e produce la build di produzione |
| `npm run preview` | Anteprima locale della build di produzione |
| `npm run lint` | Esegue ESLint su tutti i file `.ts` / `.tsx` |
| `npm run cy:open` | Apre l'interfaccia grafica di Cypress |
| `npm run cy:run` | Esegue i test E2E in modalità headless |
| `npm run test:e2e` | Avvia il dev server e poi esegue i test E2E |

---

## Stack tecnico

### Core

| Tecnologia | Versione | Ruolo |
|---|---|---|
| **React** | 19 | Libreria UI principale |
| **TypeScript** | ~6.0 | Type safety, modalità strict, target ES2023 |
| **Vite** | 8 | Build tool e dev server con HMR ultra-veloce |

### UI & Styling

| Libreria | Versione | Ruolo |
|---|---|---|
| **Material UI** (`@mui/material`) | 9 | Componenti UI principali (ThemeProvider, CssBaseline, Box…) |
| **MUI Icons** (`@mui/icons-material`) | 9 | Icone Material Design |
| **Emotion** (`@emotion/react`, `@emotion/styled`) | 11 | CSS-in-JS engine richiesto da MUI |
| **Tailwind CSS** | 4 | Utility-first styling (integrato via `@tailwindcss/vite`) |
| **lucide-react** | 1 | Icone SVG leggere e consistenti |
| **clsx** | 2 | Composizione condizionale di classi CSS |
| **tailwind-merge** | 3 | Merge sicuro di classi Tailwind (evita conflitti) |
| **CSS Modules** | — | Scoping locale degli stili per ogni componente |

### Routing

| Libreria | Versione | Ruolo |
|---|---|---|
| **react-router-dom** | 7 | Routing client-side dichiarativo |

### Internazionalizzazione

| Libreria | Versione | Ruolo |
|---|---|---|
| **i18next** | 26 | Framework i18n core |
| **react-i18next** | 17 | Binding React per i18next |

### UI Primitives

| Libreria | Versione | Ruolo |
|---|---|---|
| **@radix-ui/react-popover** | 1 | Popover headless accessibile |

### Testing

| Libreria | Versione | Ruolo |
|---|---|---|
| **Cypress** | 15 | Framework di test E2E |
| **@badeball/cypress-cucumber-preprocessor** | 24 | BDD con file `.feature` (Gherkin) |
| **@bahmutov/cypress-esbuild-preprocessor** | 2 | Preprocessore esbuild per Cypress |

### Dev Tools

| Strumento | Versione | Ruolo |
|---|---|---|
| **ESLint** | 9 | Linting statico del codice |
| **typescript-eslint** | 8 | Regole ESLint per TypeScript |
| **eslint-plugin-react-hooks** | 7 | Regole per i React Hooks |
| **eslint-plugin-react-refresh** | 0.5 | Compatibilità con Vite HMR |
| **@vitejs/plugin-react** | 6 | Plugin Vite per React (Fast Refresh) |

---

## Architettura del progetto

```
src/
  App.tsx               # Root: ThemeProvider, Router, layout principale
  main.tsx              # Entry point (React 19 createRoot)
  theme.ts              # Tema MUI personalizzato
  i18n.ts               # Configurazione i18next
  index.css             # CSS globale
  components/           # Componenti presentazionali riutilizzabili
    CardSkeleton/
    KpiDetailDialog/
    OnboardingCard/
    PerformanceCard/
    RepliesCard/
    SidebarHeader/
    SidebarMenuButton/
    SidebarNav/
    SidebarUser/
    SignalRow/
    SignalTable/
    TaskCard/
    TodayTasksCard/
    TrialBanner/
    WelcomeCard/
  containers/           # Componenti "smart" collegati allo stato
    Dashboard/
    NotFound/
    Onboarding/
    Performance/
    Placeholder/
    Replies/
    Sidebar/
    Signals/
    TodayTasks/
    Welcome/
  hooks/                # Custom hooks
    useDashboardState.ts
    useLoadingState.ts
    usePerformanceDialog.ts
    useSidebarDrag.ts
    useSignalPopover.ts
    useSignalsAction.ts
  data/
    mock.ts             # Dati mockati (sostituibile con API reali)
  types/
    index.ts            # Interfacce TypeScript (Signal, KPI, Task…)
  utils/
    format.ts           # Helper di formattazione
    kpi.tsx             # Utility KPI
    sidebar.ts          # Utility sidebar
    sidebarIcons.ts     # Mapping icone sidebar
    string.ts           # Utility stringhe
  styles/
    colors.ts           # Token colori
    shared.ts           # Stili condivisi
  i18n/
    en.json             # Inglese
    it.json             # Italiano
    de.json             # Tedesco
    es.json             # Spagnolo
    fr.json             # Francese
    index.ts            # Export risorse i18n
  assets/
    icons/              # Icone SVG custom
```

### Pattern architettonici

- **Container / Component**: i container gestiscono lo stato e la logica; i componenti si occupano solo della UI
- **Custom Hooks**: tutta la logica di stato è estratta in hook dedicati (`useDashboardState`, `useSignalsAction`, ecc.)
- **CSS Modules**: ogni componente ha il proprio file `.module.css` per evitare conflitti di stile
- **Path alias `@/`**: mappa `src/`, rendendo gli import puliti e il refactoring semplice
- **Chunk splitting**: Vite è configurato con `manualChunks` per separare ogni dipendenza `node_modules` in un chunk dedicato, ottimizzando il caching del browser
- **Mock data**: i dati in `src/data/mock.ts` sono facilmente sostituibili con chiamate API reali

---

## Routing

Le route sono definite in `App.tsx` tramite `react-router-dom`:

| Path | Componente | Descrizione |
|---|---|---|
| `/` | `DashboardContainer` | Dashboard principale |
| `/find-new` | `PlaceholderContainer` | Find New (placeholder) |
| `/lists` | `PlaceholderContainer` | Liste (placeholder) |
| `/templates` | `PlaceholderContainer` | Template (placeholder) |
| `/sequences` | `PlaceholderContainer` | Sequenze (placeholder) |
| `/tasks` | `PlaceholderContainer` | Task (placeholder) |
| `/inbox` | `PlaceholderContainer` | Inbox (placeholder) |
| `/deals` | `PlaceholderContainer` | Deal (placeholder) |
| `*` | `NotFoundContainer` | Pagina 404 |

---

## Internazionalizzazione (i18n)

Il progetto supporta **5 lingue** tramite `i18next` + `react-i18next`:

| Codice | Lingua |
|---|---|
| `en` | Inglese |
| `it` | Italiano |
| `de` | Tedesco |
| `es` | Spagnolo |
| `fr` | Francese |

I file di traduzione si trovano in `src/i18n/`.

---

## Testing E2E

I test end-to-end usano **Cypress 15** con sintassi **BDD (Gherkin)** tramite il plugin `cypress-cucumber-preprocessor`.

### Configurazione

- `baseUrl`: `http://localhost:5173`
- `specPattern`: `cypress/e2e/**/*.feature`
- `viewportWidth`: 1440px, `viewportHeight`: 900px
- `defaultCommandTimeout`: 10 secondi

### Copertura test

| Feature | File `.feature` |
|---|---|
| Dashboard | `cypress/e2e/dashboard/` |
| Onboarding | `cypress/e2e/onboarding/` |
| Performance | `cypress/e2e/performance/` |
| Risposte | `cypress/e2e/replies/` |
| Sidebar | `cypress/e2e/sidebar/` |
| Segnali | `cypress/e2e/signals/` |
| Task di oggi | `cypress/e2e/today-tasks/` |
| Benvenuto | `cypress/e2e/welcome/` |

### Eseguire i test

```bash
# Con interfaccia grafica
npm run cy:open

# Headless (CI)
npm run cy:run

# Avvia il server e poi i test
npm run test:e2e
```

---

## Configurazione TypeScript

- **Target**: `ES2023`
- **Lib**: `ES2023`, `DOM`, `DOM.Iterable`
- **Mode strict**: abilitato
- **jsx**: `react-jsx`
- **moduleResolution**: `bundler`
- **Path alias**: `@/*` → `src/*`
- **Regole aggiuntive**: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`

---

## Linting

ESLint 9 con configurazione flat config (`eslint.config.js`):

- `@eslint/js` – regole JS raccomandate
- `typescript-eslint` – regole TypeScript raccomandate
- `eslint-plugin-react-hooks` – best practice per i React Hooks
- `eslint-plugin-react-refresh` – compatibilità con Vite HMR

```bash
npm run lint
```

