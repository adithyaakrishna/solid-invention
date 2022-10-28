# React Flow Demo


Project Structure

```bash
├── .github # Automation Stuff
    ├── workflows
    │   └── deploy.yml  # Auto Deploy to GitHub Pages
    ├── dependabot.yml # Auto Manage Dependencies
├── package-lock.json
├── package.json
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── Assets
│   │   └── Icons
│   ├── Components
│   │   ├── BasicComponents
│   │   │   └── Button
│   │   │       └── BasicButton.tsx
│   │   ├── BasicPanel
│   │   │   └── BasicPanel.tsx
│   │   ├── NodeButton
│   │   │   └── NodeButton.tsx
│   │   └── Nodes
│   │       └── MessageNode
│   │           ├── MessageNode.tsx
│   │           ├── MessageNodeCard.tsx
│   │           └── messageNode.min.css
│   ├── Config
│   ├── Layouts
│   │   ├── Header
│   │   ├── MessageFlow
│   │   │   └── MessageFlow.tsx
│   │   └── Panel
│   │       ├── MainPanel
│   │       └── SettingsPanel
│   ├── Pages
│   │   └── HomePage
│   │       └── HomePage.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
└── tsconfig.json
```