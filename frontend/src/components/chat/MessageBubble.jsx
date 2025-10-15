import React from "react";

export function MessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`flex ${
          isUser ? "flex-row-reverse" : "flex-row"
        } items-end gap-2 max-w-[85%] sm:max-w-[75%]`}
      >
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
            isUser
              ? "bg-gradient-to-br from-blue-500 to-blue-600"
              : "bg-gradient-to-br from-[#1890ff] to-[#0050b3]"
          }`}
        >
          <span className="text-white font-bold text-xs">
            {isUser ? "A" : "AI"}
          </span>
        </div>

        <div
          className={`rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 ${
            isUser
              ? "bg-gradient-to-r from-[#1890ff] to-[#0050b3] text-white"
              : "bg-muted/50 border border-border/50 text-foreground"
          }`}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
            {message.content}
          </p>
          <span
            className={`text-xs mt-1 inline-block ${
              isUser ? "text-white/60" : "text-muted-foreground"
            }`}
          >
            {new Date(message.timestamp).toLocaleTimeString("id-ID", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
