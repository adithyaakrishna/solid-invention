# React Flow Demo


Project Structure

```bash
├── .github # Automation Stuff
    ├── workflows
    │   └── deploy.yml  # Auto Deploy to GitHub Pages
    ├── dependabot.yml # Auto Manage Dependencies
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── Assets
│   │   └── Icons
│   │       ├── Chat.png
│   │       └── WA.png
│   ├── Components
│   │   ├── BasicComponents
│   │   │   ├── BasicAlert
│   │   │   │   ├── BasicAlert.min.css
│   │   │   │   ├── BasicAlert.tsx
│   │   │   │   └── index.tsx
│   │   │   └── Button
│   │   │       ├── BasicButton.tsx
│   │   │       └── index.ts
│   │   ├── BasicDrawer
│   │   │   ├── BasicDrawer.min.css
│   │   │   ├── BasicDrawer.tsx
│   │   │   └── index.ts
│   │   ├── NodeButton
│   │   │   ├── NodeButton.min.css
│   │   │   └── NodeButton.tsx
│   │   └── Nodes
│   │       └── MessageNode
│   │           ├── MessageNode.tsx
│   │           └── messageNode.min.css
│   ├── Config
│   ├── Layouts
│   │   ├── Header
│   │   │   ├── Header.min.css
│   │   │   ├── Header.tsx
│   │   │   └── index.ts
│   │   ├── MessageFlow
│   │   │   └── MessageFlow.tsx
│   │   └── Panel
│   │       ├── MainPanel
│   │       └── SettingsPanel
│   ├── Pages
│   │   └── HomePage
│   │       ├── HomePage.min.css
│   │       └── HomePage.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
└── tsconfig.json
```