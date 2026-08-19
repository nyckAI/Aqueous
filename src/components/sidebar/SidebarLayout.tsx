"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-dvh w-full">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((prev) => !prev)} />
      <div className="flex min-h-dvh min-w-0 flex-1 flex-col bg-background-neutral">
        {children}
      </div>
    </div>
  );
}
