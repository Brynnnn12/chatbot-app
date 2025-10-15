import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Plus, MessageSquare, Trash2 } from "lucide-react";

export function Sidebar({
  chats,
  currentChatId,
  onNewChat,
  onSelectChat,
  onClearHistory,
}) {
  return (
    <div className="flex flex-col h-full bg-background w-full">
      <div className="p-4">
        <Button
          onClick={onNewChat}
          className="w-full bg-gradient-to-r from-[#1890ff] to-[#0050b3] hover:from-[#1890ff]/90 hover:to-[#0050b3]/90 text-white"
          size="default"
        >
          <Plus className="mr-2 h-4 w-4" />
          Chat Baru
        </Button>
      </div>

      <Separator />

      <ScrollArea className="flex-1 px-4">
        <div className="space-y-1.5 py-3">
          {chats.length === 0 ? (
            <div className="text-center text-muted-foreground py-12">
              <MessageSquare className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p className="text-sm font-medium">Belum ada chat</p>
              <p className="text-xs mt-1.5">Mulai percakapan baru</p>
            </div>
          ) : (
            chats.map((chat) => (
              <Button
                key={chat.id}
                variant={currentChatId === chat.id ? "secondary" : "ghost"}
                className={`w-full justify-start text-left h-auto p-3 rounded-lg ${
                  currentChatId === chat.id
                    ? "bg-[#1890ff]/10 border border-[#1890ff]/20"
                    : ""
                }`}
                onClick={() => onSelectChat(chat.id)}
                size="default"
              >
                <MessageSquare className="mr-2.5 h-4 w-4 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{chat.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {chat.messages.length} pesan
                  </p>
                </div>
              </Button>
            ))
          )}
        </div>
      </ScrollArea>

      <Separator />

      <div className="p-4">
        <Button
          variant="ghost"
          className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={onClearHistory}
          size="default"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Hapus Riwayat
        </Button>
      </div>
    </div>
  );
}
