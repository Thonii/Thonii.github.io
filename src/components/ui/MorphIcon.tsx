import React, { useEffect, useRef, useState } from 'react';

/**
 * Spring physics configuration
 */
export interface SpringConfig {
  stiffness?: number; // tension
  damping?: number;   // friction
  mass?: number;      // mass
  precision?: number;
}

const DEFAULT_SPRING: Required<SpringConfig> = {
  stiffness: 260,
  damping: 20,
  mass: 1,
  precision: 0.001,
};

/**
 * Hook to drive spring-animated values between 0 and 1
 */
export function useSpringValue(
  targetValue: number,
  config: SpringConfig = {}
): number {
  const [currentValue, setCurrentValue] = useState(targetValue);
  const animRef = useRef<{
    value: number;
    velocity: number;
    target: number;
    rafId: number | null;
  }>({
    value: targetValue,
    velocity: 0,
    target: targetValue,
    rafId: null,
  });

  const spring = { ...DEFAULT_SPRING, ...config };

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCurrentValue(targetValue);
      animRef.current.value = targetValue;
      animRef.current.velocity = 0;
      animRef.current.target = targetValue;
      return;
    }

    animRef.current.target = targetValue;

    if (animRef.current.rafId !== null) {
      return; // already animating
    }

    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.032);
      lastTime = time;

      const state = animRef.current;
      const displacement = state.value - state.target;
      const springForce = -spring.stiffness * displacement;
      const dampingForce = -spring.damping * state.velocity;
      const acceleration = (springForce + dampingForce) / spring.mass;

      state.velocity += acceleration * dt;
      state.value += state.velocity * dt;

      // Check if settled
      if (
        Math.abs(state.value - state.target) < spring.precision &&
        Math.abs(state.velocity) < spring.precision
      ) {
        state.value = state.target;
        state.velocity = 0;
        state.rafId = null;
        setCurrentValue(state.target);
        return;
      }

      setCurrentValue(state.value);
      state.rafId = requestAnimationFrame(loop);
    };

    animRef.current.rafId = requestAnimationFrame(loop);

    return () => {
      if (animRef.current.rafId !== null) {
        cancelAnimationFrame(animRef.current.rafId);
        animRef.current.rafId = null;
      }
    };
  }, [targetValue, spring.stiffness, spring.damping, spring.mass, spring.precision]);

  return currentValue;
}

// Linear interpolation helper
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export type MorphIconType =
  | 'menu-to-x'
  | 'chevron-down-to-up'
  | 'copy-to-check'
  | 'sun-to-sprout'
  | 'arrow-to-sparkles'
  | 'database-to-cpu'
  | 'solarpunk-cycle';

export interface MorphIconProps {
  type: MorphIconType;
  /**
   * Boolean state (false = initial state, true = active/transformed state)
   */
  active?: boolean;
  /**
   * Optional multi-state step counter (e.g. for Solarpunk cycle 0 -> 1 -> 2)
   */
  step?: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  color?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
}

/**
 * Universal MorphIcon Component
 * Renders high-performance spring-animated SVG transitions without external dependencies
 */
