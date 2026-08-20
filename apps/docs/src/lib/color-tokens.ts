import {
  Background,
  Border,
  Text,
  Icon,
  Brand,
  Green,
  Neutral,
  Orange,
  Pink,
  Purple,
  Red,
  Slate,
  Teal,
  Yellow,
} from "@/Design System/Foundations/colors";

export type ColorTokenEntry = {
  name: string;
  hex: string;
  primitive: string;
  /** Color/attribute segment, e.g. brand, danger, accentgray */
  attribute: string;
};

const primitives: Record<string, string> = {
  ...Brand,
  ...Neutral,
  ...Green,
  ...Red,
  ...Orange,
  ...Yellow,
  ...Purple,
  ...Pink,
  ...Teal,
  ...Slate,
};

const STATE_SUFFIXES = ["-hover", "-pressed", "-disabled"] as const;

function findPrimitive(hex: string): string {
  const normalized = hex.toUpperCase();
  const match = Object.entries(primitives).find(
    ([, value]) => value.toUpperCase() === normalized,
  );
  return match?.[0] ?? "—";
}

/** Extracts attribute from color-background-{attribute}[-state] */
export function getBackgroundAttribute(tokenName: string): string {
  const withoutPrefix = tokenName.replace(/^color-background-/, "");
  for (const suffix of STATE_SUFFIXES) {
    if (withoutPrefix.endsWith(suffix)) {
      return withoutPrefix.slice(0, -suffix.length);
    }
  }
  return withoutPrefix;
}

/** Extracts attribute from color-border-{attribute} */
export function getBorderAttribute(tokenName: string): string {
  return tokenName.replace(/^color-border-/, "");
}

/** Extracts attribute from color-text-{attribute} */
export function getTextAttribute(tokenName: string): string {
  return tokenName.replace(/^color-text-/, "");
}

/** Extracts attribute from color-icon-{attribute} */
export function getIconAttribute(tokenName: string): string {
  return tokenName.replace(/^color-icon-/, "");
}

export const backgroundColorTokens: ColorTokenEntry[] = Object.entries(
  Background,
).map(([name, hex]) => ({
  name,
  hex,
  primitive: findPrimitive(hex),
  attribute: getBackgroundAttribute(name),
}));

export const borderColorTokens: ColorTokenEntry[] = Object.entries(
  Border,
).map(([name, hex]) => ({
  name,
  hex,
  primitive: findPrimitive(hex),
  attribute: getBorderAttribute(name),
}));

export const textColorTokens: ColorTokenEntry[] = Object.entries(
  Text,
).map(([name, hex]) => ({
  name,
  hex,
  primitive: findPrimitive(hex),
  attribute: getTextAttribute(name),
}));

export const iconColorTokens: ColorTokenEntry[] = Object.entries(
  Icon,
).map(([name, hex]) => ({
  name,
  hex,
  primitive: findPrimitive(hex),
  attribute: getIconAttribute(name),
}));

export type ColorTokenGroup = {
  attribute: string;
  tokens: ColorTokenEntry[];
  description: string;
};

/** Brief usage notes shown under each attribute group on the tokens page. */
export const backgroundAttributeDescriptions: Record<string, string> = {
  brand:
    "Use for brand-tinted surfaces and primary product backgrounds tied to Nyck identity.",
  neutral:
    "Default platform surfaces — page backgrounds, panels, and neutral containers used across the product.",
  selected:
    "Use when a surface is actively selected or highlighted in a list, table, or nav.",
  danger:
    "Use for destructive or error-related backgrounds such as danger modals and critical alerts.",
  warning:
    "Use for cautionary backgrounds such as warning banners and attention states.",
  success:
    "Use for positive confirmation backgrounds such as success toasts and completed states.",
  info: "Use for informational backgrounds that call attention without implying success or danger.",
  accentgray:
    "Use for backgrounds when there is no meaning tied to the color — a hint of gray for tags and chips.",
  accentgreen:
    "Use for backgrounds when there is no meaning tied to the color — a hint of green for tags and chips.",
  accentred:
    "Use for backgrounds when there is no meaning tied to the color — a hint of red for tags and chips.",
  accentorange:
    "Use for backgrounds when there is no meaning tied to the color — a hint of orange for tags and chips.",
  accentyellow:
    "Use for backgrounds when there is no meaning tied to the color — a hint of yellow for tags and chips.",
  accentpurple:
    "Use for backgrounds when there is no meaning tied to the color — a hint of purple for tags and chips.",
  accentpink:
    "Use for backgrounds when there is no meaning tied to the color — a hint of pink for tags and chips.",
  accentteal:
    "Use for backgrounds when there is no meaning tied to the color — a hint of teal for tags and chips.",
  accentslate:
    "Use for backgrounds when there is no meaning tied to the color — a hint of slate for tags and chips.",
};

