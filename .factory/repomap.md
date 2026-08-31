# Repomap & Symbol Skeleton (L2 Cache)
- **Workspace:** `Thonii.github.io`
- **Branch:** `main`
- **Archivos escaneados:** 22 | **Firmas exportadas:** 18

## Recent Commits
- `1382fa0 feat: embed updated ATS-friendly PDF CV with direct download links and new portfolio URL`
- `c4b76e6 feat: add automatic i18n (ES/EN), calibrate roles and education, update public repos showcase`
- `aaed14b feat: initial corporate engineering portfolio for thonii.github.io`

## Git Status (Delta Activo)
- `M src/components/CaseStudies.tsx`
- ` M src/components/ContactSection.tsx`
- ` M src/components/Footer.tsx`
- ` M src/components/HeroSection.tsx`
- ` M src/components/Navigation.tsx`
- ` M src/components/TechMatrix.tsx`
- ` M src/index.css`
- `?? .factory/`
- `?? src/components/ui/`

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
