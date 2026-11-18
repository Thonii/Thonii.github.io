# Repomap & Symbol Skeleton (L2 Cache)
- **Workspace:** `Thonii.github.io`
- **Branch:** `main`
- **Archivos escaneados:** 22 | **Firmas exportadas:** 18

## Recent Commits
- `6abfc45 fix(i18n,security): humanize Spanish version for Lima market and remove private AndeaField prototype links`
- `4084102 feat: update portfolio (ES/EN) and ATS PDF resume with AndeaField Suite ERP lead role and achievements`
- `7a0ad04 feat: implement MorphIcon component and integrate interactive iconography across UI elements`

## Git Status (Delta Activo)
- `M public/Anthony_Villalobos_CV.pdf`
- ` M public/resume-anthony-villalobos.pdf`
- ` M src/components/GithubProjects.tsx`
- ` M src/data/githubReposData.ts`
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
