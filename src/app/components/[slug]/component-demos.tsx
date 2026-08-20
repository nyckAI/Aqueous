"use client";

import React, { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Alert,
  AlertIcon,
  AlertBody,
  AlertContent,
  AlertTitle,
  AlertDescription,
  AlertActions,
  AlertAction,
  AlertClose,
} from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogIcon,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import {
  Attachment,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentActions,
  AttachmentAction,
} from "@/components/ui/attachment";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { CalendarBasic, CalendarLarge, CalendarDateTime } from "@/components/ui/calendar";
import type { DateRange } from "react-day-picker";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Marker, MarkerIcon, MarkerContent } from "@/components/ui/marker";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import {
  TextField,
  OpaqueTextField,
  TextFieldGroup,
  TextFieldLabel,
  TextFieldDescription,
} from "@/components/ui/textfield";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import {
  Questionnaire,
  QuestionnaireItem,
  QuestionnaireTitle,
  QuestionnaireChoices,
  QuestionnaireChoice,
  QuestionnaireActions,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireSubmit,
} from "@/components/ui/questionnaire";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Sidebar as RealSidebar } from "@/components/sidebar/Sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toaster, toast } from "@/components/ui/toast";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  BoldIcon,
  ItalicIcon,
  Info,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Bell,
  Upload,
  SquarePen,
  FileText,
  Bold,
  Italic,
  Underline,
  Inbox,
} from "lucide-react";
import {
  BarChart as RechartsBarChart,
  Bar as RechartsBar,
  XAxis as RechartsXAxis,
  YAxis as RechartsYAxis,
  CartesianGrid as RechartsCartesianGrid,
} from "recharts";

type Demo = { preview: React.ReactNode; code: string };

// ---------------------------------------------------------------------------
// Stateful wrapper components (hooks cannot be called in plain functions)
// ---------------------------------------------------------------------------

function CalendarDemoPreview() {
  const [basicRange, setBasicRange] = useState<DateRange | undefined>({
    from: new Date(2026, 3, 16),
    to: new Date(2026, 3, 19),
  });
  const [largeRange, setLargeRange] = useState<DateRange | undefined>();
  const [dateTime, setDateTime] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h4 className="text-sm font-medium">Basic</h4>
        <CalendarBasic
          mode="range"
          defaultMonth={new Date(2026, 3, 1)}
          selected={basicRange}
          onSelect={setBasicRange}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-sm font-medium">Large</h4>
        <CalendarLarge
          mode="range"
          selected={largeRange}
          onSelect={setLargeRange}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-sm font-medium">Date &amp; Time</h4>
        <CalendarDateTime
          mode="single"
          selected={dateTime}
          onSelect={setDateTime}
        />
      </div>
    </div>
  );
}

function CheckboxDemoPreview() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id="terms"
        checked={checked}
        onCheckedChange={(val) => setChecked(val === true)}
      />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}

function SwitchDemoPreview() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="flex items-center gap-2">
      <Switch
        id="airplane-mode"
        checked={enabled}
        onCheckedChange={setEnabled}
      />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}

