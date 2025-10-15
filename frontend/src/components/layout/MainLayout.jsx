import React, { useState } from "react";
import { Header } from "@/components/header/Header";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { ChatArea } from "@/components/chat/ChatArea";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { chatWithGroq } from "@/api/groq";

export default function MainLayout() {
  const [chats, setChats] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentChat = chats.find((chat) => chat.id === currentChatId);

  const handleNewChat = () => {
    const newChat = {
      id: Date.now().toString(),
      title: `Chat ${chats.length + 1}`,
      messages: [],
      createdAt: new Date(),
    };
    setChats((prev) => [newChat, ...prev]);
    setCurrentChatId(newChat.id);
  };

  const handleSelectChat = (chatId) => {
    setCurrentChatId(chatId);
    setSidebarOpen(false);
  };

  const handleSendMessage = async (content) => {
    if (!currentChatId) return;

    const newMessage = {
      id: Date.now().toString(),
      content,
      role: "user",
      timestamp: new Date(),
    };

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === currentChatId
          ? { ...chat, messages: [...chat.messages, newMessage] }
          : chat
      )
    );

    // Call Groq API
    const result = await chatWithGroq(content);

    if (result.success) {
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        content: result.response,
        role: "assistant",
        timestamp: new Date(),
      };
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === currentChatId
            ? { ...chat, messages: [...chat.messages, aiMessage] }
            : chat
        )
      );
    } else {
      // Handle error - maybe show error message
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        content: `Error: ${result.error}`,
        role: "assistant",
        timestamp: new Date(),
      };
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === currentChatId
            ? { ...chat, messages: [...chat.messages, errorMessage] }
            : chat
        )
      );
    }
  };

  const handleClearHistory = () => {
    setChats([]);
    setCurrentChatId(null);
  };

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex w-60 lg:w-64 border-r border-border/50">
          <Sidebar
            chats={chats}
            currentChatId={currentChatId}
            onNewChat={handleNewChat}
            onSelectChat={handleSelectChat}
            onClearHistory={handleClearHistory}
          />
        </div>

        {/* Mobile Sidebar */}
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden fixed bottom-4 right-4 z-50 h-12 w-12 bg-gradient-to-r from-[#1890ff] to-[#0050b3] hover:from-[#1890ff]/90 hover:to-[#0050b3]/90 text-white shadow-lg rounded-full"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <Sidebar
              chats={chats}
              currentChatId={currentChatId}
              onNewChat={handleNewChat}
              onSelectChat={handleSelectChat}
              onClearHistory={handleClearHistory}
            />
          </SheetContent>
        </Sheet>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          <ChatArea chat={currentChat} onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}
