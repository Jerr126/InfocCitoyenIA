# Copilot Instructions - InfoCitoyenAI

## Project Overview
**InfoCitoyenAI** is a React + TypeScript + Vite web application providing civic and administrative guidance specific to Benin (Bénin). It combines an AI chatbot powered by Google's Gemini API with curated civic resources, FAQs, and administrative process guides.

## Architecture Essentials

### Core Stack
- **Frontend**: React 19 + TypeScript with Vite (HMR enabled)
- **AI Service**: Google Generative AI (Gemini 1.5 Pro)
- **Styling**: Tailwind CSS + Font Awesome icons
- **State Management**: React useState with localStorage persistence
- **Build**: Vite with React plugin

### Project Structure
```
src/
├── components/          # UI components (Navbar, Hero, ChatInterface, ResourceHub, etc.)
├── services/           # Business logic (GeminiService for API communication)
├── types.ts            # TypeScript interfaces (Message, CivicResource, NavItem, FAQItem)
├── constants.tsx       # Static data (CIVIC_RESOURCES, NAV_ITEMS, FAQ_ITEMS, TECHNICAL_GUIDE)
├── App.tsx             # Main app layout component
└── main.tsx            # React DOM entry point
```

## Key Patterns & Conventions

### Component Pattern
All components are functional React components with `React.FC` type annotation:
```tsx
const ComponentName: React.FC = () => {
  return <div>...</div>;
};
export default ComponentName;
```

### Data & Types
- **Static data**: All civic resources, navigation items, and FAQs live in `src/constants.tsx`
- **Type definitions**: Always use exported interfaces from `src/types.ts` (e.g., `Message`, `CivicResource`, `NavItem`)
- **Role constants**: Use `Role.USER` and `Role.BOT` from types module (not string literals)

### Gemini Service Pattern
The `GeminiService` class manages all AI interactions:
- **API Key**: Passed via `process.env.API_KEY` (required at runtime)
- **Model**: Uses `gemini-1.5-pro` for reasoning about legal/administrative content
- **System Instruction**: Injected from `SYSTEM_INSTRUCTION` constant (defined in constants.tsx)
- **Sources**: Extracts grounding metadata from Gemini responses for citations

```typescript
// Usage pattern
const response = await geminiService.sendMessage(userMessage);
// Returns: { text: string, sources?: Array<{title, uri}> }
```

### State Persistence
Chat interface persists data using localStorage:
```typescript
const STORAGE_KEY_MESSAGES = 'infocitoyen_chat_messages';
const STORAGE_KEY_SOURCES = 'infocitoyen_chat_sources';
```
Messages are JSON stringified with timestamps; always re-parse as `new Date(m.timestamp)` when loading.

### Tailwind Conventions
- Uses standard Tailwind classes; no custom CSS utilities
- Color scheme: Green (#008751 - Benin flag), Yellow (#fcd116), Red (#e8112d) for accents
- Consistent spacing with `max-w-7xl`, `mx-auto`, `px-4 sm:px-6 lg:px-8` for containers
- Responsive design: mobile-first with `sm:`, `md:`, `lg:` breakpoints

## Critical Development Workflows

### Development Server
```bash
npm run dev
# Runs Vite dev server with HMR on http://localhost:5173
```

### Production Build
```bash
npm run build
# Compiles TypeScript (tsc -b) then builds with Vite
# Output: dist/
```

### Linting
```bash
npm run lint
# Uses ESLint with type-aware rules (see eslint.config.js)
```

### Environment Setup
- **API Key**: Set `API_KEY` environment variable before running (required for Gemini API)
- **Node version**: TypeScript 5.9+ (specified in devDependencies)
- **Missing package fix**: `npm install @google/generative-ai` (if getting module resolution error)

## Domain Knowledge - Benin Civic Context

This is NOT a generic chatbot. The application specializes in Beninese administrative and civic topics:

### Key Topics to Know
- **ANIP**: Agence Nationale de l'Identification des Personnes (national ID agency)
- **CIP**: Certificat d'Identification Personnelle
- **SMIG**: Salaire Minimum Interprofessionnel Garanti (current: 52,000 FCFA/month as of Jan 2023)
- **LEI/CENA**: Electoral systems (Liste Électorale Informatisée, Commission Électorale Nationale Autonome)
- **monentreprise.bj**: Official business creation portal (APIEx)
- **ARCH**: Assurance pour le Renforcement du Capital Humain (health insurance program)

These concepts are defined in `src/constants.tsx` under `CIVIC_RESOURCES` and `FAQ_ITEMS`.

### Common Issues Specific to Benin
The app includes a `TECHNICAL_GUIDE` in constants covering DNS/VPN issues for accessing Google services (aistudio.google.com often blocked in Benin).

## Common Pitfalls to Avoid

1. **API Key**: GeminiService throws if `process.env.API_KEY` is undefined - ensure it's set in `.env` or deployment environment
2. **Typo in filename**: Component directory has `Navabar.tsx` (not `Navbar.tsx`) - imports must match exactly
3. **CSS Missing**: `src/index.css` must be imported in `main.tsx` or styles won't apply
4. **localStorage Errors**: Always wrap localStorage operations in try-catch when parsing JSON
5. **Role Constants**: Use exported `Role` constants from types.ts, not hardcoded strings
6. **Message Timestamps**: Always reconstruct as `new Date()` when loading persisted messages

## Testing & Debugging Guides

- **Chat persistence**: Check browser's Application > LocalStorage for stored messages and sources
- **API errors**: Gemini service catches all errors and returns fallback message; check console for detailed error logs
- **Styling issues**: Use Tailwind CDN (loaded from index.html) + inspect elements for class application
- **Component mounting**: All components use `React.FC` - check for missing imports or circular dependencies

## References to Key Files
- **Civic content definition**: [src/constants.tsx](../src/constants.tsx)
- **Type definitions**: [src/types.ts](../src/types.ts)
- **AI service**: Gemini service implementation (verify actual file path in your src/services/ directory)
- **Chat component**: Check `src/components/` directory for the main chat component (primary integration point)
- **Build config**: [vite.config.ts](../vite.config.ts)
