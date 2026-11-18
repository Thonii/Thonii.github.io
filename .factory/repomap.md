# Repomap & Symbol Skeleton (L2 Cache)
- **Workspace:** `Thonii.github.io`
- **Branch:** `main`
- **Archivos escaneados:** 22 | **Firmas exportadas:** 18

## Recent Commits
- `7a0ad04 feat: implement MorphIcon component and integrate interactive iconography across UI elements`
- `1382fa0 feat: embed updated ATS-friendly PDF CV with direct download links and new portfolio URL`
- `c4b76e6 feat: add automatic i18n (ES/EN), calibrate roles and education, update public repos showcase`

## Git Status (Delta Activo)
- `M public/Anthony_Villalobos_CV.pdf`
- ` M public/resume-anthony-villalobos.pdf`
- ` M src/data/caseStudiesData.ts`
- ` M src/data/experienceData.ts`
- ` M src/data/githubReposData.ts`
- ` M src/data/techStackData.ts`
- ` M src/i18n/translations.ts`

## Public API & Symbol Skeletons
### `src/App.tsx`
- `export function App()`

### `src/components/SystemDiagram.tsx`
- `export const SystemDiagram: React.FC<SystemDiagramProps> = ({ title, steps, stageLabel = 'ETAPA' }) =>`

### `src/components/ui/MorphIcon.tsx`
- `export interface SpringConfig`
- `export type MorphIconType =`
- `export interface MorphIconProps`
- `export const MorphIcon: React.FC<MorphIconProps> = (`

### `src/data/caseStudiesData.ts`
- `export interface CaseStudy`
- `export const caseStudies: CaseStudy[] = [`

### `src/data/experienceData.ts`
- `export interface ExperienceItem`
- `export const experiences: ExperienceItem[] = [`

### `src/data/githubReposData.ts`
- `export interface GithubRepo`
- `export const githubRepos: GithubRepo[] = [`

### `src/data/techStackData.ts`
- `export interface TechCategory`
- `export const techMatrix: TechCategory[] = [`

### `src/i18n/LanguageContext.tsx`
- `export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) =>`

### `src/i18n/translations.ts`
- `export type Language = 'es' | 'en'`
- `export interface TranslationSchema`
- `export const translations: Record<Language, TranslationSchema> =`
