"use client";

import { useCallback, useRef, useState } from "react";
import { Sidebar } from "./Sidebar";

const DEFAULT_WIDTH = 224;
const MIN_WIDTH = 180;
const MAX_WIDTH = 400;
const COLLAPSED_WIDTH = 56;

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [collapsed, setCollapsed] = useState(false);
  const [resizing, setResizing] = useState(false);
  const isResizing = useRef(false);

  const handleResizeStart = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      isResizing.current = true;
      setResizing(true);

      const onMouseMove = (ev: MouseEvent) => {
        if (!isResizing.current) return;
        const next = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, ev.clientX));
        setWidth(next);
      };

      const onMouseUp = () => {
        isResizing.current = false;
        setResizing(false);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    },
    [],
  );

  const sidebarWidth = collapsed ? COLLAPSED_WIDTH : width;
  const transitionClass = resizing
    ? ""
    : "transition-[margin-left,width] duration-200";

  return (
    <>
      <Sidebar
        width={sidebarWidth}
        collapsed={collapsed}
        resizing={resizing}
        onToggle={() => setCollapsed((prev) => !prev)}
        onResizeStart={handleResizeStart}
      />
      <div
        className={`flex min-h-dvh min-w-0 flex-1 flex-col bg-background-neutral ${transitionClass}`}
        style={{ marginLeft: sidebarWidth }}
      >
        {children}
      </div>
    </>
  );
}
