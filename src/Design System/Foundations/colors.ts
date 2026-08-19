/* ===========================================================
 * NYCK PRIMITIVE COLORS
 * =========================================================== */

/* Nyck Brand Colors */
export const Brand = {
  'brand-100': '#F7FAFF',
  'brand-200': '#E9F1FF',
  'brand-300': '#B8D2FE',
  'brand-400': '#609AFF',
  'brand-500': '#0E6DF9',
  'brand-600': '#0553C7',
  'brand-700': '#073F94',
  'brand-800': '#18273F',
  'brand-900': '#08101E',
} as const;

/* Neutral Colors */
export const Neutral = {
  White: '#FFFFFF',
  'neutral-100': '#F7F7F7',
  'neutral-200': '#EDEDED',
  'neutral-300': '#E1E1E1',
  'neutral-400': '#9E9E9E',
  'neutral-500': '#626262',
  'neutral-700': '#37393D',
  Black: '#000000',
} as const;

/* Green Colors */
export const Green = {
  'green-50': '#F0FDF4',
  'green-100': '#DCFCE7',
  'green-200': '#BBF7D0',
  'green-300': '#86EFAC',
  'green-400': '#4ADE80',
  'green-500': '#22C55E',
  'green-600': '#16A34A',
  'green-700': '#15803D',
  'green-800': '#166534',
  'green-900': '#14532D',
  'green-950': '#052E16',
} as const;

/* Red Colors */
export const Red = {
  'red-50': '#FEF2F2',
  'red-100': '#FEE2E2',
  'red-200': '#FECACA',
  'red-300': '#FCA5A5',
  'red-400': '#F87171',
  'red-500': '#EF4444',
  'red-600': '#DC2626',
  'red-700': '#B91C1C',
  'red-800': '#991B1B',
  'red-900': '#7F1D1D',
  'red-950': '#450A0A',
} as const;

/* Orange Colors */
export const Orange = {
  'orange-50': '#FFF7ED',
  'orange-100': '#FFEDD5',
  'orange-200': '#FED7AA',
  'orange-300': '#FDBA74',
  'orange-400': '#FB923C',
  'orange-500': '#F97316',
  'orange-600': '#EA580C',
  'orange-700': '#C2410C',
  'orange-800': '#9A3412',
  'orange-900': '#7C2D12',
  'orange-950': '#431407',
} as const;

/* Yellow Colors */
export const Yellow = {
  'yellow-50': '#FEFCE8',
  'yellow-100': '#FEF9C3',
  'yellow-200': '#FEF08A',
  'yellow-300': '#FDE047',
  'yellow-400': '#FACC15',
  'yellow-500': '#EAB308',
  'yellow-600': '#CA8A04',
  'yellow-700': '#A16207',
  'yellow-800': '#854D0E',
  'yellow-900': '#713F12',
  'yellow-950': '#422006',
} as const;

/* Purple Colors */
export const Purple = {
  'purple-50': '#FAF5FF',
  'purple-100': '#F3E8FF',
  'purple-200': '#E9D5FF',
  'purple-300': '#D8B4FE',
  'purple-400': '#C084FC',
  'purple-500': '#A855F7',
  'purple-600': '#9333EA',
  'purple-700': '#7E22CE',
  'purple-800': '#6B21A8',
  'purple-900': '#581C87',
  'purple-950': '#3B0764',
} as const;

/* Pink Colors */
export const Pink = {
  'pink-50': '#FDF2F8',
  'pink-100': '#FCE7F3',
  'pink-200': '#FBCFE8',
  'pink-300': '#F9A8D4',
  'pink-400': '#F472B6',
  'pink-500': '#EC4899',
  'pink-600': '#DB2777',
  'pink-700': '#BE185D',
  'pink-800': '#9D174D',
  'pink-900': '#831843',
  'pink-950': '#500724',
} as const;

/* Teal Colors */
export const Teal = {
  'teal-50': '#F0F9FF',
  'teal-100': '#E0F2FE',
  'teal-200': '#BAE6FD',
  'teal-300': '#7DD3FC',
  'teal-400': '#38BDF8',
  'teal-500': '#0EA5E9',
  'teal-600': '#0284C7',
  'teal-700': '#0369A1',
  'teal-800': '#075985',
  'teal-900': '#0C4A6E',
  'teal-950': '#082F49',
} as const;

