import React from "react";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="h-14 sm:h-16 border-b border-border/50 bg-background sticky top-0 z-50 shadow-sm">
      <div className="flex h-full items-center justify-between px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#1890ff] to-[#0050b3] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm sm:text-lg">FG</span>
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-foreground">
              FakeGroq
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">
              Asisten Chat AI
            </p>
          </div>
        </div>
        <Badge
          variant="secondary"
          className="text-xs bg-[#1890ff]/10 text-[#1890ff] border-[#1890ff]/20"
        >
          Beta
        </Badge>
      </div>
    </header>
  );
}
