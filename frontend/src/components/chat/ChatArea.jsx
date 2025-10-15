import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Send, Loader2 } from "lucide-react";
import { MessageBubble } from "./MessageBubble";

export function ChatArea({ chat, onSendMessage }) {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const message = input.trim();
    setInput("");
    setIsLoading(true);

    await onSendMessage(message);
    setIsLoading(false);
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      // Scroll to bottom when new messages arrive
      const viewport = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [chat?.messages, isLoading]);

  if (!chat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background p-4">
        <div className="text-center space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#1890ff] to-[#0050b3] rounded-2xl flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-2xl sm:text-3xl">
              FG
            </span>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              Selamat Datang di FakeGroq
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Asisten AI siap membantu Anda
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="px-3 py-1.5 bg-muted/50 rounded-full text-xs sm:text-sm">
              💬 Percakapan Alami
            </div>
            <div className="px-3 py-1.5 bg-muted/50 rounded-full text-xs sm:text-sm">
              ⚡ Respon Cepat
            </div>
            <div className="px-3 py-1.5 bg-muted/50 rounded-full text-xs sm:text-sm">
              🧠 AI Cerdas
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-background overflow-hidden">
      <ScrollArea className="flex-1 p-3 sm:p-4" ref={scrollAreaRef}>
        <div className="space-y-4 max-w-4xl mx-auto">
          {chat.messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isLoading && (
            <div className="flex justify-start px-2">
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 bg-gradient-to-br from-[#1890ff] to-[#0050b3] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">FG</span>
                </div>
                <div className="bg-muted/50 border border-border/50 rounded-2xl px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-[#1890ff] rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-[#1890ff] rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-[#1890ff] rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      AI sedang berpikir...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="border-t border-border bg-background p-3 sm:p-4">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pesan Anda..."
              className="flex-1 rounded-xl"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-gradient-to-r from-[#1890ff] to-[#0050b3] hover:from-[#1890ff]/90 hover:to-[#0050b3]/90 text-white rounded-xl"
              size="default"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
              ) : (
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
