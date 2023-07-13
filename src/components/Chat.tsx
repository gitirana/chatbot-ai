"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { ModeToggle } from "./ModeToggle";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api/chat",
  });

  return (
    <Card className="w-[440px]">
      <CardHeader className="w-full flex-row justify-between">
        <div>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
        </div>
        <ModeToggle />
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[500px] w-full pr-4">
          {messages.map((message) => {
            return (
              <div key={message.id}>
                {message.role === "assistant" && (
                  <div className="flex gap-2 text-slate-600 dark:text-slate-800 text-sm mb-4">
                    <Avatar>
                      <AvatarFallback>CB</AvatarFallback>
                      <AvatarImage src="data:image/png;base64,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" />
                    </Avatar>

                    <p className=" flex bg-slate-100 dark:bg-slate-400 rounded p-4 items-center">
                      {message.content}
                    </p>
                  </div>
                )}

                {message.role === "user" && (
                  <div className="w-full flex gap-2 text-slate-800 dark:text-slate-300 text-sm justify-end mb-4">
                    <p className="bg-slate-300 dark:bg-slate-600 rounded p-2">{message.content}</p>

                    <Avatar>
                      <AvatarFallback>TG</AvatarFallback>
                      <AvatarImage src="https://github.com/gitirana.png" />
                    </Avatar>
                  </div>
                )}
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