function SliderDemoPreview() {
  return (
    <div className="w-full max-w-xs">
      <Slider
        defaultValue={[50]}
        max={100}
        min={0}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Demo factory functions
// ---------------------------------------------------------------------------

function AccordionDemo(): Demo {
  return {
    preview: (
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match your design system.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It uses CSS animations for smooth transitions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    code: `<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match your design system.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It uses CSS animations for smooth transitions.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
  };
}

function AlertDemo(): Demo {
  return {
    preview: (
      <div className="flex w-full flex-col gap-3">
        <Alert>
          <AlertBody>
            <AlertIcon>
              <Bell />
            </AlertIcon>
            <AlertContent>
              <AlertTitle>I&apos;m a toast!</AlertTitle>
              <AlertDescription>description here</AlertDescription>
              <AlertActions>
                <AlertAction>Action</AlertAction>
                <AlertAction>Action</AlertAction>
              </AlertActions>
            </AlertContent>
          </AlertBody>
          <AlertClose />
        </Alert>
        <Alert variant="info">
          <AlertBody>
            <AlertIcon>
              <Info />
            </AlertIcon>
            <AlertContent>
              <AlertTitle>Info</AlertTitle>
              <AlertDescription>
                A new version of the design system is available.
              </AlertDescription>
              <AlertActions>
                <AlertAction>Action</AlertAction>
                <AlertAction>Action</AlertAction>
              </AlertActions>
            </AlertContent>
          </AlertBody>
          <AlertClose />
        </Alert>
        <Alert variant="success">
          <AlertBody>
            <AlertIcon>
              <CheckCircle2 />
            </AlertIcon>
            <AlertContent>
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your changes have been saved successfully.
              </AlertDescription>
              <AlertActions>
                <AlertAction>Action</AlertAction>
                <AlertAction>Action</AlertAction>
              </AlertActions>
            </AlertContent>
          </AlertBody>
          <AlertClose />
        </Alert>
        <Alert variant="warning">
          <AlertBody>
            <AlertIcon>
              <AlertTriangle />
            </AlertIcon>
            <AlertContent>
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                This action may have unintended consequences.
              </AlertDescription>
              <AlertActions>
                <AlertAction>Action</AlertAction>
                <AlertAction>Action</AlertAction>
              </AlertActions>
            </AlertContent>
          </AlertBody>
          <AlertClose />
        </Alert>
        <Alert variant="error">
          <AlertBody>
            <AlertIcon>
              <XCircle />
            </AlertIcon>
            <AlertContent>
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your session has expired. Please log in again.
              </AlertDescription>
              <AlertActions>
                <AlertAction>Action</AlertAction>
                <AlertAction>Action</AlertAction>
              </AlertActions>
            </AlertContent>
          </AlertBody>
          <AlertClose />
        </Alert>
      </div>
    ),
    code: `<Alert>
  <AlertBody>
    <AlertIcon>
      <Bell />
    </AlertIcon>
    <AlertContent>
      <AlertTitle>I'm a toast!</AlertTitle>
      <AlertDescription>description here</AlertDescription>
      <AlertActions>
        <AlertAction>Action</AlertAction>
        <AlertAction>Action</AlertAction>
      </AlertActions>
    </AlertContent>
  </AlertBody>
  <AlertClose />
</Alert>

<Alert variant="info">
  <AlertBody>
    <AlertIcon>
      <Info />
    </AlertIcon>
    <AlertContent>
      <AlertTitle>Info</AlertTitle>
      <AlertDescription>
        A new version of the design system is available.
      </AlertDescription>
      <AlertActions>
        <AlertAction>Action</AlertAction>
        <AlertAction>Action</AlertAction>
      </AlertActions>
    </AlertContent>
  </AlertBody>
  <AlertClose />
</Alert>

<Alert variant="success">
  <AlertBody>
    <AlertIcon>
      <CheckCircle2 />
    </AlertIcon>
    <AlertContent>
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
      <AlertActions>
        <AlertAction>Action</AlertAction>
        <AlertAction>Action</AlertAction>
      </AlertActions>
    </AlertContent>
  </AlertBody>
  <AlertClose />
</Alert>

<Alert variant="warning">
  <AlertBody>
    <AlertIcon>
      <AlertTriangle />
    </AlertIcon>
    <AlertContent>
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        This action may have unintended consequences.
      </AlertDescription>
      <AlertActions>
        <AlertAction>Action</AlertAction>
        <AlertAction>Action</AlertAction>
      </AlertActions>
    </AlertContent>
  </AlertBody>
  <AlertClose />
</Alert>

<Alert variant="error">
  <AlertBody>
    <AlertIcon>
      <XCircle />
    </AlertIcon>
    <AlertContent>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
      <AlertActions>
        <AlertAction>Action</AlertAction>
        <AlertAction>Action</AlertAction>
      </AlertActions>
    </AlertContent>
  </AlertBody>
  <AlertClose />
</Alert>`,
  };
}

const ALERT_DIALOG_VARIANTS = [
  { key: "default", label: "Default" },
  { key: "danger", label: "Danger" },
  { key: "success", label: "Success" },
  { key: "warning", label: "Warning" },
  { key: "info", label: "Info" },
] as const;

function AlertDialogDemo(): Demo {
  return {
    preview: (
      <div className="flex flex-wrap gap-2">
        {ALERT_DIALOG_VARIANTS.map(({ key, label }) => (
          <AlertDialog key={key}>
            <AlertDialogTrigger render={<Button variant="default" />}>
              {label}
            </AlertDialogTrigger>
            <AlertDialogContent variant={key}>
              <AlertDialogHeader>
                <AlertDialogIcon />
                <AlertDialogTitle>Title Here</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription>
                The message of this pop up modal goes here
              </AlertDialogDescription>
              <AlertDialogFooter>
                <AlertDialogCancel>Action</AlertDialogCancel>
                <AlertDialogAction>Action</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ))}
      </div>
    ),
    code: `<AlertDialog>
  <AlertDialogTrigger render={<Button variant="default" />}>
    Danger
  </AlertDialogTrigger>
  <AlertDialogContent variant="danger">
    <AlertDialogHeader>
      <AlertDialogIcon />
      <AlertDialogTitle>Title Here</AlertDialogTitle>
    </AlertDialogHeader>
    <AlertDialogDescription>
      The message of this pop up modal goes here
    </AlertDialogDescription>
    <AlertDialogFooter>
      <AlertDialogCancel>Action</AlertDialogCancel>
      <AlertDialogAction>Action</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

{/* variant: "default" | "danger" | "success" | "warning" | "info" */}`,
  };
}

function AvatarDemo(): Demo {
  return {
    preview: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    code: `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
  };
}

function BadgeDemo(): Demo {
  return {
    preview: (
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Informative</Badge>
        <Badge variant="success">Successful</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    ),
    code: `<Badge>Default</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="info">Informative</Badge>
<Badge variant="success">Successful</Badge>
<Badge variant="outline">Outline</Badge>`,
  };
}

function BreadcrumbDemo(): Demo {
  return {
    preview: (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    ),
    code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
  };
}

const BUTTON_TYPES = [
  { key: "default", label: "Default" },
  { key: "primary", label: "Primary" },
  { key: "subtle", label: "Subtle" },
  { key: "success", label: "Success" },
  { key: "danger", label: "Danger" },
  { key: "warning", label: "Warning" },
  { key: "info", label: "Info" },
] as const;

/* A button carries at most one icon — never both leading and trailing. */
const BUTTON_ICON_DIRECTIONS = [
  { key: "none", label: "No icon", left: false, right: false },
  { key: "left", label: "Icon left", left: true, right: false },
  { key: "right", label: "Icon right", left: false, right: true },
] as const;

const BUTTON_SIZES = [
  { key: "default", label: "Main buttons", note: "36px tall — 12px / 8px padding" },
  { key: "compact", label: "Compact buttons", note: "28px tall — 8px / 4px padding" },
] as const;

function ButtonDemo(): Demo {
  return {
    preview: (
      <div className="flex flex-col gap-12">
        {BUTTON_SIZES.map((size) => (
          <div key={size.key} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold">{size.label}</h3>
              <p className="text-sm text-muted-foreground">{size.note}</p>
            </div>
            {BUTTON_TYPES.map(({ key, label }) => (
              <div key={key} className="flex flex-col gap-3">
                <h4 className="text-sm font-medium">{label}</h4>
                <div className="flex flex-wrap gap-6">
                  {BUTTON_ICON_DIRECTIONS.map((direction) => (
                    <div
                      key={direction.key}
                      className="flex flex-col items-start gap-1.5"
                    >
                      <Button variant={key} size={size.key}>
                        {direction.left && <Upload data-icon="inline-start" />}
                        {label}
                        {direction.right && <Upload data-icon="inline-end" />}
                      </Button>
                      <span className="text-xs text-muted-foreground">
                        {direction.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    ),
    code: `{/* Main button (default size) — 36px tall */}
<Button variant="primary">
  <Upload data-icon="inline-start" />
  Primary
</Button>

{/* Compact button — 28px tall */}
<Button variant="primary" size="compact">
  <Upload data-icon="inline-start" />
  Primary
</Button>

{/* A button takes at most one icon — leading, trailing, or none.
   Never pair a leading and a trailing icon on the same button. */}
<Button variant="primary">Primary</Button>
<Button variant="primary">
  Primary
  <Upload data-icon="inline-end" />
</Button>

{/* Both sizes support every type:
   default | primary | subtle | success | danger | warning | info */}`,
  };
}

function CalendarDemo(): Demo {
  return {
    preview: <CalendarDemoPreview />,
    code: `{/* Basic — single month, no extra chrome */}
const [basicRange, setBasicRange] = useState<DateRange | undefined>();

<CalendarBasic
  mode="range"
  selected={basicRange}
  onSelect={setBasicRange}
/>

{/* Large — "From"/"To" text fields above two side-by-side months */}
const [largeRange, setLargeRange] = useState<DateRange | undefined>();

<CalendarLarge
  mode="range"
  selected={largeRange}
  onSelect={setLargeRange}
/>

{/* Date & Time — single month plus a time field and a confirm action */}
const [dateTime, setDateTime] = useState<Date | undefined>();

<CalendarDateTime
  mode="single"
  selected={dateTime}
  onSelect={setDateTime}
  onDone={() => console.log(dateTime)}
/>`,
  };
}

function CheckboxDemo(): Demo {
  return {
    preview: <CheckboxDemoPreview />,
    code: `const [checked, setChecked] = useState(false);

<div className="flex items-center gap-2">
  <Checkbox
    id="terms"
    checked={checked}
    onCheckedChange={(val) => setChecked(val === true)}
  />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`,
  };
}

function DropdownMenuDemo(): Demo {
  return {
    preview: (
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="default" />}>
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    code: `<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="default" />}>
    Open Menu
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  };
}

function HoverCardDemo(): Demo {
  return {
    preview: (
      <HoverCard>
        <HoverCardTrigger
          render={
            <a
              href="#"
              className="text-sm font-medium underline underline-offset-4"
            />
          }
        >
          Hover over me
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Hover Card</h4>
            <p className="text-sm text-muted-foreground">
              This content appears when you hover over the trigger.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    ),
    code: `<HoverCard>
  <HoverCardTrigger render={<a href="#" className="underline" />}>
    Hover over me
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="space-y-1">
      <h4 className="text-sm font-semibold">Hover Card</h4>
      <p className="text-sm text-muted-foreground">
        This content appears on hover.
      </p>
    </div>
  </HoverCardContent>
</HoverCard>`,
  };
}

function TextfieldDemo(): Demo {
  return {
    preview: (
      <div className="flex w-full max-w-md flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-semibold">Opaque text field</h3>
            <p className="text-sm text-muted-foreground">
              Filled search input with a leading magnifier.
            </p>
          </div>
          <OpaqueTextField />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-semibold">Text field</h3>
            <p className="text-sm text-muted-foreground">
              Takes at most one icon — leading, trailing, or none.
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <TextField placeholder="Default state" />
            <span className="text-xs text-muted-foreground">No icon</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <TextField icon={SquarePen} placeholder="Default state" />
            <span className="text-xs text-muted-foreground">Icon left</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <TextField
              icon={SquarePen}
              iconPosition="end"
              placeholder="Default state"
            />
            <span className="text-xs text-muted-foreground">Icon right</span>
          </div>
        </div>
      </div>
    ),
    code: `{/* Opaque text field */}
<OpaqueTextField />
<OpaqueTextField placeholder="Search suppliers" />

{/* Text field — no icon */}
<TextField placeholder="Default state" />

{/* Text field — icon left */}
<TextField icon={SquarePen} placeholder="Default state" />

{/* Text field — icon right */}
<TextField icon={SquarePen} iconPosition="end" placeholder="Default state" />

{/* A text field takes at most one icon. The single \`icon\` + \`iconPosition\`
   API makes a leading + trailing pair impossible to express. */}`,
  };
}

function InputOTPDemo(): Demo {
  return {
    preview: (
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    ),
    code: `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,
  };
}

const FIELD_DESCRIPTION =
  "This is the text field description. If any text field has a description, the description will be shown below the actual text field.";

function LabelDemo(): Demo {
  return {
    preview: (
      <div className="flex w-full max-w-md flex-col gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-semibold">Label and description</h3>
            <p className="text-sm text-muted-foreground">
              A label sits 4px above the field; a description sits 8px below it.
            </p>
          </div>
          <TextFieldGroup>
            <TextFieldLabel htmlFor="field-default">Field Label</TextFieldLabel>
            <TextField
              id="field-default"
              icon={SquarePen}
              placeholder="Default state"
            />
            <TextFieldDescription>{FIELD_DESCRIPTION}</TextFieldDescription>
          </TextFieldGroup>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-semibold">Label only</h3>
            <p className="text-sm text-muted-foreground">
              The description is optional — omit it and the label still applies.
            </p>
          </div>
          <TextFieldGroup>
            <TextFieldLabel htmlFor="field-no-desc">Field Label</TextFieldLabel>
            <TextField id="field-no-desc" placeholder="Default state" />
          </TextFieldGroup>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-semibold">Focused</h3>
            <p className="text-sm text-muted-foreground">
              Focusing the field switches its border to{" "}
              <code>--color-border-focused</code>. Click into the field below.
            </p>
          </div>
          <TextFieldGroup>
            <TextFieldLabel htmlFor="field-selected">Field Label</TextFieldLabel>
            <TextField
              id="field-selected"
              icon={SquarePen}
              iconPosition="end"
              placeholder="Selected state"
            />
            <TextFieldDescription>{FIELD_DESCRIPTION}</TextFieldDescription>
          </TextFieldGroup>
        </div>
      </div>
    ),
    code: `{/* Label + field + description */}
<TextFieldGroup>
  <TextFieldLabel htmlFor="field">Field Label</TextFieldLabel>
  <TextField id="field" icon={SquarePen} placeholder="Default state" />
  <TextFieldDescription>
    This is the text field description. If any text field has a description,
    the description will be shown below the actual text field.
  </TextFieldDescription>
</TextFieldGroup>

{/* The description is optional */}
<TextFieldGroup>
  <TextFieldLabel htmlFor="name">Field Label</TextFieldLabel>
  <TextField id="name" placeholder="Default state" />
</TextFieldGroup>`,
  };
}

function PaginationDemo(): Demo {
  return {
    preview: (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    ),
    code: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
  };
}

function PopoverDemo(): Demo {
  return {
    preview: (
      <Popover>
        <PopoverTrigger render={<Button variant="default" />}>
          Open Popover
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Popover Title</PopoverTitle>
            <PopoverDescription>
              This is the popover description.
            </PopoverDescription>
          </PopoverHeader>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2" />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    ),
    code: `<Popover>
  <PopoverTrigger render={<Button variant="default" />}>
    Open Popover
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Popover Title</PopoverTitle>
      <PopoverDescription>
        This is the popover description.
      </PopoverDescription>
    </PopoverHeader>
    <div className="grid gap-2">
      <Label htmlFor="width">Width</Label>
      <Input id="width" defaultValue="100%" />
    </div>
  </PopoverContent>
</Popover>`,
  };
}

function ProgressDemo(): Demo {
  return {
    preview: (
      <div className="w-full max-w-xs">
        <Progress value={60} />
      </div>
    ),
    code: `<Progress value={60} />`,
  };
}

function RadioGroupDemo(): Demo {
  return {
    preview: (
      <RadioGroup defaultValue="option-1">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label htmlFor="option-1">Option One</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-2" id="option-2" />
          <Label htmlFor="option-2">Option Two</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-3" id="option-3" />
          <Label htmlFor="option-3">Option Three</Label>
        </div>
      </RadioGroup>
    ),
    code: `<RadioGroup defaultValue="option-1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option One</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-2" id="option-2" />
    <Label htmlFor="option-2">Option Two</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-3" id="option-3" />
    <Label htmlFor="option-3">Option Three</Label>
  </div>
</RadioGroup>`,
  };
}

function ScrollAreaDemo(): Demo {
  return {
    preview: (
      <ScrollArea className="h-48 w-full max-w-xs rounded-md border p-4">
        <div className="space-y-4">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="text-sm">
              Item {i + 1} - Scrollable content
            </div>
          ))}
        </div>
      </ScrollArea>
    ),
    code: `<ScrollArea className="h-48 w-full max-w-xs rounded-md border p-4">
  <div className="space-y-4">
    {Array.from({ length: 20 }, (_, i) => (
      <div key={i} className="text-sm">
        Item {i + 1} - Scrollable content
      </div>
    ))}
  </div>
</ScrollArea>`,
  };
}

function SelectDemo(): Demo {
  return {
    preview: (
      <Select defaultValue="apple">
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
          <SelectItem value="date">Date</SelectItem>
        </SelectContent>
      </Select>
    ),
    code: `<Select defaultValue="apple">
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="cherry">Cherry</SelectItem>
    <SelectItem value="date">Date</SelectItem>
  </SelectContent>
</Select>`,
  };
}

function SeparatorDemo(): Demo {
  return {
    preview: (
      <div className="w-full max-w-xs">
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Section Title</h4>
          <p className="text-sm text-muted-foreground">Section description.</p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center gap-4 text-sm">
          <span>Blog</span>
          <Separator orientation="vertical" />
          <span>Docs</span>
          <Separator orientation="vertical" />
          <span>Source</span>
        </div>
      </div>
    ),
    code: `<div className="space-y-1">
  <h4 className="text-sm font-medium">Section Title</h4>
  <p className="text-sm text-muted-foreground">Section description.</p>
</div>
<Separator className="my-4" />
<div className="flex h-5 items-center gap-4 text-sm">
  <span>Blog</span>
  <Separator orientation="vertical" />
  <span>Docs</span>
  <Separator orientation="vertical" />
  <span>Source</span>
</div>`,
  };
}

function SheetDemo(): Demo {
  return {
    preview: (
      <Sheet>
        <SheetTrigger render={<Button variant="default" />}>
          Open Sheet
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>
              This is a sheet that slides in from the right.
            </SheetDescription>
          </SheetHeader>
          <div className="p-4">
            <p className="text-sm text-muted-foreground">
              Sheet body content goes here.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    ),
    code: `<Sheet>
  <SheetTrigger render={<Button variant="default" />}>
    Open Sheet
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>
        This is a sheet that slides in from the right.
      </SheetDescription>
    </SheetHeader>
    <div className="p-4">
      <p>Sheet body content goes here.</p>
    </div>
  </SheetContent>
</Sheet>`,
  };
}

function SkeletonDemo(): Demo {
  return {
    preview: (
      <div className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-36" />
        </div>
      </div>
    ),
    code: `<div className="flex items-center gap-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-48" />
    <Skeleton className="h-4 w-36" />
  </div>
</div>`,
  };
}

function SliderDemo(): Demo {
  return {
    preview: <SliderDemoPreview />,
    code: `<Slider
  defaultValue={[50]}
  max={100}
  min={0}
/>`,
  };
}

function SpinnerDemo(): Demo {
  return {
    preview: (
      <div className="flex items-center gap-4">
        <Spinner />
        <Spinner className="size-6" />
        <Spinner className="size-8" />
      </div>
    ),
    code: `<Spinner />
<Spinner className="size-6" />
<Spinner className="size-8" />`,
  };
}

function SwitchDemo(): Demo {
  return {
    preview: <SwitchDemoPreview />,
    code: `const [enabled, setEnabled] = useState(false);

<div className="flex items-center gap-2">
  <Switch
    id="airplane-mode"
    checked={enabled}
    onCheckedChange={setEnabled}
  />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`,
  };
}

function TableDemo(): Demo {
  return {
    preview: (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Alice Johnson</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob Smith</TableCell>
            <TableCell>Inactive</TableCell>
            <TableCell>User</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Carol White</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Editor</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
    code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Alice Johnson</TableCell>
      <TableCell>Active</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Bob Smith</TableCell>
      <TableCell>Inactive</TableCell>
      <TableCell>User</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Carol White</TableCell>
      <TableCell>Active</TableCell>
      <TableCell>Editor</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
  };
}

function TabsDemo(): Demo {
  return {
    preview: (
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <p className="text-sm text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </TabsContent>
        <TabsContent value="password">
          <p className="text-sm text-muted-foreground">
            Change your password and security settings.
          </p>
        </TabsContent>
        <TabsContent value="settings">
          <p className="text-sm text-muted-foreground">
            Configure your application settings.
          </p>
        </TabsContent>
      </Tabs>
    ),
    code: `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p>Manage your account settings and preferences.</p>
  </TabsContent>
  <TabsContent value="password">
    <p>Change your password and security settings.</p>
  </TabsContent>
  <TabsContent value="settings">
    <p>Configure your application settings.</p>
  </TabsContent>
</Tabs>`,
  };
}

function TextareaDemo(): Demo {
  return {
    preview: (
      <div className="w-full max-w-xs">
        <Textarea placeholder="Type your message here..." />
      </div>
    ),
    code: `<Textarea placeholder="Type your message here..." />`,
  };
}

function ToggleDemo(): Demo {
  return {
    preview: (
      <div className="flex gap-2">
        <Toggle aria-label="Toggle bold">
          <BoldIcon />
        </Toggle>
        <Toggle aria-label="Toggle italic">
          <ItalicIcon />
        </Toggle>
      </div>
    ),
    code: `<Toggle aria-label="Toggle bold">
  <BoldIcon />
</Toggle>
<Toggle aria-label="Toggle italic">
  <ItalicIcon />
</Toggle>`,
  };
}

function TooltipDemo(): Demo {
  return {
    preview: (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger render={<Button variant="default" />}>
            Hover me
          </TooltipTrigger>
          <TooltipContent>
            This is a tooltip
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger render={<Button variant="default" />}>
      Hover me
    </TooltipTrigger>
    <TooltipContent>
      This is a tooltip
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
  };
}

// ---------------------------------------------------------------------------
// Newly-registered component demos
// ---------------------------------------------------------------------------

function AttachmentDemo(): Demo {
  return {
    preview: (
      <Attachment className="max-w-xs">
        <AttachmentMedia>
          <FileText className="size-5" />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>design-tokens.pdf</AttachmentTitle>
          <AttachmentDescription>2.4 MB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove attachment">
            <XCircle />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    ),
    code: `<Attachment>
  <AttachmentMedia>
    <FileText />
  </AttachmentMedia>
  <AttachmentContent>
    <AttachmentTitle>design-tokens.pdf</AttachmentTitle>
    <AttachmentDescription>2.4 MB</AttachmentDescription>
  </AttachmentContent>
  <AttachmentActions>
    <AttachmentAction aria-label="Remove attachment">
      <XCircle />
    </AttachmentAction>
  </AttachmentActions>
</Attachment>`,
  };
}

const chartConfig = {
  visits: {
    label: "Visits",
    color: "var(--color-background-brand-emphasis)",
  },
} satisfies ChartConfig;

const chartData = [
  { day: "Mon", visits: 42 },
  { day: "Tue", visits: 58 },
  { day: "Wed", visits: 35 },
  { day: "Thu", visits: 71 },
  { day: "Fri", visits: 49 },
];

function ChartDemo(): Demo {
  return {
    preview: (
      <ChartContainer config={chartConfig} className="max-h-64 w-full">
        <RechartsBarChart data={chartData}>
          <RechartsCartesianGrid vertical={false} />
          <RechartsXAxis dataKey="day" tickLine={false} axisLine={false} />
          <RechartsYAxis hide domain={[0, "auto"]} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <RechartsBar
            dataKey="visits"
            fill="var(--color-visits)"
            radius={4}
            isAnimationActive={false}
          />
        </RechartsBarChart>
      </ChartContainer>
    ),
    code: `const chartConfig = {
  visits: { label: "Visits", color: "var(--color-background-brand-emphasis)" },
} satisfies ChartConfig;

<ChartContainer config={chartConfig}>
  <BarChart data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="day" tickLine={false} axisLine={false} />
    <YAxis hide domain={[0, "auto"]} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="visits" fill="var(--color-visits)" radius={4} />
  </BarChart>
</ChartContainer>`,
  };
}

function EmptyDemo(): Demo {
  return {
    preview: (
      <Empty className="w-full max-w-sm border border-dashed">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Inbox />
          </EmptyMedia>
          <EmptyTitle>No results</EmptyTitle>
          <EmptyDescription>
            Try adjusting your search or filters.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    ),
    code: `<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Inbox />
    </EmptyMedia>
    <EmptyTitle>No results</EmptyTitle>
    <EmptyDescription>
      Try adjusting your search or filters.
    </EmptyDescription>
  </EmptyHeader>
</Empty>`,
  };
}

function MarkerDemo(): Demo {
  return {
    preview: (
      <div className="flex w-full max-w-sm flex-col gap-3">
        <Marker>
          <MarkerIcon>
            <Bold className="size-4" />
          </MarkerIcon>
          <MarkerContent>Bold textformatting</MarkerContent>
        </Marker>
        <Marker variant="separator">
          <MarkerContent>or</MarkerContent>
        </Marker>
        <Marker>
          <MarkerIcon>
            <Italic className="size-4" />
          </MarkerIcon>
          <MarkerContent>Italic text formatting</MarkerContent>
        </Marker>
      </div>
    ),
    code: `<Marker>
  <MarkerIcon><Bold /></MarkerIcon>
  <MarkerContent>Bold text formatting</MarkerContent>
</Marker>
<Marker variant="separator">
  <MarkerContent>or</MarkerContent>
</Marker>`,
  };
}

function NativeSelectDemo(): Demo {
  return {
    preview: (
      <NativeSelect defaultValue="colors" className="w-full max-w-xs">
        <NativeSelectOption value="colors">Colors</NativeSelectOption>
        <NativeSelectOption value="typography">Typography</NativeSelectOption>
        <NativeSelectOption value="icons">Icons</NativeSelectOption>
      </NativeSelect>
    ),
    code: `<NativeSelect defaultValue="colors">
  <NativeSelectOption value="colors">Colors</NativeSelectOption>
  <NativeSelectOption value="typography">Typography</NativeSelectOption>
  <NativeSelectOption value="icons">Icons</NativeSelectOption>
</NativeSelect>`,
  };
}

function QuestionnaireDemo(): Demo {
  return {
    preview: (
      <Questionnaire
        items={[{ name: "role" }, { name: "experience" }]}
        className="w-full max-w-sm"
      >
        <QuestionnaireItem name="role">
          <QuestionnaireTitle>What&apos;s your role?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="design">Design</QuestionnaireChoice>
            <QuestionnaireChoice value="engineering">Engineering</QuestionnaireChoice>
          </QuestionnaireChoices>
        </QuestionnaireItem>
        <QuestionnaireItem name="experience">
          <QuestionnaireTitle>Years of experience?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="0-2">0–2</QuestionnaireChoice>
            <QuestionnaireChoice value="3-5">3–5</QuestionnaireChoice>
          </QuestionnaireChoices>
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireNext />
          <QuestionnaireSubmit />
        </QuestionnaireActions>
      </Questionnaire>
    ),
    code: `<Questionnaire items={[{ name: "role" }, { name: "experience" }]}>
  <QuestionnaireItem name="role">
    <QuestionnaireTitle>What's your role?</QuestionnaireTitle>
    <QuestionnaireChoices>
      <QuestionnaireChoice value="design">Design</QuestionnaireChoice>
      <QuestionnaireChoice value="engineering">Engineering</QuestionnaireChoice>
    </QuestionnaireChoices>
  </QuestionnaireItem>
  <QuestionnaireActions>
    <QuestionnairePrevious />
    <QuestionnaireNext />
    <QuestionnaireSubmit />
  </QuestionnaireActions>
</Questionnaire>`,
  };
}

function ResizableDemo(): Demo {
  return {
    preview: (
      <ResizablePanelGroup
        orientation="horizontal"
        className="h-40 w-full max-w-sm rounded-md border"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            One
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Two
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    ),
    code: `<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize={50}>One</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>Two</ResizablePanel>
</ResizablePanelGroup>`,
  };
}

function SidebarDemoPreview() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="relative h-[560px] w-full overflow-hidden rounded-lg border border-border-neutral [&_.sticky]:!h-full">
      <div className="flex h-full w-full">
        <RealSidebar
          collapsed={collapsed}
          onToggle={() => setCollapsed((prev) => !prev)}
        />
        <div className="flex min-w-0 flex-1 items-center justify-center bg-background-neutral">
          <p className="text-sm text-muted-foreground">Page content</p>
        </div>
      </div>
    </div>
  );
}

function SidebarDemo(): Demo {
  return {
    preview: <SidebarDemoPreview />,
    code: `const [collapsed, setCollapsed] = useState(false);

<div className="flex h-dvh w-full">
  <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((prev) => !prev)} />
  <div className="flex min-w-0 flex-1 flex-col">
    {children}
  </div>
</div>`,
  };
}

const TOAST_TYPES = [
  { type: "loading", label: "Default" },
  { type: "error", label: "Danger" },
  { type: "warning", label: "Warning" },
  { type: "success", label: "Success" },
  { type: "info", label: "Info" },
] as const;

function ToastDemoPreview() {
  return (
    <Toaster>
      <div className="flex flex-wrap gap-3">
        {TOAST_TYPES.map(({ type, label }) => (
          <Button
            key={type}
            variant="default"
            onClick={() =>
              toast.add({
                title: "I'm a toast!",
                description: "description here",
                type,
              })
            }
          >
            Show {label}
          </Button>
        ))}
      </div>
    </Toaster>
  );
}

function ToastDemo(): Demo {
  return {
    preview: <ToastDemoPreview />,
    code: `const toast = createToastManager();

{/* type: "loading" | "error" | "warning" | "success" | "info" */}
<Toaster>
  <Button
    onClick={() =>
      toast.add({
        title: "I'm a toast!",
        description: "description here",
        type: "success",
      })
    }
  >
    Show toast
  </Button>
</Toaster>`,
  };
}

function ToggleGroupDemo(): Demo {
  return {
    preview: (
      <ToggleGroup variant="outline">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    ),
    code: `<ToggleGroup variant="outline">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic />
  </ToggleGroupItem>
</ToggleGroup>`,
  };
}

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

const demos: Record<string, () => Demo> = {
  accordion: AccordionDemo,
  alert: AlertDemo,
  "alert-dialog": AlertDialogDemo,
  attachment: AttachmentDemo,
  avatar: AvatarDemo,
  badge: BadgeDemo,
  breadcrumb: BreadcrumbDemo,
  button: ButtonDemo,
  calendar: CalendarDemo,
  chart: ChartDemo,
  checkbox: CheckboxDemo,
  "dropdown-menu": DropdownMenuDemo,
  empty: EmptyDemo,
  "hover-card": HoverCardDemo,
  "input-otp": InputOTPDemo,
  label: LabelDemo,
  marker: MarkerDemo,
  "native-select": NativeSelectDemo,
  pagination: PaginationDemo,
  popover: PopoverDemo,
  progress: ProgressDemo,
  questionnaire: QuestionnaireDemo,
  "radio-group": RadioGroupDemo,
  resizable: ResizableDemo,
  "scroll-area": ScrollAreaDemo,
  select: SelectDemo,
  separator: SeparatorDemo,
  sheet: SheetDemo,
  sidebar: SidebarDemo,
  skeleton: SkeletonDemo,
  slider: SliderDemo,
  spinner: SpinnerDemo,
  switch: SwitchDemo,
  table: TableDemo,
  tabs: TabsDemo,
  textarea: TextareaDemo,
  textfield: TextfieldDemo,
  toast: ToastDemo,
  toggle: ToggleDemo,
  "toggle-group": ToggleGroupDemo,
  tooltip: TooltipDemo,
};

export function getComponentDemo(slug: string): Demo | null {
  const fn = demos[slug];
  return fn ? fn() : null;
}
