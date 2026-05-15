import { create } from 'zustand';

export type MaxwellianLaunchSession = {
  characterId?: string;
  contextSource?: string;
  contextPayload?: Record<string, unknown>;
  uiMode?: string;
  legacyContext?: string;
} | null;

interface LaunchSessionStore {
  launchSession: MaxwellianLaunchSession;
  setLaunchSession: (launchSession: unknown) => void;
  clearLaunchSession: () => void;
}

function normalizeLaunchSession(input: unknown): MaxwellianLaunchSession {
  if (!input || typeof input !== 'object') return null;
  const source = input as Record<string, unknown>;
  const contextPayload =
    source.contextPayload && typeof source.contextPayload === 'object'
      ? (source.contextPayload as Record<string, unknown>)
      : {};
  return {
    characterId: typeof source.characterId === 'string' ? source.characterId : undefined,
    contextSource: typeof source.contextSource === 'string' ? source.contextSource : undefined,
    contextPayload,
    uiMode: typeof source.uiMode === 'string' ? source.uiMode : undefined,
    legacyContext: typeof source.legacyContext === 'string' ? source.legacyContext : undefined,
  };
}

export const useLaunchSessionStore = create<LaunchSessionStore>()((set) => ({
  launchSession: null,
  setLaunchSession: (launchSession) =>
    set({
      launchSession: normalizeLaunchSession(launchSession),
    }),
  clearLaunchSession: () => set({ launchSession: null }),
}));