export const borderAttributeDescriptions: Record<string, string> = {
  brand:
    "Use for borders that reinforce Nyck brand identity on primary interactive elements.",
  focused:
    "Use for focus rings and focus-visible outlines on interactive controls.",
  input:
    "Default border for form inputs, selects, and text areas in their resting state.",
  selected:
    "Use for borders on actively selected items in lists, cards, or navigation.",
  danger:
    "Use for borders that signal destructive actions or error states.",
  warning:
    "Use for borders that signal cautionary or attention-required states.",
  success:
    "Use for borders that signal positive confirmation or completed states.",
  info: "Use for informational borders that call attention without implying success or danger.",
  disabled:
    "Use for borders on disabled controls that should appear inactive.",
  accentgray:
    "Decorative border with no semantic meaning — a hint of gray for tags and chips.",
  accentgreen:
    "Decorative border with no semantic meaning — a hint of green for tags and chips.",
  accentred:
    "Decorative border with no semantic meaning — a hint of red for tags and chips.",
  accentorange:
    "Decorative border with no semantic meaning — a hint of orange for tags and chips.",
  accentyellow:
    "Decorative border with no semantic meaning — a hint of yellow for tags and chips.",
  accentpurple:
    "Decorative border with no semantic meaning — a hint of purple for tags and chips.",
  accentpink:
    "Decorative border with no semantic meaning — a hint of pink for tags and chips.",
  accentteal:
    "Decorative border with no semantic meaning — a hint of teal for tags and chips.",
  accentslate:
    "Decorative border with no semantic meaning — a hint of slate for tags and chips.",
};

export const textAttributeDescriptions: Record<string, string> = {
  primary:
    "Default text color for body copy, headings, and general content.",
  brand:
    "Use for text that reinforces Nyck brand identity — links, branded labels, and emphasis.",
  neutral:
    "Use for secondary or de-emphasized text such as captions, helper text, and metadata.",
  disabled:
    "Use for text on disabled controls that should appear inactive.",
  selected:
    "Use for text within actively selected or highlighted elements.",
  danger:
    "Use for text that signals destructive actions or error messages.",
  warning:
    "Use for text that signals cautionary or attention-required states.",
  success:
    "Use for text that signals positive confirmation or completed states.",
  info: "Use for informational text that calls attention without implying success or danger.",
  accentgray:
    "Decorative text with no semantic meaning — a hint of gray for tags and labels.",
  accentgreen:
    "Decorative text with no semantic meaning — a hint of green for tags and labels.",
  accentred:
    "Decorative text with no semantic meaning — a hint of red for tags and labels.",
  accentorange:
    "Decorative text with no semantic meaning — a hint of orange for tags and labels.",
  accentyellow:
    "Decorative text with no semantic meaning — a hint of yellow for tags and labels.",
  accentpurple:
    "Decorative text with no semantic meaning — a hint of purple for tags and labels.",
  accentpink:
    "Decorative text with no semantic meaning — a hint of pink for tags and labels.",
  accentteal:
    "Decorative text with no semantic meaning — a hint of teal for tags and labels.",
  accentslate:
    "Decorative text with no semantic meaning — a hint of slate for tags and labels.",
};

export const iconAttributeDescriptions: Record<string, string> = {
  primary:
    "Default icon color for general-purpose icons and actions.",
  brand:
    "Use for icons that reinforce Nyck brand identity.",
  neutral:
    "Use for secondary or de-emphasized icons such as helper indicators and metadata.",
  disabled:
    "Use for icons on disabled controls that should appear inactive.",
  selected:
    "Use for icons within actively selected or highlighted elements.",
  danger:
    "Use for icons that signal destructive actions or error states.",
  warning:
    "Use for icons that signal cautionary or attention-required states.",
  success:
    "Use for icons that signal positive confirmation or completed states.",
  info: "Use for informational icons that call attention without implying success or danger.",
  accentgray:
    "Decorative icon with no semantic meaning — a hint of gray for tags and badges.",
  accentgreen:
    "Decorative icon with no semantic meaning — a hint of green for tags and badges.",
  accentred:
    "Decorative icon with no semantic meaning — a hint of red for tags and badges.",
  accentorange:
    "Decorative icon with no semantic meaning — a hint of orange for tags and badges.",
  accentyellow:
    "Decorative icon with no semantic meaning — a hint of yellow for tags and badges.",
  accentpurple:
    "Decorative icon with no semantic meaning — a hint of purple for tags and badges.",
  accentpink:
    "Decorative icon with no semantic meaning — a hint of pink for tags and badges.",
  accentteal:
    "Decorative icon with no semantic meaning — a hint of teal for tags and badges.",
  accentslate:
    "Decorative icon with no semantic meaning — a hint of slate for tags and badges.",
};

export const totalTokenCount =
  backgroundColorTokens.length +
  borderColorTokens.length +
  textColorTokens.length +
  iconColorTokens.length;

export function groupTokensByAttribute(
  tokens: ColorTokenEntry[],
  descriptions: Record<string, string> = backgroundAttributeDescriptions,
  fallbackLabel = "Background",
): ColorTokenGroup[] {
  const groups: ColorTokenGroup[] = [];

  for (const token of tokens) {
    const last = groups[groups.length - 1];
    if (last && last.attribute === token.attribute) {
      last.tokens.push(token);
    } else {
      groups.push({
        attribute: token.attribute,
        tokens: [token],
        description:
          descriptions[token.attribute] ??
          `${fallbackLabel} tokens for the ${token.attribute} attribute.`,
      });
    }
  }

  return groups;
}
