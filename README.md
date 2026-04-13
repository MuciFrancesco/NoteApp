# Crono Dashboard

Dashboard CRM realizzata con React, TypeScript e Tailwind CSS.

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

## Stack tecnico

- **React 19** + **Vite** - dev server ultra-veloce con HMR
- **TypeScript** in strict mode - type safety completa
- **Tailwind CSS v4** - utility-first styling via `@tailwindcss/vite`
- **lucide-react** - libreria icone SVG
- **clsx + tailwind-merge** - composizione condizionale delle classi CSS

## Architettura

```
src/
  components/
    ui/           # Componenti atomici riutilizzabili (Button, Badge, Card, Avatar, ProgressBar)
    layout/       # Componenti strutturali (Sidebar, DashboardLayout)
    features/
      signals/    # Logica specifica segnali (SignalTable, SignalRow, ActionTooltip)
  hooks/          # Custom hooks (useSignals)
  types/          # Interfacce TypeScript
  data/           # Dati mockati
  utils/          # Helper functions (cn, format)
  pages/          # Pagine applicazione
```

### Scelte architettoniche

- **Compound Components** (Card, Card.Header, Card.Content): API componibile e leggibile
- **Custom hook useSignals**: Separazione logica di stato dalla UI
- **ActionTooltip custom**: Popup posizionato con click-outside handling
- **cn() utility**: Merge sicuro di classi Tailwind via clsx + tailwind-merge
- **Dati in src/data**: Mock JSON facilmente sostituibile con API reali
- **Path alias @/**: Import puliti e refactoring-friendly

### Interazioni implementate

- Click su Action mostra tooltip con Complete e Delete
- Complete / Delete rimuovono il segnale e decrementano il contatore
- Click esterno al tooltip chiude il menu

