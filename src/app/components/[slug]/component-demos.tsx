"use client";

import React, { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
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
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
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
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
import { Toggle } from "@/components/ui/toggle";
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
} from "lucide-react";

type Demo = { preview: React.ReactNode; code: string };

// ---------------------------------------------------------------------------
// Stateful wrapper components (hooks cannot be called in plain functions)
// ---------------------------------------------------------------------------

function CalendarDemoPreview() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
    />
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

function CollapsibleDemoPreview() {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="flex items-center gap-2">
        <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>
          {open ? "Hide" : "Show"} content
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className="mt-2 rounded-md border p-3 text-sm">
          This is the collapsible content. It can contain anything.
        </div>
      </CollapsibleContent>
    </Collapsible>
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
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
        <Alert variant="info">
          <Info />
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>
            A new version of the design system is available.
          </AlertDescription>
        </Alert>
        <Alert variant="success">
          <CheckCircle2 />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully.
          </AlertDescription>
        </Alert>
        <Alert variant="warning">
          <AlertTriangle />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            This action may have unintended consequences.
          </AlertDescription>
        </Alert>
        <Alert variant="error">
          <XCircle />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </div>
    ),
    code: `<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>

<Alert variant="info">
  <Info />
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>
    A new version of the design system is available.
  </AlertDescription>
</Alert>

<Alert variant="success">
  <CheckCircle2 />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>

<Alert variant="warning">
  <AlertTriangle />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    This action may have unintended consequences.
  </AlertDescription>
</Alert>

<Alert variant="error">
  <XCircle />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`,
  };
}

function AlertDialogDemo(): Demo {
  return {
    preview: (
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="outline" />}>
          Open Alert Dialog
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ),
    code: `<AlertDialog>
  <AlertDialogTrigger render={<Button variant="outline" />}>
    Open Alert Dialog
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
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
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    ),
    code: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
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

function ButtonDemo(): Demo {
  return {
    preview: (
      <div className="flex flex-wrap gap-2">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    ),
    code: `<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`,
  };
}

function CalendarDemo(): Demo {
  return {
    preview: <CalendarDemoPreview />,
    code: `const [date, setDate] = useState<Date | undefined>(new Date());

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>`,
  };
}

function CardDemo(): Demo {
  return {
    preview: (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content with some example text.</p>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">Card footer</p>
        </CardFooter>
      </Card>
    ),
    code: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content with some example text.</p>
  </CardContent>
  <CardFooter>
    <p className="text-sm text-muted-foreground">Card footer</p>
  </CardFooter>
</Card>`,
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

function CollapsibleDemo(): Demo {
  return {
    preview: <CollapsibleDemoPreview />,
    code: `const [open, setOpen] = useState(false);

<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>
    {open ? "Hide" : "Show"} content
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="mt-2 rounded-md border p-3 text-sm">
      This is the collapsible content.
    </div>
  </CollapsibleContent>
</Collapsible>`,
  };
}

function DialogDemo(): Demo {
  return {
    preview: (
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>
          Open Dialog
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a dialog description. It provides context for the dialog.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">
              Dialog body content goes here.
            </p>
          </div>
          <DialogFooter>
            <Button>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ),
    code: `<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>
    Open Dialog
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is a dialog description.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">
      <p>Dialog body content goes here.</p>
    </div>
    <DialogFooter>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  };
}

function DrawerDemo(): Demo {
  return {
    preview: (
      <Drawer>
        <DrawerTrigger render={<Button variant="outline" />}>
          Open Drawer
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>
              This is a drawer description.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p className="text-sm text-muted-foreground">
              Drawer body content goes here.
            </p>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose render={<Button variant="outline" />}>
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    ),
    code: `<Drawer>
  <DrawerTrigger render={<Button variant="outline" />}>
    Open Drawer
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Drawer Title</DrawerTitle>
      <DrawerDescription>
        This is a drawer description.
      </DrawerDescription>
    </DrawerHeader>
    <div className="p-4">
      <p>Drawer body content goes here.</p>
    </div>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose render={<Button variant="outline" />}>
        Cancel
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
  };
}

function DropdownMenuDemo(): Demo {
  return {
    preview: (
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>
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
  <DropdownMenuTrigger render={<Button variant="outline" />}>
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

function InputDemo(): Demo {
  return {
    preview: (
      <div className="w-full max-w-xs">
        <Input type="email" placeholder="Email address" />
      </div>
    ),
    code: `<Input type="email" placeholder="Email address" />`,
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

function LabelDemo(): Demo {
  return {
    preview: (
      <div className="grid w-full max-w-xs gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="you@example.com" />
      </div>
    ),
    code: `<Label htmlFor="email">Email</Label>
<Input type="email" id="email" placeholder="you@example.com" />`,
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
        <PopoverTrigger render={<Button variant="outline" />}>
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
  <PopoverTrigger render={<Button variant="outline" />}>
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
        <SheetTrigger render={<Button variant="outline" />}>
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
  <SheetTrigger render={<Button variant="outline" />}>
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
          <TooltipTrigger render={<Button variant="outline" />}>
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
    <TooltipTrigger render={<Button variant="outline" />}>
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
// Registry
// ---------------------------------------------------------------------------

const demos: Record<string, () => Demo> = {
  accordion: AccordionDemo,
  alert: AlertDemo,
  "alert-dialog": AlertDialogDemo,
  avatar: AvatarDemo,
  badge: BadgeDemo,
  breadcrumb: BreadcrumbDemo,
  button: ButtonDemo,
  calendar: CalendarDemo,
  card: CardDemo,
  checkbox: CheckboxDemo,
  collapsible: CollapsibleDemo,
  dialog: DialogDemo,
  drawer: DrawerDemo,
  "dropdown-menu": DropdownMenuDemo,
  "hover-card": HoverCardDemo,
  input: InputDemo,
  "input-otp": InputOTPDemo,
  label: LabelDemo,
  pagination: PaginationDemo,
  popover: PopoverDemo,
  progress: ProgressDemo,
  "radio-group": RadioGroupDemo,
  "scroll-area": ScrollAreaDemo,
  select: SelectDemo,
  separator: SeparatorDemo,
  sheet: SheetDemo,
  skeleton: SkeletonDemo,
  slider: SliderDemo,
  spinner: SpinnerDemo,
  switch: SwitchDemo,
  table: TableDemo,
  tabs: TabsDemo,
  textarea: TextareaDemo,
  toggle: ToggleDemo,
  tooltip: TooltipDemo,
};

export function getComponentDemo(slug: string): Demo | null {
  const fn = demos[slug];
  return fn ? fn() : null;
}
