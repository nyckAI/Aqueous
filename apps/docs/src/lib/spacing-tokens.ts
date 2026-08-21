import { Spacing } from "@/Design System/Foundations/spacing";

export type SpacingTokenEntry = {
  name: string;
  value: string;
  /** Numeric px value, used to size preview bars. */
  px: number;
};

export const spacingTokens: SpacingTokenEntry[] = Object.entries(Spacing).map(
  ([name, value]) => ({
    name,
    value,
    px: parseInt(value, 10),
  }),
);

export const spacingScaleDescription =
  "The spacing scale drives padding, margin, and gap across the product. Use the smallest token that satisfies the layout to keep density consistent.";
