import {
  Headings,
  Body,
  Captions,
  Buttons,
  Micro,
  Weight,
  Family,
} from "@/Design System/Foundations/typography";

export type FontSizeTokenEntry = {
  name: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  category: string;
};

export type FontValueTokenEntry = {
  name: string;
  value: string;
  category: string;
};

function extractCategory(tokenName: string): string {
  const withoutPrefix = tokenName.replace(/^font-/, "");
  const dash = withoutPrefix.indexOf("-");
  return dash === -1 ? withoutPrefix : withoutPrefix.slice(0, dash);
}

function buildSizeTokens(
  source: Record<string, { fontSize: string; lineHeight: string; letterSpacing: string }>,
): FontSizeTokenEntry[] {
  return Object.entries(source).map(([name, style]) => ({
    name,
    fontSize: style.fontSize,
    lineHeight: style.lineHeight,
    letterSpacing: style.letterSpacing,
    category: extractCategory(name),
  }));
}

export const headingTokens = buildSizeTokens(Headings);
export const bodyTokens = buildSizeTokens(Body);
export const captionTokens = buildSizeTokens(Captions);
export const buttonTokens = buildSizeTokens(Buttons);
export const microTokens = buildSizeTokens(Micro);

export const allFontSizeTokens: FontSizeTokenEntry[] = [
  ...headingTokens,
  ...bodyTokens,
  ...captionTokens,
  ...buttonTokens,
  ...microTokens,
];

export const weightTokens: FontValueTokenEntry[] = Object.entries(Weight).map(
  ([name, value]) => ({
    name,
    value: String(value),
    category: "weight",
  }),
);

export const familyTokens: FontValueTokenEntry[] = Object.entries(Family).map(
  ([name, value]) => ({
    name,
    value,
    category: "family",
  }),
);

export type FontTokenGroup = {
  category: string;
  description: string;
};

export const fontSizeCategoryDescriptions: Record<string, string> = {
  heading:
    "Use for page titles, section headings, and prominent labels. Rendered in Geist.",
  body:
    "Use for paragraphs, descriptions, and general content. Rendered in Inter.",
  caption:
    "Use for secondary labels, helper text, and metadata. Rendered in Inter.",
  button:
    "Use for button labels and inline actions across all button sizes. Rendered in Inter.",
  micro:
    "Use for badges, tags, and the smallest interface labels. Rendered in Inter.",
};

export const fontSizeCategoryFamilies: Record<string, string> = {
  heading: "Geist",
  body: "Inter",
  caption: "Inter",
  button: "Inter",
  micro: "Inter",
};

export const fontValueCategoryDescriptions: Record<string, string> = {
  weight:
    "Available font weights applied across headings, body, and UI text.",
  family:
    "Font families assigned to each typographic role in the system.",
};
