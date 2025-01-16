"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const tabsListRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateIndicator = () => {
      if (tabsListRef.current) {
        const activeTab = tabsListRef.current.querySelector<HTMLElement>(
          '[data-state="active"]',
        );

        if (activeTab) {
          const activeRect = activeTab.getBoundingClientRect();
          const tabsRect = tabsListRef.current.getBoundingClientRect();
          setIndicatorStyle({
            left: activeRect.left - tabsRect.left,
            top: activeRect.top - tabsRect.top,
            width: activeRect.width,
            height: activeRect.height,
          });
        }
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    const observer = new MutationObserver(updateIndicator);
    if (tabsListRef.current) {
      observer.observe(tabsListRef.current, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }
    return () => {
      window.removeEventListener("resize", updateIndicator);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative" ref={tabsListRef}>
      <TabsPrimitive.List
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-full bg-[#C3C3C3]/30 px-2 py-1.5 text-neutral-300 dark:bg-[#C3C3C3]/30 dark:text-neutral-300",
          className,
        )}
        {...props}
      />
      <div
        className="absolute rounded-full bg-tedx-black shadow-sm transition-all duration-300 ease-in-out"
        style={indicatorStyle}
      />
    </div>
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "z-10 inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-base font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-white data-[state=active]:shadow-sm dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:data-[state=active]:text-white",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
