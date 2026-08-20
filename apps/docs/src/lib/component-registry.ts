export type ComponentMeta = {
  slug: string;
  name: string;
  description: string;
  /**
   * Whether this component is audited against Nyck design tokens and
   * considered stable enough to ship in the @nyckai/aqueous-ui package.
   * This is the single source of truth for both the sidebar checkmark
   * and the packages/ui publish manifest (scripts/sync-ui-package.ts
   * reads this flag directly) — do not track a separate list anywhere.
   */
  published: boolean;
};

export const componentRegistry: ComponentMeta[] = [
  { slug: "accordion", name: "Accordion", description: "A vertically stacked set of interactive headings that reveal content.", published: true },
  { slug: "alert", name: "Alert", description: "Displays a callout for important information.", published: true },
  { slug: "alert-dialog", name: "Alert Dialog", description: "A modal dialog that interrupts the user with important content and expects a response.", published: true },
  { slug: "attachment", name: "Attachment", description: "Displays an uploaded file with a preview, title, and actions.", published: true },
  { slug: "avatar", name: "Avatar", description: "An image element with a fallback for representing the user.", published: true },
  { slug: "badge", name: "Badge", description: "Displays a small status descriptor.", published: true },
  { slug: "breadcrumb", name: "Breadcrumb", description: "Displays the path to the current page using a hierarchy of links.", published: true },
  { slug: "button", name: "Button", description: "Displays a clickable button or a component that looks like a button.", published: true },
  { slug: "calendar", name: "Calendar", description: "A date picker with Basic, Large (date-range), and Date & Time variants.", published: true },
  { slug: "chart", name: "Chart", description: "Composable charts built on top of Recharts.", published: false },
  { slug: "checkbox", name: "Checkbox", description: "A control that allows the user to toggle between checked and unchecked.", published: true },
  { slug: "dropdown-menu", name: "Dropdown Menu", description: "Displays a menu triggered by a button.", published: false },
  { slug: "empty", name: "Empty", description: "Displays an empty state placeholder for a list, page, or section.", published: false },
  { slug: "hover-card", name: "Hover Card", description: "For sighted users to preview content available behind a link.", published: false },
  { slug: "input-otp", name: "Input OTP", description: "Accessible one-time password component with copy-paste functionality.", published: false },
  { slug: "label", name: "Label", description: "Labels and descriptions for text fields.", published: true },
  { slug: "marker", name: "Marker", description: "A small inline marker for separators and section markers in text.", published: false },
  { slug: "native-select", name: "Native Select", description: "A styled wrapper around the native HTML select element.", published: false },
  { slug: "pagination", name: "Pagination", description: "Pagination with page navigation, previous and next links.", published: false },
  { slug: "popover", name: "Popover", description: "Displays rich content in a portal, triggered by a button.", published: false },
  { slug: "progress", name: "Progress", description: "Displays an indicator showing the completion progress of a task.", published: false },
  { slug: "questionnaire", name: "Questionnaire", description: "A multi-step form for stepping through a sequence of questions.", published: false },
  { slug: "radio-group", name: "Radio Group", description: "A set of checkable buttons where only one can be checked at a time.", published: true },
  { slug: "resizable", name: "Resizable", description: "Accessible resizable panel groups and layouts.", published: false },
  { slug: "scroll-area", name: "Scroll Area", description: "Augments native scroll functionality for custom, cross-browser styling.", published: false },
  { slug: "select", name: "Select", description: "Displays a list of options for the user to pick from.", published: false },
  { slug: "separator", name: "Separator", description: "Visually or semantically separates content.", published: false },
  { slug: "sheet", name: "Sheet", description: "Extends the Dialog component to display content that complements the main content.", published: false },
  { slug: "sidebar", name: "Sidebar", description: "The collapsible app navigation sidebar used throughout this site.", published: false },
  { slug: "skeleton", name: "Skeleton", description: "Used to show a placeholder while content is loading.", published: true },
  { slug: "slider", name: "Slider", description: "An input where the user selects a value from within a given range.", published: true },
  { slug: "spinner", name: "Spinner", description: "Displays a loading spinner indicator.", published: true },
  { slug: "switch", name: "Switch", description: "A control that allows the user to toggle between on and off.", published: true },
  { slug: "table", name: "Table", description: "A responsive table component.", published: false },
  { slug: "tabs", name: "Tabs", description: "A set of layered sections of content displayed one at a time.", published: false },
  { slug: "textarea", name: "Textarea", description: "Displays a form textarea field.", published: true },
  { slug: "textfield", name: "Textfield", description: "Text and search input fields.", published: true },
  { slug: "toast", name: "Toast", description: "A succinct message that is displayed temporarily.", published: true },
  { slug: "toggle", name: "Toggle", description: "A two-state button that can be either on or off.", published: true },
  { slug: "toggle-group", name: "Toggle Group", description: "A set of two-state buttons that can be toggled on or off.", published: true },
  { slug: "tooltip", name: "Tooltip", description: "A popup that displays information related to an element on hover.", published: true },
];
