# InfoCitoyenAI

InfoCitoyenAI is a React + TypeScript + Vite web application providing civic and administrative guidance for Benin. It includes an AI-powered chat assistant (Gemini/Generative AI), curated civic resources, and user-facing components.

## Quickstart

Development server:

```bash
npm install
npm run dev
# open http://localhost:5173
```

Build for production:

```bash
npm run build
```

## Notes and project-specific details

- Project uses React 19 + Vite + TypeScript. See `vite.config.ts` and `tsconfig.app.json` for build settings.
- AI integration lives in `src/services/geminiService.ts` and depends on `@google/generative-ai` and an `API_KEY` environment variable.
- Civic content and FAQ are defined in `src/constants.tsx`.
- Components are functional React components (see `src/components/`) and use `React.FC` typing.

If you need the original Vite template notes about ESLint or React Compiler, they were intentionally removed here to keep the README focused on this project's purpose. If you want the full template guidance restored, tell me and I will merge it back in.
