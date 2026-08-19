export type ComponentMeta = {
  slug: string;
  name: string;
  description: string;
};

export const componentRegistry: ComponentMeta[] = [
  { slug: "accordion", name: "Accordion", description: "A vertically stacked set of interactive headings that reveal content." },
  { slug: "alert", name: "Alert", description: "Displays a callout for important information." },
  { slug: "alert-dialog", name: "Alert Dialog", description: "A modal dialog that interrupts the user with important content and expects a response." },
  { slug: "avatar", name: "Avatar", description: "An image element with a fallback for representing the user." },
  { slug: "badge", name: "Badge", description: "Displays a small status descriptor." },
  { slug: "breadcrumb", name: "Breadcrumb", description: "Displays the path to the current page using a hierarchy of links." },
  { slug: "button", name: "Button", description: "Displays a clickable button or a component that looks like a button." },
  { slug: "calendar", name: "Calendar", description: "A date field component that allows users to enter and edit date values." },
  { slug: "card", name: "Card", description: "Displays a card with header, content, and footer." },
  { slug: "checkbox", name: "Checkbox", description: "A control that allows the user to toggle between checked and unchecked." },
  { slug: "collapsible", name: "Collapsible", description: "An interactive component which expands and collapses content." },
  { slug: "dialog", name: "Dialog", description: "A window overlaid on the primary content, rendering content underneath inert." },
  { slug: "drawer", name: "Drawer", description: "A panel that slides out from the edge of the screen." },
  { slug: "dropdown-menu", name: "Dropdown Menu", description: "Displays a menu triggered by a button." },
  { slug: "hover-card", name: "Hover Card", description: "For sighted users to preview content available behind a link." },
  { slug: "textfield", name: "Textfield", description: "Text and search input fields." },
  { slug: "input-otp", name: "Input OTP", description: "Accessible one-time password component with copy-paste functionality." },
  { slug: "label", name: "Label", description: "Labels and descriptions for text fields." },
  { slug: "pagination", name: "Pagination", description: "Pagination with page navigation, previous and next links." },
  { slug: "popover", name: "Popover", description: "Displays rich content in a portal, triggered by a button." },
  { slug: "progress", name: "Progress", description: "Displays an indicator showing the completion progress of a task." },
  { slug: "radio-group", name: "Radio Group", description: "A set of checkable buttons where only one can be checked at a time." },
  { slug: "scroll-area", name: "Scroll Area", description: "Augments native scroll functionality for custom, cross-browser styling." },
  { slug: "select", name: "Select", description: "Displays a list of options for the user to pick from." },
  { slug: "separator", name: "Separator", description: "Visually or semantically separates content." },
  { slug: "sheet", name: "Sheet", description: "Extends the Dialog component to display content that complements the main content." },
  { slug: "skeleton", name: "Skeleton", description: "Used to show a placeholder while content is loading." },
  { slug: "slider", name: "Slider", description: "An input where the user selects a value from within a given range." },
  { slug: "spinner", name: "Spinner", description: "Displays a loading spinner indicator." },
  { slug: "switch", name: "Switch", description: "A control that allows the user to toggle between on and off." },
  { slug: "table", name: "Table", description: "A responsive table component." },
  { slug: "tabs", name: "Tabs", description: "A set of layered sections of content displayed one at a time." },
  { slug: "textarea", name: "Textarea", description: "Displays a form textarea field." },
  { slug: "toggle", name: "Toggle", description: "A two-state button that can be either on or off." },
  { slug: "tooltip", name: "Tooltip", description: "A popup that displays information related to an element on hover." },
];