export const MorphIcon: React.FC<MorphIconProps> = ({
  type,
  active = false,
  step = 0,
  size = 20,
  strokeWidth = 2,
  className = '',
  color = 'currentColor',
  style,
  'aria-label': ariaLabel,
}) => {
  const targetProgress = active ? 1 : 0;
  const progress = useSpringValue(targetProgress, {
    stiffness: 260,
    damping: 20,
    mass: 1,
  });

  // 1. MENU TO X
  if (type === 'menu-to-x') {
    // Folds 3 hamburger bars into a centered X with 45deg rotation and spring bounce
    const topX1 = lerp(4, 6, progress);
    const topY1 = lerp(6, 6, progress);
    const topX2 = lerp(20, 18, progress);
    const topY2 = lerp(6, 18, progress);

    const midOpacity = lerp(1, 0, Math.min(progress * 2, 1));
    const midScale = lerp(1, 0.2, progress);

    const botX1 = lerp(4, 6, progress);
    const botY1 = lerp(18, 18, progress);
    const botX2 = lerp(20, 18, progress);
    const botY2 = lerp(18, 6, progress);

    const rotation = lerp(0, 90, progress);

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: 'center',
          ...style,
        }}
        aria-hidden={!ariaLabel}
        aria-label={ariaLabel}
      >
        {/* Top bar morphing to diagonal 1 */}
        <line x1={topX1} y1={topY1} x2={topX2} y2={topY2} />
        {/* Middle bar fading and compressing */}
        <line
          x1={4}
          y1={12}
          x2={20}
          y2={12}
          opacity={midOpacity}
          style={{
            transform: `scaleX(${midScale})`,
            transformOrigin: 'center',
          }}
        />
        {/* Bottom bar morphing to diagonal 2 */}
        <line x1={botX1} y1={botY1} x2={botX2} y2={botY2} />
      </svg>
    );
  }

  // 2. CHEVRON DOWN TO UP
  if (type === 'chevron-down-to-up') {
    const rotation = lerp(0, 180, progress);

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: 'center',
          ...style,
        }}
        aria-hidden={!ariaLabel}
        aria-label={ariaLabel}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    );
  }

  // 3. COPY TO CHECK
  if (type === 'copy-to-check') {
    const copyOpacity = lerp(1, 0, Math.min(progress * 1.5, 1));
    const checkScale = lerp(0.3, 1, progress);
    const checkOpacity = lerp(0, 1, Math.min(progress * 2, 1));
    const bounceScale = lerp(1, 1.15, Math.sin(progress * Math.PI));

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        style={{
          transform: `scale(${bounceScale})`,
          transformOrigin: 'center',
          ...style,
        }}
        aria-hidden={!ariaLabel}
        aria-label={ariaLabel}
      >
        {/* Copy icon background layers */}
        <g opacity={copyOpacity}>
          <rect width="13" height="13" x="9" y="9" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </g>

        {/* Checkmark morph */}
        <g
          opacity={checkOpacity}
          style={{
            transform: `scale(${checkScale})`,
            transformOrigin: 'center',
          }}
        >
          <polyline points="20 6 9 17 4 12" />
        </g>
      </svg>
    );
  }

  // 4. ARROW TO SPARKLES
  if (type === 'arrow-to-sparkles') {
    const arrowTranslateX = lerp(0, 3, Math.sin(progress * Math.PI));
    const sparkleScale = lerp(0.2, 1, progress);
    const arrowOpacity = lerp(1, 0, progress);
    const sparkleOpacity = lerp(0, 1, progress);

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        style={style}
        aria-hidden={!ariaLabel}
        aria-label={ariaLabel}
      >
        <g
          opacity={arrowOpacity}
          style={{
            transform: `translateX(${arrowTranslateX}px)`,
            transformOrigin: 'center',
          }}
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </g>

        <g
          opacity={sparkleOpacity}
          style={{
            transform: `scale(${sparkleScale}) rotate(${progress * 90}deg)`,
            transformOrigin: 'center',
          }}
        >
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
        </g>
      </svg>
    );
  }

  // 5. SOLARPUNK CYCLE (Sun -> Sprout -> Zap)
  if (type === 'sun-to-sprout' || type === 'solarpunk-cycle') {
    const currentStep = step % 3;
    const isSprout = currentStep === 1;
    const isZap = currentStep === 2;
    const sunRotation = lerp(0, 360, (step * 0.33) % 1);

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        style={{
          transform: `rotate(${sunRotation}deg)`,
          transformOrigin: 'center',
          transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          ...style,
        }}
        aria-hidden={!ariaLabel}
        aria-label={ariaLabel}
      >
        {currentStep === 0 && (
          <g>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </g>
        )}

        {isSprout && (
          <g>
            <path d="M7 20h10" />
            <path d="M10 20c5.5-2.5.8-6.4 3-13" />
            <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
            <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
          </g>
        )}

        {isZap && (
          <g>
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </g>
        )}
      </svg>
    );
  }

  // 6. DATABASE TO CPU
  if (type === 'database-to-cpu') {
    const dbOpacity = lerp(1, 0, progress);
    const cpuOpacity = lerp(0, 1, progress);
    const morphScale = lerp(1, 1.08, Math.sin(progress * Math.PI));

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        style={{
          transform: `scale(${morphScale})`,
          transformOrigin: 'center',
          ...style,
        }}
        aria-hidden={!ariaLabel}
        aria-label={ariaLabel}
      >
        <g opacity={dbOpacity}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </g>
        <g opacity={cpuOpacity}>
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <rect width="6" height="6" x="9" y="9" rx="1" />
          <path d="M9 1v3" />
          <path d="M15 1v3" />
          <path d="M9 20v3" />
          <path d="M15 20v3" />
          <path d="M20 9h3" />
          <path d="M20 14h3" />
          <path d="M1 9h3" />
          <path d="M1 14h3" />
        </g>
      </svg>
    );
  }

  return null;
};
