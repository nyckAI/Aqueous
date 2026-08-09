/* ===========================================================
 * NYCK PRIMITIVE TYPOGRAPHY
 * =========================================================== */

type FontStyle = {
  readonly fontSize: string;
  readonly lineHeight: string;
  readonly letterSpacing: string;
};

/* ── Font / Headings ── */
export const Headings = {
  'font-heading-xxl': { fontSize: '40px', lineHeight: '48px', letterSpacing: '-0.02em' },
  'font-heading-xl': { fontSize: '32px', lineHeight: '40px', letterSpacing: '-0.02em' },
  'font-heading-lg': { fontSize: '24px', lineHeight: '32px', letterSpacing: '-0.01em' },
  'font-heading-md': { fontSize: '20px', lineHeight: '28px', letterSpacing: '-0.01em' },
  'font-heading-sm': { fontSize: '18px', lineHeight: '24px', letterSpacing: '0em' },
  'font-heading-xs': { fontSize: '16px', lineHeight: '22px', letterSpacing: '0em' },
} as const satisfies Record<string, FontStyle>;

/* ── Font / Body ── */
export const Body = {
  'font-body-lg': { fontSize: '18px', lineHeight: '28px', letterSpacing: '0em' },
  'font-body-md': { fontSize: '16px', lineHeight: '24px', letterSpacing: '0em' },
  'font-body-sm': { fontSize: '14px', lineHeight: '20px', letterSpacing: '0em' },
} as const satisfies Record<string, FontStyle>;

/* ── Font / Captions ── */
export const Captions = {
  'font-caption-lg': { fontSize: '13px', lineHeight: '18px', letterSpacing: '0em' },
  'font-caption-md': { fontSize: '12px', lineHeight: '16px', letterSpacing: '0em' },
} as const satisfies Record<string, FontStyle>;

/* ── Font / Buttons ── */
export const Buttons = {
  'font-button-lg': { fontSize: '16px', lineHeight: '24px', letterSpacing: '0em' },
  'font-button-md': { fontSize: '14px', lineHeight: '20px', letterSpacing: '0em' },
  'font-button-sm': { fontSize: '13px', lineHeight: '18px', letterSpacing: '0em' },
} as const satisfies Record<string, FontStyle>;

/* ── Font / Micro ── */
export const Micro = {
  'font-micro': { fontSize: '11px', lineHeight: '14px', letterSpacing: '0.02em' },
  'font-micro-sm': { fontSize: '10px', lineHeight: '12px', letterSpacing: '0.02em' },
} as const satisfies Record<string, FontStyle>;

/* ── Font / Weight ── */
export const Weight = {
  'font-weight-regular': 400,
  'font-weight-medium': 500,
  'font-weight-semibold': 600,
  'font-weight-bold': 700,
} as const;

/* ── Font / Family ── */
export const Family = {
  'font-family-heading': 'Geist',
  'font-family-body': 'Inter',
  'font-family-mono': 'Geist Mono',
} as const;
