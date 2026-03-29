**Purpose**

- **Goal:** Help AI coding agents become productive quickly in this Expo + React Native repo.

**Big Picture**

- **Framework:** Expo app using `expo-router` and file-based routing (see `app/` and `app.json` — `experiments.typedRoutes: true`).
- **App root:** `app/_layout.tsx` wraps the app with `QueryClientProvider` (React Query) and theming; preload happens there.
- **Styling:** Uses `nativewind` (Tailwind for React Native) and a small theme layer in `theme/`.

**Data & Integration Points**

- **HTTP client:** `api/httpClient.ts` exposes a configured `axios` instance. Use this for all network calls — base URL comes from `process.env.EXPO_PUBLIC_API_URL`.
- **APIs:** `api/*.ts` contain thin wrappers (e.g. `api/usersApi.ts` exports `createUser`, `loginUser`, `getUsers`).
- **State & fetching:** App-wide data fetching uses `@tanstack/react-query`. Hooks live in `hooks/` (e.g. `hooks/user/useLoginUser.ts`) and follow `useQuery`/`useMutation` + `queryClient.invalidateQueries` patterns.

**Routing & Pages**

- **File routes:** Pages live under `app/` (example: `app/sign-up/index.tsx` → `/sign-up`). Use the `Slot` pattern for nested layouts as in `app/_layout.tsx`.

**Forms & UX Patterns**

- **Forms:** `react-hook-form` is used. Form logic is often split into `organisms/*` with `useXxxForm.ts` hooks (examples: `organisms/login-form/useLoginForm.ts`).
- **Components:** UI primitives/atoms under `components/atoms`, larger UI blocks under `components/organisms`. Theme-aware components include `components/typography/ThemedText.tsx` and `components/ThemedView.tsx`.

**Conventions & Project-Specific Patterns**

- **Path alias:** Project uses `@/` absolute imports (see `babel.config.js` / `tsconfig.json`). Prefer `@/api/...`, `@/components/...` over relative deep paths.
- **Data flow:** "API function" → "hook in `hooks/`" → "organism component uses hook". Avoid calling `httpClient` directly from screen components.
- **React Query keys:** Query keys are often constants in `constants/routes.ts` or inline arrays; `useMutation` callbacks call `queryClient.invalidateQueries({ queryKey: [API_ROUTES.USERS] })`.

**Build / Dev / Scripts**

- **Start (dev):** `npm run dev` → runs `expo start --tunnel` (useful for device testing).
- **Platform-specific:** `npm run android`, `npm run ios`, `npm run web` all call `expo start` with platform flags.
- **Type check:** `npm run build` runs `tsc` (project uses TypeScript; build script is type-check only).
- **Reset starter:** `npm run reset-project` runs `scripts/reset-project.js`.

**Environment & Secrets**

- **API URL:** `EXPO_PUBLIC_API_URL` must be set for network calls. Add environment vars to your local `.env` or to Expo config when testing on devices.

**Examples (how to add/modify behavior)**

- To call the login API from a component, prefer the hook:

```ts
const { mutateAsync: login } = useLoginUser();
await login({ email, password });
```

- To add a new API surface, put network calls in `api/*.ts` and related hooks in `hooks/` so React Query usage stays centralized.

**What to avoid**

- Don't bypass `api/httpClient.ts` and sprinkle raw `axios` or `fetch` calls across components.
- Don't change routing conventions — keep file names in `app/` aligned to desired routes.

**Key files to inspect when changing behavior**

- `app/_layout.tsx` — app providers and preload logic
- `api/httpClient.ts`, `api/usersApi.ts` — network layer
- `hooks/` — react-query hooks and cache invalidation
- `components/organisms/*` — form logic and UI composition
- `theme/colors.ts`, `tailwind.config.js` — styling and tokens

If anything here is unclear or you want more examples (e.g., a template for adding a new API + hook + screen), tell me which area to expand and I will iterate.