/* Slate Colors */
export const Slate = {
  'slate-50': '#F8FAFC',
  'slate-100': '#F1F5F9',
  'slate-200': '#E2E8F0',
  'slate-300': '#CBD5E1',
  'slate-400': '#94A3B8',
  'slate-500': '#64748B',
  'slate-600': '#475569',
  'slate-700': '#334155',
  'slate-800': '#1E293B',
  'slate-900': '#0F172A',
  'slate-950': '#020617',
} as const;




/* ===========================================================
 * NYCK SEMANTIC COLORS
 * =========================================================== */

/** Background semantics — values reference primitive tokens */
export const Background = {
    
  /* Important colors */
  'color-background-brand': Brand['brand-100'],
  'color-background-brand-hover': Brand['brand-200'],
  'color-background-brand-pressed': Brand['brand-300'],
  'color-background-brand-disabled': Brand['brand-100'],

  'color-background-neutral': Neutral.White,
  'color-background-neutral-hover': Neutral['neutral-100'],
  'color-background-neutral-pressed': Neutral['neutral-200'],
  'color-background-neutral-disabled': Neutral['neutral-100'],
  
  'color-background-selected': Brand['brand-200'],
  'color-background-selected-hover': Brand['brand-300'],
  'color-background-selected-pressed': Brand['brand-400'],
  'color-background-selected-disabled': Brand['brand-100'],

  'color-background-danger': Red['red-100'],
  'color-background-danger-hover': Red['red-200'],
  'color-background-danger-pressed': Red['red-300'],
  'color-background-danger-disabled': Red['red-50'],

  'color-background-warning': Orange['orange-100'],
  'color-background-warning-hover': Orange['orange-200'],
  'color-background-warning-pressed': Orange['orange-300'],
  'color-background-warning-disabled': Orange['orange-50'],

  'color-background-success': Green['green-100'],
  'color-background-success-hover': Green['green-200'],
  'color-background-success-pressed': Green['green-300'],
  'color-background-success-disabled': Green['green-50'],

  'color-background-info': Brand['brand-100'],
  'color-background-info-hover': Brand['brand-200'],
  'color-background-info-pressed': Brand['brand-300'],
  'color-background-info-disabled': Brand['brand-100'],

  /* Emphasis colors — solid, high-contrast fills (e.g. Main buttons) */
  'color-background-brand-emphasis': Brand['brand-500'],
  'color-background-brand-emphasis-hover': Brand['brand-600'],
  'color-background-brand-emphasis-pressed': Brand['brand-700'],

  'color-background-success-emphasis': Green['green-500'],
  'color-background-success-emphasis-hover': Green['green-600'],
  'color-background-success-emphasis-pressed': Green['green-700'],

  'color-background-danger-emphasis': Red['red-500'],
  'color-background-danger-emphasis-hover': Red['red-600'],
  'color-background-danger-emphasis-pressed': Red['red-700'],

  'color-background-warning-emphasis': Orange['orange-500'],
  'color-background-warning-emphasis-hover': Orange['orange-600'],
  'color-background-warning-emphasis-pressed': Orange['orange-700'],


  /* Non-important colors */
  'color-background-accentgray': Neutral['neutral-200'],
  'color-background-accentgray-hover': Neutral['neutral-300'],
  'color-background-accentgray-pressed': Neutral['neutral-400'],
  'color-background-accentgray-disabled': Neutral['neutral-100'],

  'color-background-accentgreen': Green['green-100'],
  'color-background-accentgreen-hover': Green['green-200'],
  'color-background-accentgreen-pressed': Green['green-300'],
  'color-background-accentgreen-disabled': Green['green-100'],

  'color-background-accentred': Red['red-100'],
  'color-background-accentred-hover': Red['red-200'],
  'color-background-accentred-pressed': Red['red-300'],
  'color-background-accentred-disabled': Red['red-100'],

  'color-background-accentorange': Orange['orange-100'],
  'color-background-accentorange-hover': Orange['orange-200'],
  'color-background-accentorange-pressed': Orange['orange-300'],
  'color-background-accentorange-disabled': Orange['orange-100'],

  'color-background-accentyellow': Yellow['yellow-100'],
  'color-background-accentyellow-hover': Yellow['yellow-200'],
  'color-background-accentyellow-pressed': Yellow['yellow-300'],
  'color-background-accentyellow-disabled': Yellow['yellow-100'],

  'color-background-accentpurple': Purple['purple-100'],
  'color-background-accentpurple-hover': Purple['purple-200'],
  'color-background-accentpurple-pressed': Purple['purple-300'],
  'color-background-accentpurple-disabled': Purple['purple-100'],

  'color-background-accentpink': Pink['pink-100'],
  'color-background-accentpink-hover': Pink['pink-200'],
  'color-background-accentpink-pressed': Pink['pink-300'],
  'color-background-accentpink-disabled': Pink['pink-100'],
  
  'color-background-accentteal': Teal['teal-100'],
  'color-background-accentteal-hover': Teal['teal-200'],
  'color-background-accentteal-pressed': Teal['teal-300'],
  'color-background-accentteal-disabled': Teal['teal-100'],

  'color-background-accentslate': Slate['slate-100'],
  'color-background-accentslate-hover': Slate['slate-200'],
  'color-background-accentslate-pressed': Slate['slate-300'],
  'color-background-accentslate-disabled': Slate['slate-100'],


} as const;

export const Border ={
  'color-border-brand': Brand['brand-500'],
  'color-border-neutral': Neutral['neutral-300'],
  'color-border-focused': Brand['brand-500'],
  'color-border-input': Neutral['neutral-300'],
  'color-border-selected': Brand['brand-500'],
  'color-border-danger': Red['red-500'],
  'color-border-warning': Orange['orange-500'],
  'color-border-success': Green['green-500'],
  'color-border-info': Brand['brand-500'],
  'color-border-disabled': Neutral['neutral-200'],

  'color-border-accentgray': Neutral['neutral-500'],
  'color-border-accentgreen': Green['green-500'],
  'color-border-accentred': Red['red-500'],
  'color-border-accentorange': Orange['orange-500'],
  'color-border-accentyellow': Yellow['yellow-500'],
  'color-border-accentpurple': Purple['purple-500'],
  'color-border-accentpink': Pink['pink-500'],
  'color-border-accentteal': Teal['teal-500'],
  'color-border-accentslate': Slate['slate-500'],
}


/** Text semantics — values reference primitive tokens */
export const Text = {
  'color-text-primary': Neutral.Black,
  'color-text-brand': Brand['brand-500'],
  'color-text-neutral': Neutral['neutral-500'],
  'color-text-tertiary': Neutral['neutral-400'],
  'color-text-navigation': Neutral['neutral-700'],
  'color-text-disabled': Neutral['neutral-300'],
  'color-text-selected': Brand['brand-500'],
  'color-text-danger': Red['red-500'],
  'color-text-warning': Orange['orange-500'],
  'color-text-success': Green['green-500'],
  'color-text-info': Brand['brand-500'],
  'color-text-contrast': Neutral.White,

  'color-text-accentgray': Neutral['neutral-500'],
  'color-text-accentgreen': Green['green-500'],
  'color-text-accentred': Red['red-500'],
  'color-text-accentorange': Orange['orange-500'],
  'color-text-accentyellow': Yellow['yellow-500'],
  'color-text-accentpurple': Purple['purple-500'],
  'color-text-accentpink': Pink['pink-500'],
  'color-text-accentteal': Teal['teal-500'],
  'color-text-accentslate': Slate['slate-500'],
  
} as const;

/** Icon semantics — values reference primitive tokens */
export const Icon = {
  'color-icon-primary': Neutral.Black,
  'color-icon-brand': Brand['brand-500'],
  'color-icon-neutral': Neutral['neutral-500'],
  'color-icon-disabled': Neutral['neutral-300'],
  'color-icon-selected': Brand['brand-500'],
  'color-icon-danger': Red['red-500'],
  'color-icon-warning': Orange['orange-500'],
  'color-icon-success': Green['green-500'],
  'color-icon-info': Brand['brand-500'],
  'color-icon-contrast': Neutral.White,

  'color-icon-accentgray': Neutral['neutral-500'],
  'color-icon-accentgreen': Green['green-500'],
  'color-icon-accentred': Red['red-500'],
  'color-icon-accentorange': Orange['orange-500'],
  'color-icon-accentyellow': Yellow['yellow-500'],
  'color-icon-accentpurple': Purple['purple-500'],
  'color-icon-accentpink': Pink['pink-500'],
  'color-icon-accentteal': Teal['teal-500'],
  'color-icon-accentslate': Slate['slate-500'],
} as const;
